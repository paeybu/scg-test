import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Topnav from './components/Topnav';
import Footer from './components/Footer';
import FindBC from './components/FindBC';
import Direction from './components/Direction';
import CV from './components/CV';

const queryCache = new QueryCache();

const App = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        <Topnav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/findbc' component={FindBC} />
          <Route exact path='/direction' component={Direction} />
          <Route exact path='/cv' component={CV} />
        </Switch>
        <Footer />
        <ReactQueryDevtools initialIsOpen />
      </Router>
    </ReactQueryCacheProvider>
  );
};

export default App;
