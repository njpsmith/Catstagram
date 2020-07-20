import React from 'react';
import './App.css';

import Header from './components/header.component';
import Feed from './components/feed.component';


// 31202f7f-1ccc-4a62-8b60-aa2c4d814867

// https://api.thecatapi.com/v1/images/search?limit=5&order=desc&api_key=31202f7f-1ccc-4a62-8b60-aa2c4d814867



function App() {
  return (
    <div className="App">
      <Header />
     
      <Feed />
    </div>
  );
}

export default App;
