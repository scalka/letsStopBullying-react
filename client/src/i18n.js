import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';


i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(reactI18nextModule) // if not using I18nextProvider
  .init({
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    // path to post missing resources
    addPath: 'locales/add/{{lng}}/{{ns}}',

    // your backend server supports multiloading
    // /locales/resources.json?lng=de+en&ns=ns1+ns2
    allowMultiLoading: false, // set loadPath: '/locales/resources.json?lng={{lng}}&ns={{ns}}' to adapt to multiLoading

    // parse data after it has been fetched
    // in example use https://www.npmjs.com/package/json5
    // here it removes the letter a from the json (bad idea)
    parse: function(data) { return data.replace(/a/g, ''); },

    // have a common namespace used around the full app
    ns: ["translation"],
    defaultNS: "translation",

    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // react i18next special options (optional)
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });


export default i18n;
