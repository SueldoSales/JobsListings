import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HeaderFilter from './components/HeaderFilter';
import Jobs from './components/Jobs';
import JobsSearch from './components/JobsSearch';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Header} />
          <Route path="/search" component={HeaderFilter} />

          <section id="jobs" className="section">
            <div className="container">
              
                  <Route path="/" exact component={Jobs} />
                  <Route path="/search" component={JobsSearch} />
                
            </div>
          </section>

          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
