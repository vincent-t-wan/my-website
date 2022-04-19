import React from 'react';
import { Switch, Routes, Route } from 'react-router-dom';

import Home from './pages/home'
import Chess from './pages/chess';

const Main = () => {
  return (
    <Switch>    
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/chess' component={Chess}></Route>
    </Switch>
  );
}

export default Main;