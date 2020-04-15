import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Jobs from './components/Jobs';
import JobsSearch from './components/JobsSearch';

function App() {
  return (
    <div className="App">
      <Header />

      <section id="jobs" className="section">
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Jobs} />
              <Route path="/search" component={JobsSearch} />
            </Switch>
          </BrowserRouter>
        </div>
      </section>

    </div>
  );
}

export default App;
