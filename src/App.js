import React from 'react';

import Header from './components/Header';
import Jobs from './components/Jobs';

function App() {
  return (
    <div className="App">
      
      <Header />

      <section id="jobs" className="section">
        <div className="container">
          <Jobs />
        </div>
      </section>

    </div>
  );
}

export default App;
