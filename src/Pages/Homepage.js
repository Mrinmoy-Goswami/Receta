import React from "react";
import Carousel from "../Components/Carousel";
import { Navbar } from "../Components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import RecipeCard from "../Components/RecipeCard";
import "./Homepage.css";

export default function Homepage() {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setingredients] = useState("");
  const [servings, setServings] = useState("");
  const [query, setQuery] = useState("");
  const [search,setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [dishes,setDishes] = useState([]);
 const handleChange = (e)=>{
  //  let x = e.target.value;
   setQuery(e.target.value);
   console.log(query);
 }
 const handleQuery=()=>{
    setSearch(query);
    console.log(search)
 }

  const options = {
    method: "GET",
    url: "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe",
    params: { query: search },
    headers: {
      "X-RapidAPI-Key": "7569217ec7msheb0de54bfba16e8p10b097jsn9bc2a151f511",
      "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
    },
  };


  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
      
        setDishes(response.data);
        console.log(dishes);
        console.log(response.data);
        console.log(dishes.title);
        setTitle(dishes.title);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        // alert("Some error occured");
      });
  }, [search]);

  return (
    <div className="Maincontainer">
      <Navbar  bg= {"light"}/>
      <div className="search">
        <input
          onChange={handleChange}

          className="form-control me-2"
          type="search"
          placeholder="Search recipes here"
          aria-label="Search"
        />
        <button onClick={ handleQuery} className="btn btn-outline-light" type="submit">
          Search{" "}
        </button>
      </div>
      <Carousel />
      <p></p>
      {/* <div className="CardContainer">
        <RecipeCard title={"Chicken demo for Bachelors"} ingredients={"Chicken ,onion,red chilli,coriander powder"} instructions={"simply fry the chopped onions for a few minutes and then add ginger garlic paste and then add the chicken. 2 ts of coriander,salt according to taste and 1.5 ts of red chilli and then wait until the chicken gets cooked juicy!"} />
        <RecipeCard title={"Chicken demo for Bachelors"} ingredients={"Chicken ,onion,red chilli,coriander powder"} instructions={"simply fry the chopped onions for a few minutes and then add ginger garlic paste and then add the chicken. 2 ts of coriander,salt according to taste and 1.5 ts of red chilli and then wait until the chicken gets cooked juicy!"} />
      </div> */}
      {
        loading?
        <p style={{fontSize:"1.5vw",textAlign:"center"}}>Fetching you the world of Recipes...</p>
        :
       <div className="CardContainer">
        
        {
          dishes.map((i)=>(
             <RecipeCard title={i.title} ingredients={i.ingredients} instructions={i.instructions}/>
          ))
        }
        </div>
      }
    </div>
  );
}
