import React from 'react';
import DevTools from 'mobx-react-devtools';
import { Link } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  let devTools;
  if (process.env.NODE_ENV !== 'production') {
    devTools = <DevTools position={{ top: 0, left: 0 }} />;
  }
  return (
    <div>
      <ul>
        <li><Link to="/">/</Link></li>
        <li><Link to="/auto">/auto</Link></li>
        <li><Link to="/list">/list</Link></li>
      </ul>
      <Routes />
      {devTools}
    </div>
  );
};

export default App;
