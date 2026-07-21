// ============ Envelope intro ============
const envelopeScreen = document.getElementById('envelope-screen');
const envelope = document.getElementById('envelope');
const seal = document.getElementById('seal');
const site = document.getElementById('site');

function openEnvelope() {
    envelope.classList.add('open');

    // Reveal the site underneath once the letter has slid out
    setTimeout(() => {
        site.hidden = false;
        envelopeScreen.classList.add('hide');
        document.body.style.overflow = '';
        // Trigger the hero's own reveal once it's visible
        requestAnimationFrame(() => {
            document.querySelectorAll('.hero.reveal').forEach(el => el.classList.add('visible'));
        });
    }, 1800);

    setTimeout(() => {
        envelopeScreen.remove();
    }, 2700);
}

seal.addEventListener('click', openEnvelope);
seal.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') openEnvelope();
});
document.body.style.overflow = 'hidden';

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