import React from 'react'
import { Navbar } from '../Components/Navbar'
import RecipeCard from '../Components/RecipeCard'

export default function Aboutus() {
  return (
    <div>
      <Navbar/>
     
      <div style={{
        display:"flex",
        justifyContent:"center",
        margin:"5%"
      }}>
        <p>We are a group of bachelors pursuing our degrees. We understand the difficulty of managing everything for a student/bachelor.Most of us eat from outside which is both financially and from health perspective, a bad decision. So we thought of letting the chefs inside our bachelors come out .We have more than 200,000 of recipes and we are expanding in the area of bachelor style cooking. We also have thousands of cocktail recipes so that our customers can Netflix and chill every weekend with a mojito,which they made themselves!!</p>

      </div>
    </div>
  )
}
