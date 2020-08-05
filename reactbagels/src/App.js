import React, {Component} from 'react';
import './App.css';
import BagelContainer from './BagelContainer'
import BagelForm from './BagelForm'
const BASE_URL = 'http://bagel-api-fis.herokuapp.com/bagels'
class App extends Component {
  
  state = {
    bagels: []
  }

  componentDidMount(){
    fetch(BASE_URL)
      .then(response => response.json())
      .then(bagels => this.setState({bagels}))
  }

  makeBagel = bagel => {
    return fetch(BASE_URL, {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(bagel)
    })
    .then(response => response.json())
    .then(bagel => this.setState({ bagels: [...this.state.bagels, bagel] }))
  }


  render(){
  return (
    <div className="App">
      <h1>Reactive Bagels</h1>
      <BagelForm makeBagel={this.makeBagel}/>
      <BagelContainer bagels={this.state.bagels}/>
    </div>
  )
}
}

export default App;
