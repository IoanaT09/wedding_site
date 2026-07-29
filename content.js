// ============================================================================
//  ALL SITE TEXT LIVES HERE.
//
//  To change any wording, edit this file — nothing else. Each key below
//  matches a data-i18n="..." attribute in index.html.
// ============================================================================

// When it all happens. Drives the countdown; the calendar file has its own
// copy of these times in UTC.
const WEDDING = '2026-10-03T16:00:00+03:00';

// The gallery, in order. Swap these filenames for the real photographs —
// anything the browser can display works, and the grid crops them to 3:2
// (landscape) rather than a portrait ratio.
const GALLERY = [
    'img/1london.webp',
    'img/2iceland.webp',
    'img/3stockholm.webp',
    'img/4london.webp',
    'img/5iceland.webp',
    'img/6hinterstoder.webp'
];

const CONTENT = {
    ro: {
        'a11y.open': 'Deschide invitația',
        'a11y.lang': 'Schimbă limba',
        'a11y.close': 'Închide',

        'envelope.eyebrow': 'Sunteți invitați',
        'envelope.hint': 'apasă sigiliul pentru a deschide',

        'hero.eyebrow': 'Ne căsătorim',
        'hero.date': '3 Octombrie 2026',

        'welcome.body': 'Vă invităm, împreună cu părinții noștri, să participați la momentul în care două vieți devin una, două jumătăți devin un întreg, doi prieteni devin soț și soție.',
        'welcome.godparents.intro': 'Ne bucurăm să îi avem ca nași pe',
        'welcome.godparents.pair1.names': 'George și Mandy',
        'welcome.godparents.pair1.surname': 'Tămaș',
        'welcome.godparents.pair2.names': 'Mihai Greblă și',
        'welcome.godparents.pair2.surname': 'Iulia Tuduce',

        'details.date': '3 Octombrie 2026',
        'details.ceremony.label': 'Ceremonia',
        'details.ceremony.value': 'Ora 16:00',
        'details.ceremony.sub': 'Catedrala Ortodoxă Sfânta Vineri, Zalău',
        'details.reception.label': 'Petrecerea',
        'details.reception.value': 'Ora 18:00',
        'details.reception.sub': 'Restaurant Brilliant Parc - Sala Belvedere , Zalău',
        'details.map': 'Vezi harta',
        'details.calendar': 'Adaugă în calendar',
        'calendar.summary': 'Nunta Ioanei și a lui Rareș',

        'countdown.eyebrow': 'Până în ziua cea mare',
        'countdown.days': 'zile',
        'countdown.hours': 'ore',
        'countdown.minutes': 'minute',
        'countdown.past': 'Vă mulțumim că ați sărbătorit alături de noi.',

        'gallery.eyebrow': 'Noi doi',
        'gallery.alt': 'Ioana și Rareș',

        'rsvp.eyebrow': 'Vă rugăm confirmați până la',
        'rsvp.deadline': '1 Septembrie 2026',
        'rsvp.button': 'Confirmă prezența',

        'footer.egg': 'apasă aici',
        'footer.egg.alt': 'Bogi'
    },

    en: {
        'a11y.open': 'Open the invitation',
        'a11y.lang': 'Switch language',
        'a11y.close': 'Close',

        'envelope.eyebrow': 'You are invited',
        'envelope.hint': 'tap the seal to open',

        'hero.eyebrow': "We're getting married",
        'hero.date': '3 October 2026',

        'welcome.body': 'Together with our parents, we invite you to witness the moment two lives become one, two halves become whole, and two friends become husband and wife.',
        'welcome.godparents.intro': "We're delighted to have as godparents",
        'welcome.godparents.pair1.names': 'George and Mandy',
        'welcome.godparents.pair1.surname': 'Tămaș',
        'welcome.godparents.pair2.names': 'Mihai Greblă and',
        'welcome.godparents.pair2.surname': 'Iulia Tuduce',

        'details.date': '3 October 2026',
        'details.ceremony.label': 'Ceremony',
        'details.ceremony.value': '16:00',
        'details.ceremony.sub': 'Sfânta Vineri Orthodox Cathedral, Zalău',
        'details.reception.label': 'Reception',
        'details.reception.value': '18:00',
        'details.reception.sub': 'Brilliant Parc Restaurant – Belvedere Hall, Zalău',
        'details.map': 'View map',
        'details.calendar': 'Add to calendar',
        'calendar.summary': 'Ioana & Rareș — Wedding',

        'countdown.eyebrow': 'Until the day',
        'countdown.days': 'days',
        'countdown.hours': 'hours',
        'countdown.minutes': 'minutes',
        'countdown.past': 'Thank you for celebrating with us.',

        'gallery.eyebrow': 'The two of us',
        'gallery.alt': 'Ioana and Rareș',

        'rsvp.eyebrow': 'Kindly reply by',
        'rsvp.deadline': '1 September 2026',
        'rsvp.button': 'RSVP',

        'footer.egg': 'click here',
        'footer.egg.alt': 'Bogi'
    }
};
