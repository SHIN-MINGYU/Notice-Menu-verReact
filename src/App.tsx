import React from 'react';
import './App.css';
import header from './containers/header';
import desc from './containers/desc';
import tail from './containers/tails';

function App() {
  return (
    <>
      {header()}
      {desc()}
      {tail()}
    </>
  )
}

export default App;
