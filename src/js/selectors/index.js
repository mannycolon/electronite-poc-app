/**
 * This module contains the state selectors.
 * These selectors receive a slice of the state
 * applicable to the reducer in question.
 */
import * as fromSettingsReducer from '../reducers/settingsReducer';
import * as fromLocaleSettings from '../reducers/localeSettings';


/**
 * Retrieves an application setting
 * @param {object} state
 * @param key
 * @return {*}
 */
export const getSetting = (state, key) =>
  fromSettingsReducer.getSetting(state.settingsReducer, key);


/**
 * Returns a list of loaded languages available for the app locale.
 * This is a wrapper around react-localize-redux
 * @param {object} state
 * @return {Language[]}
 */
export const getLocaleLanguages = (state) =>
  fromLocaleSettings.getLanguages(state);

/**
 * Returns the currently active app locale.
 * This is a wrapper around react-localize-redux
 * @param {object} state
 * @return {Language}
 */
export const getActiveLocaleLanguage = (state) =>
  fromLocaleSettings.getActiveLanguage(state);

/**
 * Checks if the locale has finished loading
 * @param {object} state
 * @return {bool}
 */
export const getLocaleLoaded = (state) =>
  fromLocaleSettings.getLocaleLoaded(state.localeSettings);

/**
 * Retrieves the translate function.
 * This is a wrapper that encapsulates the translate reducer.
 *
 * @param {object} state
 * @return {*}
 */
export const getTranslate = (state) =>
  fromLocaleSettings.getTranslate(state);
