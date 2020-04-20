import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { LocalizeProvider } from 'react-localize-redux';
import configureStore from './js/redux/configureStore';
import { createElectronHandler, registerLogHandler } from './logger';
import * as serviceWorker from './serviceWorker';
import App from './App';
// forward logs to electron's main thread
registerLogHandler(createElectronHandler('log-event'));

const store = configureStore();
class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <LocalizeProvider store={store}>
          <App/>
        </LocalizeProvider>
      </Provider>
    );
  }
}
// log versions
console.log('Electron', process.versions.electron);
console.log('Chrome', process.versions.chrome);
console.log('Node', process.versions.node);

ReactDOM.render(<Application/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
