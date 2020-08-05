import React from 'react';
import '../Styles/style.css';

function Bagel(props){
  return(
    <div className='bagel-card'>
      <h3>Bagel Type</h3>
      <p>{props.bagel.type}</p>
      <button onClick={()=> props.delete(props.bagel)}>DELETE</button>
    </div>
  )
}

export default Bagel
