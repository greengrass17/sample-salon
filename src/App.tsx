import React from 'react';
import SalonListing from './views/SalonListing';
import SalonDetail from './views/SalonDetail';
import SalonProvider from './contexts/SalonProvider';
import FilterProvider from './contexts/FilterProvider'
import Themed from './Themed';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <SalonProvider>
      <FilterProvider>
        <Themed>
          <Router>
            <Switch>
              <Route path="/:id">
                <SalonDetail />
              </Route>
              <Route exact path="/">
                <SalonListing />
              </Route>
            </Switch>
          </Router>
        </Themed>
      </FilterProvider>
    </SalonProvider>
  );
}

export default App;
