
import React,{useState} from 'react';
import './NavBar.css';
import SlidingPane from "react-sliding-pane";

const NavBar = () => {

 
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-toggler-icon" href="#">
  <div style={{ marginTop: "32px" }}>
        <button >
         
        </button>
        
      </div>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

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



