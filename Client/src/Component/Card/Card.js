import React from 'react';
import "./Card.css";
import CardImage from "../../Asset/Image/2ce3320e.jpg"

const Card = () => {
    return (
        <div>
            <section id="about" class="about">
      <div class="container">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
            <img src={CardImage} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h1>US-based, college-educated virtual assistants</h1>
            <p >
            We only accept college-educated virtual assistants who live in the United States. Our hiring process is tough. Today, most of our newcomers are referred to us by assistants who our customers have loved for years.
            </p>
           
            <a href="#" class="read-more">Learn more about why this matters ⟶</a>
          </div>
        </div>

      </div>
    </section>
            
        </div>
    )
}

export default Card;
