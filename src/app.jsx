import React from 'react';
import DevTools from 'mobx-react-devtools';
import Routes from './routes';

const App = () => {
  let devTools;
  if (process.env.NODE_ENV !== 'production') {
    devTools = <DevTools position={{ top: 0, left: 0 }} />;
  }
  return (
    <div>
      <Routes />
      {devTools}
    </div>
  );
};

export default App;
