import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import MetamaskAuth from '../components/metamask/MetamaskAuth';

const Navigationbar = React.lazy(
  () => import('../components/navigation/Navigationbar')
);

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signIn" component={MetamaskAuth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
