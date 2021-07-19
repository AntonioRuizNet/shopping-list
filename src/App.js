import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

//import Layout from './Layout';
import NotFound from './pages/NotFound';
import List from './pages/List';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/list" component={List} />
                    <Route component={NotFound} />
                </Switch>
      </BrowserRouter>
  )
}

