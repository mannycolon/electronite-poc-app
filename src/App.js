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
        <p className="padauk-text">
          ၁၉၄၈ ခုနှစ်၊ဒီဇင်ဘာလ ၁၀ ရက်နေ့တွင် --ကမ္ဘာ့ကုလသမဂ္ဂအဖွဲ့ညီလာခံ အစည်းအဝေးကြီးက လူ့အခွင့်အရေး ကြေညာစာတမ်းကြီးကို အတည်ပြု၍ ကြေညာလိုက်ရာထိုကြေညာစာတမ်းကြီး၏ စာသားသည်နောက်စာမျက်နှာ များတွင် အပြည့်အစုံပါရှိသည်။ ဤကဲ့သို့ရာဇဝင်တင်မည့် ကြေညာချက်ကို ပြုလုပ်ပြီးနောက် ဤညီလာခံအစည်းအဝေးကြီးက ကမ္ဘာ့ကုလသမဂ္ဂအဖွဲ့ဝင် နိုင်ငံ အားလုံးအား ထိုကြေညာစာတမ်းကြီး၏ စာသားကိုအများပြည်သူတို့ ကြားသိစေရန် ကြေညာပါမည့် အကြောင်းကိုလည်းကောင်း၊ ထို့ပြင်နိုင်ငံများ၊ သို့တည်းမဟုတ် နယ်မြေများ၏ နိုင်ငံရေး အဆင့်အတန်းကို လိုက်၍ ခွဲခြားခြင်း မပြုဘဲအဓိကအားဖြင့် စာသင်ကျောင်းများနှင့် အခြားပညာရေး အဖွဲ့အစည်းများတွင် ထိုကြေညာစာတမ်းကြီးကို ဖြန့်ချိ ဝေငှ စေရန်၊ မြင်သာအောင် ပြသထားစေရန်၊ဖတ်ကြားစေရန်နှင့် အဓိပ္ပါယ်ရှင်းလင်း ဖော်ပြစေရန် ဆောင်ရွက်ပါမည့် အကြောင်းဖြင့် လည်းကောင်း ဆင့်ဆို လိုက်သည်။
        </p>
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

