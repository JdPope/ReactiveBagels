import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './Styles/style.css';
import BagelContainer from './Components/BagelContainer';
import FavoritesContainer from './Components/FavoritesContainer';
import BagelForm from './Components/BagelForm';
const BASE_URL = 'http://bagel-api-fis.herokuapp.com/bagels';
class App extends Component {
  
  state = {
    bagels: [],
    favorites:[]
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

  addToFavorites = (bagel) => {
    if(!this.state.favorites.find(bag => bag.id === bagel.id)){
    this.setState({favorites: [...this.state.favorites,bagel]})
    }
  }

  removeFromFavorites = (bagel) => {
    let newFavs = this.state.favorites.filter(bag => bag.id !== bagel.id)
    this.setState({favorites: newFavs})
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
    <Router>
      <div className="App">
        <h1>Reactive Bagels</h1>
        <li>
              <Link to="/favorites">Favorites</Link>
        </li>
        <li>
              <Link to="/">Home</Link>
        </li>
      <Switch>
        <Route path="/favorites">
          <FavoritesContainer favorites={this.state.favorites} action={this.removeFromFavorites}/>
        </Route>
      </Switch>
        <BagelForm makeBagel={this.makeBagel}/>
        <BagelContainer bagels={this.state.bagels} deleteBagel={this.deleteBagel} action={this.addToFavorites}/>
      </div>
    </Router>
  )
}
}

export default App;
