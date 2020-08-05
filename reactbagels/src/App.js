import React, {Component} from 'react';
import './Styles/style.css';
import BagelContainer from './Components/BagelContainer';
import BagelForm from './Components/BagelForm';
const BASE_URL = 'http://bagel-api-fis.herokuapp.com/bagels';
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

  deleteBagel = bagel => {
    const newBagels = this.state.bagels.filter(newBagel => {
      return newBagel !== bagel
    })

    this.setState({ bagels: newBagels })
    fetch(`${BASE_URL}/${bagel.id}`, {
      method: "DELETE"
    })
  }


  render(){
  return (
    <div className="App">
      <h1>Reactive Bagels</h1>
      <BagelForm makeBagel={this.makeBagel}/>
      <BagelContainer bagels={this.state.bagels} deleteBagel={this.deleteBagel}/>
    </div>
  )
}
}

export default App;
