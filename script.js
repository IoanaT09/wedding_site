// Guests who asked their browser to calm down get the same sequence, just quickly.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============ Envelope intro ============
const envelopeScreen = document.getElementById('envelope-screen');
const envelope = document.getElementById('envelope');
const seal = document.getElementById('seal');
const site = document.getElementById('site');

function showSite() {
    site.hidden = false;
    // Starts the hero's entrance, which is timed to run against the intro
    // leaving rather than as a fade of its own.
    site.classList.add('is-entering');
    document.body.style.overflow = '';
}

// The choreography itself lives in style.css; JS only starts it and then
// hands over to the site once the letter has grown to fill the screen.
let opening = false;

function openEnvelope() {
    if (opening) return;          // a second tap must not restart the sequence
    opening = true;
    envelopeScreen.classList.add('is-opening');

    // The hero is put in place just before the intro starts to leave, so
    // both halves of the reveal move together. Keep in step with --t-exit.
    setTimeout(showSite, reduceMotion ? 120 : 2200);
    setTimeout(() => envelopeScreen.remove(), reduceMotion ? 320 : 3300);
}

// <button> handles Enter and Space natively, so click is the only listener needed.
seal.addEventListener('click', openEnvelope);
// Tapping the envelope works too — nobody should have to hit a small circle
// to open their own invitation. The seal is the affordance, not the gate.
envelope.addEventListener('click', openEnvelope);
document.body.style.overflow = 'hidden';

// If anything below throws, the page must not be left locked behind a dead envelope.
window.addEventListener('error', () => {
    showSite();
    envelopeScreen.remove();
});

// ============ Language (RO / EN) ============
// Every string comes from CONTENT in content.js, keyed by the data-i18n
// attributes in the markup. Nothing is duplicated in the DOM.
const DEFAULT_LANG = 'ro';
const langToggles = document.querySelectorAll('.lang-toggle');
let currentLang = DEFAULT_LANG;

function setLang(lang) {
    const dict = CONTENT[lang];
    if (!dict) return;

    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const text = dict[el.dataset.i18n];
        if (text !== undefined) el.textContent = text;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        const text = dict[el.dataset.i18nAriaLabel];
        if (text !== undefined) el.setAttribute('aria-label', text);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const text = dict[el.dataset.i18nAlt];
        if (text !== undefined) el.setAttribute('alt', text);
    });

    // The toggle shows the language you'd switch *to*.
    langToggles.forEach(btn => { btn.textContent = lang === 'en' ? 'RO' : 'EN'; });

    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }
}

langToggles.forEach(btn => {
    btn.addEventListener('click', () => setLang(currentLang === 'en' ? 'ro' : 'en'));
});

// Remember the guest's choice; otherwise Romanian.
let savedLang;
try { savedLang = localStorage.getItem('lang'); } catch (e) { /* private mode */ }
setLang(CONTENT[savedLang] ? savedLang : DEFAULT_LANG);

// ============ Gallery ============
// Built from the GALLERY array so adding or reordering photographs is a
// one-line change in content.js. Runs before the reveal observer below so
// the new tiles get picked up with everything else.
const galleryGrid = document.getElementById('gallery-grid');

function buildGallery() {
    if (!galleryGrid || typeof GALLERY === 'undefined') return;
    galleryGrid.innerHTML = '';
    GALLERY.forEach((src, i) => {
        const figure = document.createElement('figure');
        figure.className = 'gallery-item reveal';
        figure.dataset.reveal = 'fade-up';
        figure.style.setProperty('--i', i % 3);

        const img = document.createElement('img');
        img.src = src;
        // setAttribute rather than the property: the attribute is what the
        // browser's preload scanner reads, and it can't be missed.
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
        img.alt = '';                       // set per language in setLang
        img.dataset.i18nAlt = 'gallery.alt';

        figure.appendChild(img);
        galleryGrid.appendChild(figure);
    });
}

buildGallery();
setLang(currentLang);   // fills in the alt text on the tiles just created

// ============ Add to calendar ============
// The .ics is assembled on demand from the same dictionary entries the page
// displays, so the calendar entry can never disagree with the page.
const calendarBtn = document.getElementById('calendar-btn');

function icsEscape(text) {
    return String(text).replace(/[\\;,]/g, m => '\\' + m).replace(/\n/g, '\\n');
}

function icsStamp(date) {
    return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

function buildIcs() {
    const dict = CONTENT[currentLang];
    const start = new Date(WEDDING);
    const end = new Date(start.getTime() + 9 * 3600 * 1000);   // through the reception

    const description = [
        dict['details.ceremony.label'] + ': ' + dict['details.ceremony.value'],
        dict['details.reception.label'] + ': ' + dict['details.reception.value'],
        dict['details.reception.sub']
    ].join('\n');

    return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Ioana & Rares//Wedding//EN',
        'BEGIN:VEVENT',
        'UID:wedding-' + icsStamp(start) + '@ioana-rares',
        'DTSTAMP:' + icsStamp(new Date()),
        'DTSTART:' + icsStamp(start),
        'DTEND:' + icsStamp(end),
        'SUMMARY:' + icsEscape(dict['calendar.summary']),
        'LOCATION:' + icsEscape(dict['details.ceremony.sub']),
        'DESCRIPTION:' + icsEscape(description),
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');                       // CRLF is required by the spec
}

if (calendarBtn) {
    calendarBtn.addEventListener('click', () => {
        const blob = new Blob([buildIcs()], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ioana-rares-2026-10-03.ics';
        link.click();
        URL.revokeObjectURL(url);
    });
}

// ============ Countdown ============
const countdownUnits = document.getElementById('countdown-units');
const countdownPast = document.querySelector('.countdown-past');

function updateCountdown() {
    if (!countdownUnits) return;
    const remaining = new Date(WEDDING) - Date.now();

    if (remaining <= 0) {
        countdownUnits.hidden = true;
        if (countdownPast) countdownPast.hidden = false;
        return true;                        // nothing left to count
    }

    const minutes = Math.floor(remaining / 60000);
    const parts = {
        days: Math.floor(minutes / 1440),
        hours: Math.floor(minutes / 60) % 24,
        minutes: minutes % 60
    };
    countdownUnits.querySelectorAll('[data-cd]').forEach(el => {
        el.textContent = parts[el.dataset.cd];
    });
    return false;
}

if (!updateCountdown()) {
    // Minutes are the smallest unit shown, so there is nothing to gain from
    // ticking more often than twice a minute.
    setInterval(updateCountdown, 30000);
}

// ============ Scroll reveal ============
// Note: .reveal is never placed on a language-swapped element — a hidden element
// never intersects, so it would stay invisible after switching language.
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
