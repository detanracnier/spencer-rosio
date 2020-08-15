import React from 'react';
import Navbar from './components/navbar/navbar';
import ContentContainer from './components/contentContainer/contentContainer';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="app_wrapper">
        <div className="app_container">
          <Navbar />
          <ContentContainer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
