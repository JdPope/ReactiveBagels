import React from 'react';
import Bagel from './bagel'


function BagelContainer(props){
  const bagelItem = props.bagels.map(bagel => <Bagel bagel={bagel.type}/>)
  return(
    <div>
      <h2>This is the Bagel Container</h2>
      {bagelItem}
    </div>
  )

}
export default BagelContainer
