import React from 'react';
import '../Styles/style.css';

function Bagel(props){
  const handleDelete = (event)=> {
    event.stopPropagation()
    props.delete(props.bagel)
  }
  return(
    <div className='bagel-card' onClick={()=> props.action(props.bagel)}>
      <h3>Bagel Type</h3>
      <p>{props.bagel.type}</p>
      <button onClick={(event)=>handleDelete(event)}>DELETE</button>
    </div>
  )
}

export default Bagel
