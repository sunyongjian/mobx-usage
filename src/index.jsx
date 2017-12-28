import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './app';
import stores from './store';
import './index.less';

const Root = () => (<Provider {...stores}>
  <App />
</Provider>);

if (module.hot) { // hmr necessary
  module.hot.accept();
}

render(<Root />, document.getElementById('root'));
