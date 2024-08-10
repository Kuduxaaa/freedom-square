const LANGUAGES = {
    en: {
        name: 'English',
        publications: 'Publications',
        contact: 'Contact'
    },

    ka: {
        name: 'ქართული',
        publications: 'პუბლიცკაციები',
        contact: 'კონტაქტი'
    }
};

let langFromLocalStorage = window.localStorage.getItem('lang');
let selectedLanguage = (langFromLocalStorage === null) ? 'ka' : langFromLocalStorage;

function $(key) {
    if (!Object.prototype.call(selectedLanguage, LANGUAGES) || !Object.prototype.call(key, LANGUAGES[selectedLanguage])) {
        return key;
    }

    return LANGUAGES[selectedLanguage][key];
}

function changeLanguage(language) {
    window.localStorage.setItem('lang', language);
    selectedLanguage = language;
}