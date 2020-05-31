import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Constructor from "./pages/Constructor/index";
import Trainer from "./pages/Trainer/index";

import './App.scss'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Constructor} />
        <Route path="/trainer/:id" component={Trainer} />
      </div>
    </Router>
  );
}

export default App;
