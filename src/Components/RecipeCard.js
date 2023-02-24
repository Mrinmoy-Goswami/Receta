import React from 'react'
import "./Component.css"

export default function RecipeCard(props) {
  return (
    
      <div className="card mx-4 my-1" style={{width:"45%",height:"100%"}}>
  <div className="card-body" id="card">
    <h3 className="card-title"> {props.title}</h3>
    <h5 className="card-text">Ingredients : </h5>
    <p className="card-text">{props.ingredients}</p>
    <h5 className="card-text">Instructions : </h5>
    <p>{props.instructions}  </p>


    
    
  </div>
</div>
    
  )
}
