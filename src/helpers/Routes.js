import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Manager from '../views/Manager';
import Customer from '../views/Customer';
import Cart from '../views/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={() => <Customer />} />
      <Route exact path='/manager' component={() => <Manager />} />
      <Route exact path='/cart' component={() => <Cart />} />
    </Switch>
  );
}
