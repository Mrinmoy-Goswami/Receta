import React from 'react'
import food1 from "../assets/1.jpg"
import food2 from "../assets/2.jpg"
import food3 from "../assets/3.jpg"


export default function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={food1} className="d-block w-100" style={{height:"500px",objectFit:"cover"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block text-dark">
        <h5>Now cook whatever you want</h5>
        <p>Just search above and hoala!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={food2} className="d-block w-100" style={{height:"500px",objectFit:"cover"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block text-dark">
        <h5>You have the whole world with you</h5>
        <p>Search from more than 200,000 of recipes !</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={food3} className="d-block w-100" style={{height:"500px",objectFit:"cover"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Now special Bachelor's Corner available !</h5>
        <p>Come on Boys let's get rollin !</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>  
  )
}
