// ============================================================================
//  ALL SITE TEXT LIVES HERE.
//
//  To change any wording, edit this file — nothing else. Each key below
//  matches a data-i18n="..." attribute in index.html.
//
//  STILL TO FILL IN (search for "[" to find them):
//    - ceremony + reception venue names
//    - the dress code
//    - the welcome paragraph ("[X] years together")
//  Elsewhere:
//    - the RSVP link (href in index.html, currently YOUR_GOOGLE_FORM_LINK)
//    - the map links (hrefs in index.html, currently REPLACE+WITH+ADDRESS)
//    - the venue names and times in wedding.ics
//    - YOUR_SITE_URL in the share-preview tags in index.html
// ============================================================================

// When it all happens. Drives the countdown; the calendar file has its own
// copy of these times in UTC.
const WEDDING = '2026-10-03T15:00:00+02:00';

// The gallery, in order. Swap these filenames for the real photographs —
// anything the browser can display works, and the grid crops them to 4:5.
const GALLERY = [
    'img/photo-1.svg',
    'img/photo-2.svg',
    'img/photo-3.svg',
    'img/photo-4.svg',
    'img/photo-5.svg',
    'img/photo-6.svg'
];

const CONTENT = {
    ro: {
        'a11y.open': 'Deschide invitația',
        'a11y.lang': 'Schimbă limba',

        'envelope.eyebrow': 'Sunteți invitați',
        'envelope.hint': 'apasă sigiliul pentru a deschide',

        'hero.eyebrow': 'Ne căsătorim',
        'hero.date': '3 octombrie 2026',

        'welcome.eyebrow': 'Dragă invitat',
        'welcome.body': 'După [X] ani împreună, în sfârșit facem pasul cel mare — și nu ne-am dori nimic mai mult decât să sărbătorim alături de oamenii care contează cel mai mult pentru noi.',

        'details.eyebrow': 'Detalii',
        'details.ceremony.label': 'Ceremonia',
        'details.ceremony.value': '3 octombrie 2026 · 15:00',
        'details.ceremony.sub': '[Biserica / locația], Viena',
        'details.reception.label': 'Petrecerea',
        'details.reception.value': '3 octombrie 2026 · 18:00',
        'details.reception.sub': '[Locația petrecerii], Viena',
        'details.dress.label': 'Ținută',
        'details.dress.value': '[Elegantă / de grădină / etc.]',
        'details.dress.sub': 'Recomandăm pantofi comozi',
        'details.map': 'Vezi harta',
        'details.calendar': 'Adaugă în calendar',
        'details.calendar.google': 'Google Calendar',
        'details.calendar.ics': 'Descarcă .ics',

        'countdown.eyebrow': 'Până în ziua cea mare',
        'countdown.days': 'zile',
        'countdown.hours': 'ore',
        'countdown.minutes': 'minute',
        'countdown.past': 'Vă mulțumim că ați sărbătorit alături de noi.',

        'gallery.eyebrow': 'Noi doi',
        'gallery.alt': 'Ioana și Rareș',

        'timeline.eyebrow': 'Cum se desfășoară ziua',
        'timeline.arrival': 'Sosirea invitaților',
        'timeline.ceremony': 'Ceremonia',
        'timeline.photos': 'Poze & cocktail',
        'timeline.dinner': 'Cină & petrecere',
        'timeline.dance': 'Primul dans & distracție',

        'rsvp.eyebrow': 'Vă rugăm confirmați până la',
        'rsvp.deadline': '1 septembrie 2026',
        'rsvp.button': 'Confirmă prezența'
    },

    en: {
        'a11y.open': 'Open the invitation',
        'a11y.lang': 'Switch language',

        'envelope.eyebrow': 'You are invited',
        'envelope.hint': 'tap the seal to open',

        'hero.eyebrow': "We're getting married",
        'hero.date': '3 October 2026',

        'welcome.eyebrow': 'Dear guest',
        'welcome.body': "After [X] years together, we're finally making it official — and we'd love nothing more than to celebrate with the people who mean the most to us.",

        'details.eyebrow': 'The details',
        'details.ceremony.label': 'Ceremony',
        'details.ceremony.value': '3 October 2026 · 15:00',
        'details.ceremony.sub': '[Church / venue name], Vienna',
        'details.reception.label': 'Reception',
        'details.reception.value': '3 October 2026 · 18:00',
        'details.reception.sub': '[Reception venue name], Vienna',
        'details.dress.label': 'Dress code',
        'details.dress.value': '[Formal / Garden / etc.]',
        'details.dress.sub': 'Comfortable shoes recommended',
        'details.map': 'View map',
        'details.calendar': 'Add to calendar',
        'details.calendar.google': 'Google Calendar',
        'details.calendar.ics': 'Download .ics',

        'countdown.eyebrow': 'Until the day',
        'countdown.days': 'days',
        'countdown.hours': 'hours',
        'countdown.minutes': 'minutes',
        'countdown.past': 'Thank you for celebrating with us.',

        'gallery.eyebrow': 'The two of us',
        'gallery.alt': 'Ioana and Rareș',

        'timeline.eyebrow': 'How the day unfolds',
        'timeline.arrival': 'Guests arrive',
        'timeline.ceremony': 'Ceremony',
        'timeline.photos': 'Photos & drinks',
        'timeline.dinner': 'Dinner & reception',
        'timeline.dance': 'First dance & party',

        'rsvp.eyebrow': 'Kindly reply by',
        'rsvp.deadline': '1 September 2026',
        'rsvp.button': 'RSVP'
    }
};
