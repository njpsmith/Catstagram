import React from 'react';
import { connect } from 'react-redux';
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
import Favourites from './components/favourites.component';


// 31202f7f-1ccc-4a62-8b60-aa2c4d814867

// https://api.thecatapi.com/v1/images/search?limit=5&order=desc&api_key=31202f7f-1ccc-4a62-8b60-aa2c4d814867

// https://cdn2.thecatapi.com/images/26u.jpg
// https://cdn2.thecatapi.com/images/bbr.jpg
// https://cdn2.thecatapi.com/images/343.gif
// https://cdn2.thecatapi.com/images/MTc0MTAxNw.gif


function App(props) {
  return (
    <Router>
      <div className={`App ${props.darkMode ? 'dark-mode-theme-enabled' : ''}`}>
        <Header />
       
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}


const mapsStateToProps = (state) => ({
  darkMode: state.darkModeReducer.darkMode 
})

export default connect(mapsStateToProps)(App);




