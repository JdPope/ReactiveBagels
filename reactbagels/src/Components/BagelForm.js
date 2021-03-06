import React, {Component} from 'react';
import '../Styles/style.css';

class BagelForm extends Component{

    state = {
        type:'create bagel here'
      }
    
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    handleSubmit = event => {
      event.preventDefault()
      this.props.makeBagel(this.state)
      event.target.reset()
    }

    render(){
    return (
        <div className='form'>
        <h2>This is the Bagels Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input id="bagel" name="type" type="text" value={this.state.type} onChange={this.handleChange} />
          <button type="submit">Make Bagel!</button>
        </form>
        </div>
    )
    }
}

export default BagelForm