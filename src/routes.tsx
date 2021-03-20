import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/profile/:id+" component={Profile} />
  </Switch>
);

export default Routes;
