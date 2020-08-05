import React, {Component} from 'react';

class BagelForm extends Component{

    state = {
        type:'default bagel'
      }
    
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    handleSubmit = event => {
      event.preventDefault()
      this.props.makeBagel(this.state)
    }

    render(){
    return (
        <>
        <h2>This is the Bagels Form</h2>
        <form onSubmit={this.handleSubmit}>
        <label>
            Make a Bagel!
            <input id="bagel" name="type" type="text" value={this.state.type} onChange={this.handleChange} />
          </label>
          <button type="submit">Make Bagel!</button>
        </form>
        </>
    )
    }
}

export default BagelForm