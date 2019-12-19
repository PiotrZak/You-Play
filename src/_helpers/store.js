import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { loadTranslations, setLocale, syncTranslationWithStore, I18n } from 'react-redux-i18n';
// import { translations } from '../translations'

// I18n.fallbacks = true

const loggerMiddleware = createLogger();

// function myHandleMissingTranslation(key, replacements) {
//   return key.replace('_', '.');
// }

// I18n.setHandleMissingTranslation(myHandleMissingTranslation);

/*
var browserLang = (navigator.languages && navigator.languages[0]) || // Chrome / Firefox
               navigator.language ||   // All browsers
               navigator.userLanguage; // IE <= 10

var languages = ['en', 'pl']
var lng = localStorage.getItem('lang') === null ? (languages.includes(browserLang) ? browserLang : languages[0]) : localStorage.getItem('lang')
*/

export const store = createStore(
    rootReducer,
    composeWithDevTools(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
));

// syncTranslationWithStore(store)
// store.dispatch(loadTranslations(translations))
// store.dispatch(setLocale( lng ))