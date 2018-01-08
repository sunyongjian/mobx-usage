import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Auto from './pages/auto';
import List from './pages/list';
import Gather from './pages/gather';

const Routes = () => (
  <div style={{ margin: '20px auto' }}>
    <Route exact path="/" component={Home} />
    <Route path="/auto" component={Auto} />
    <Route path="/list" component={List} />
    <Route path="/gather" component={Gather} />
  </div>
);

export default Routes;
