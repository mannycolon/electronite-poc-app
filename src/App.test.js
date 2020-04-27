import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocalizeProvider } from 'react-localize-redux';
import configureStore from './js/redux/configureStore';
import App from './App';

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
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Application />, div);
  ReactDOM.unmountComponentAtNode(div);
});
