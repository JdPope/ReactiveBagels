import React, {Component} from 'react';
import './App.css';
import BagelContainer from './BagelContainer'
import BagelForm from './BagelForm'

class App extends Component {

  state = {
    bagels: []
  }

  componentDidMount(){
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
      .then(response => response.json())
      .then(result => console.log(result))
  }

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
