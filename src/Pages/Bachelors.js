import React from "react";
// import Carousel from "../Components/Carousel";
import { Navbar } from "../Components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import RecipeCard from "../Components/RecipeCard";
import "./Homepage.css";
import Typewriter from 'typewriter-effect';
import  cat from "../assets/cat-beer.jpg"

export default function Homepage() {
  const [title, setTitle] = useState("");

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
    method: 'GET',
    url: 'https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail',
    params: {name: search},
    headers: {
      'X-RapidAPI-Key': '7569217ec7msheb0de54bfba16e8p10b097jsn9bc2a151f511',
      'X-RapidAPI-Host': 'cocktail-by-api-ninjas.p.rapidapi.com'
    }
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
      <Navbar bg={"dark"} />
      <div className="search">
        <input
          onChange={handleChange}

          className="form-control me-2"
          type="search"
          placeholder="Search Cocktails here"
          aria-label="Search"
        />
        <button onClick={ handleQuery} className="btn btn-outline-light btn-dark" type="submit">
          Search{" "}
        </button>
      </div>
      {/* <Carousel /> */}
      <div style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        fontSize:"2.5vw",
        marginBottom:"30px"
        }}>

      <Typewriter
  options={{
    strings: ['Mojito', 'Espresso Martini','Cosmopolitan'],
    autoStart: true,
    loop: true,
  }}
/>

  </div>
  
    
      {
        loading?
        <p style={{fontSize:"1.5vw",textAlign:"center"}}></p>
        :
       <div style={{
        display:"flex",
        justifyContent:"center"
       }} >
        
        {
          dishes.map((i)=>(
             <RecipeCard title={i.name} ingredients={i.ingredients} instructions={i.instructions}/>
          ))
        }
        </div>
      }
      <div className="CardContainer">
        <RecipeCard title={"Chicken demo for Bachelors"} ingredients={"Chicken ,onion,red chilli,coriander powder"} instructions={"simply fry the chopped onions for a few minutes and then add ginger garlic paste and then add the chicken. 2 ts of coriander,salt according to taste and 1.5 ts of red chilli and then wait until the chicken gets cooked juicy!"} />
        <RecipeCard title={"Egg curry demo for Bachelors"} ingredients={"Boiled eggs,tomatoes,onion"} instructions={"Simply fry the chopped onions until it turns red. (better gravy with more chopped onions)Put the tomatoes and various masala as per requirement and wait for 5-6 mmins before putting the boiled eggs into it . It's ready after 5 more minutes"} />
      </div>

       
       <p style={{textAlign:"center",marginBottom:"20px",fontSize:"2.5vw"}}> We are coming with various recipes in Bachelor Style real soon !</p>
      <img src={cat} height="300px" 
      style={{marginLeft:"30%"}}
      />
    </div>
  );
}
