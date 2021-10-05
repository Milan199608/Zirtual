
import React from 'react';
import './NavBar.css';


const NavBar = () => {


  return (
    <div>
      <nav class="navbar navbar-expand-lg  fixed-top navbar-dark bg-dark ">
        <div className="navBar_toggle_style">
        <a class="navbar-toggler-icon mx-2" href="#">
        </a>
    
        <p style={{color:"white"}} >Zirtual</p>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Who We Are </a>

            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Who We Serve</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">What We Do</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>

          </ul>


          <button class="btn btn-success my-2 my-sm-0" type="submit">Request A Consultation</button>

        </div>
      </nav>

    </div>
  )
}

export default NavBar



