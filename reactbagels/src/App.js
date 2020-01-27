import React from 'react';
import './App.css';
import BagelContainer from './BagelContainer'
import BagelForm from './BagelForm'

function App() {
  return (
    <div className="App">
      <h1>Reactive Bagels</h1>
      <BagelForm/>
      <BagelContainer/>
    </div>
  );
}

export default App;
