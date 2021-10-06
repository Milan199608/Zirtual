import React from 'react';
import bannerImg from "../../Asset/Image/bb1b1c63.img";
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <section id="hero" class="d-flex align-items-center">

                <div class="container-fluid" data-aos="fade-up">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Ditch the Virtual Assistant for a Zirtual Assistant who delivers every time.</h1>
                            <h2>High quality virtual assistant services from a dedicated, US-based assistant with a college degree.</h2>
                            <div><a href="#about" class="btn-get-started btn-success scrollto mx-2">Request a Consultation</a>
                            <a href="#about" class="btn-get-started btn-outline-primary scrollto">Choose your plan</a></div>
                        </div>
                        <div class="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
                            
                        </div>
                    </div>
                </div>

            </section>




        </div>
    )
}

export default Banner
