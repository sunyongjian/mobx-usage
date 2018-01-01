import React from 'react';
import DevTools from 'mobx-react-devtools';
import List from './components/list';
import Count from './components/count';
import Info from './components/info';

const App = () => {
  let devTools;
  if (process.env.NODE_ENV !== 'production') {
    devTools = <DevTools position={{ top: 0, left: 0 }} />;
  }
  return (
    <div>
      <img src={require('./logo.svg')} alt="logo" />
      <Count />
      <div style={{ border: '1px solid #ccc', margin: '20px 0' }} />
      <Info />
      <List />
      {devTools}
    </div>
  );
};

export default App;
