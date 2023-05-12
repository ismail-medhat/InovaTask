import { I18nManager } from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from './en.json';
import ar from './ar.json';
import RNRestart from 'react-native-restart';


I18n.translations = {
  en,
  ar,
};

// Is it a RTL language?
export const isRTL = function () {
  const currentLocale = I18n.currentLocale();
  return currentLocale.includes("ar");
};



let AppLanguage = I18n.currentLocale().includes("ar") ? 'ar' : 'en';



export function getAppLanguage() {
  return AppLanguage;
}

export const setAppLanguage = async (lang, restart = true) => {
  AppLanguage = lang;
  if (lang === 'ar') {
    I18nManager.forceRTL(true);
  } else {
    I18nManager.forceRTL(false);
  }

  if (restart) {
    RNRestart.Restart();
  }
};

export const Restart = (restart = true) => {
  if (restart) {
    RNRestart.Restart();
  }
};


export function strings(name, params = {}) {
  params = { locale : AppLanguage };
  return I18n.t(name, params);
}

export const which = (ltr, rtl) => {
  if (AppLanguage == 'ar') {
    return rtl;
  } else {
    return ltr;
  }
};

export default I18n;
