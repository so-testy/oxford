import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Constructor from "./pages/Constructor/index";

import './App.scss'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Constructor} />
      </div>
    </Router>
  );
}

export default App;
