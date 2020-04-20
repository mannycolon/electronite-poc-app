import { combineReducers } from 'redux';
// List of reducers
import { localizeReducer as localize } from 'react-localize-redux';
import settingsReducer from './settingsReducer';
import localeSettings from './localeSettings';

// combining reducers
const rootReducers = combineReducers({
  localize,
  localeSettings,
  settingsReducer,
});

export default rootReducers;
