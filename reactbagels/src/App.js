import React, {Component} from 'react';
import './App.css';
import BagelContainer from './BagelContainer'
import BagelForm from './BagelForm'

class App extends Component {

  
  render(){
  return (
    <div className="App">
      <h1>Reactive Bagels</h1>
      <BagelForm/>
      <BagelContainer/>
    </div>
  );
}
}

export default App;
