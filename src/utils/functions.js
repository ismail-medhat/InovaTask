import { Platform } from 'react-native';

import { getAppLanguage } from '../Local/i18n';

// ----------------------- isAr ----------------------- //

export const isAr = () => {
  return getAppLanguage() === 'ar';
};

// ----------------------- isIos ----------------------- //

export const isIos = () => {
  return Platform.OS === 'ios';
};
