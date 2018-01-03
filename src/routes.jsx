import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Auto from './pages/auto';

const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/auto" component={Auto} />
    <Route path="/list" component={Home} />
  </div>
);

export default Routes;
