import React from 'react'
import { Link } from 'react-router-dom'

export  function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme = {`${props.bg}`}>
  <div className="container-fluid">
    <a className="navbar-brand mx-5" >Recetas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link mx-5" to="/Bachelors">Bachelor's Corner</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link mx-5" to="/aboutus">About us</Link>
        </li>
       
      </ul>
        {/* <div class="form-check form-switch mx-5 px-5 my-2">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label text-light" for="flexSwitchCheckDefault">Dark Mode</label>
</div> */}
     
    </div>
  </div>
</nav>
    </div>
  )
}
