// Guests who asked their browser to calm down get the same sequence, just quickly.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============ Envelope intro ============
const envelopeScreen = document.getElementById('envelope-screen');
const envelope = document.getElementById('envelope');
const seal = document.getElementById('seal');
const site = document.getElementById('site');

function showSite() {
    site.hidden = false;
    document.body.style.overflow = '';
    // The hero is excluded from the scroll observer, so reveal it by hand.
    requestAnimationFrame(() => {
        document.querySelectorAll('.hero.reveal').forEach(el => el.classList.add('visible'));
    });
}

function openEnvelope() {
    envelope.classList.add('open');

    setTimeout(() => {
        showSite();
        envelopeScreen.classList.add('hide');
    }, reduceMotion ? 150 : 1800);

    setTimeout(() => {
        envelopeScreen.remove();
    }, reduceMotion ? 400 : 2700);
}

// <button> handles Enter and Space natively, so click is the only listener needed.
seal.addEventListener('click', openEnvelope);
document.body.style.overflow = 'hidden';

// If anything below throws, the page must not be left locked behind a dead envelope.
window.addEventListener('error', showSite);

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

// ============ Scroll reveal ============
// Note: .reveal is never placed on a language-swapped element — a hidden element
// never intersects, so it would stay invisible after switching language.
const revealEls = document.querySelectorAll('.reveal:not(.hero)');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
