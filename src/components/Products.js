import React from 'react';

function Products(props){
  return(
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Type: {props.type}</h3>
    </div>
  )
}

export default Products