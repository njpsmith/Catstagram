import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/header.component';
import Feed from './components/feed.component';
import About from './components/about.component';


// 31202f7f-1ccc-4a62-8b60-aa2c4d814867

// https://api.thecatapi.com/v1/images/search?limit=5&order=desc&api_key=31202f7f-1ccc-4a62-8b60-aa2c4d814867



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/favourites">
            {/*<Users />*/}
          </Route>
          <Route path="/">
            {/*<Home />*/}
            <Feed />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
