import React from 'react'

function Bagel(props){
  return(
    <div>
      <h3>Bagel Type</h3>
      <p>{props.bagel.type}</p>
      <button onClick={()=> props.delete(props.bagel)}>DELETE</button>
    </div>
  )
}

export default Bagel
