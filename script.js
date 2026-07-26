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

// ============ Language toggle (EN / RO) ============
// There are two toggles — one on the envelope landing screen, one in the site.
const langToggles = document.querySelectorAll('.lang-toggle');
let currentLang = 'en';

function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-en').forEach(el => { el.hidden = lang !== 'en'; });
    document.querySelectorAll('.lang-ro').forEach(el => { el.hidden = lang !== 'ro'; });
    langToggles.forEach(btn => { btn.textContent = lang === 'en' ? 'RO' : 'EN'; });
    document.documentElement.lang = lang;
}

langToggles.forEach(btn => {
    btn.addEventListener('click', () => setLang(currentLang === 'en' ? 'ro' : 'en'));
});

// Default to Romanian on first load (guests can switch to English via the toggle)
setLang('ro');

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
