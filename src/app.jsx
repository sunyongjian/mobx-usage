import React from 'react';
import List from './components/list';
import Count from './components/count';
import Info from './components/info';


const App = () => (
  <div>
    <img src={require('./logo.svg')} alt="logo" />
    <Count />
    <div style={{ border: '1px solid #ccc', margin: '20px 0' }} />
    <Info />
    <List />
  </div>
);

export default App;
