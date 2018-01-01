import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import App from './app';
import stores from './store';
import './index.less';

useStrict(true);
const Root = () => (<Provider {...stores}>
  <App />
</Provider>);

if (module.hot) { // hmr necessary
  module.hot.accept();
}

render(<Root />, document.getElementById('root'));
