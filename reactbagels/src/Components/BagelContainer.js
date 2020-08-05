import React from 'react';
import Bagel from './bagel';
import '../Styles/style.css';


function BagelContainer(props){
const bagelItem = props.bagels.map(bagel => {
 return <Bagel key={bagel.id} bagel={bagel} delete={props.deleteBagel}/>
})
  
  return(
    <div className='container'>
      <h2>This is the Bagel Container</h2>
      {bagelItem}
    </div>
  )

}
export default BagelContainer
