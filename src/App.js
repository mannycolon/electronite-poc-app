import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withLocalize } from 'react-localize-redux';
import { getLocaleLoaded, getSetting } from './js/selectors';
import { loadLocalization, APP_LOCALE_SETTING } from './js/actions/LocaleActions';
import logo from './logo.svg';
import './App.css';
// constants
import {
// APP_VERSION,
// LOG_FILES_PATH,
  LOCALE_DIR,
// TOOLS_DIR,
} from './js/common/constants';

class App extends Component {
  constructor(props) {
    super(props);
    // load app locale
    this.props.loadLocalization(LOCALE_DIR, this.props.appLanguage, this.props.initialize, this.props.addTranslationForLanguage, this.props.setActiveLanguage);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  loadLocalization: PropTypes.func.isRequired,
  addTranslationForLanguage: PropTypes.func.isRequired,
  setActiveLanguage: PropTypes.func.isRequired,
  // migrateResourcesFolder: PropTypes.func.isRequired,
  // migrateToolsSettings: PropTypes.func.isRequired,
  // getAnchorTags: PropTypes.func.isRequired,
  isLocaleLoaded: PropTypes.bool,
  appLanguage: PropTypes.any,
  // loadTools: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLocaleLoaded: getLocaleLoaded(state),
  appLanguage: getSetting(state, APP_LOCALE_SETTING),
});

const mapDispatchToProps = { loadLocalization };

export default withLocalize(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));

