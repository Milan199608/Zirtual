import React from 'react';
import "./Service.css";

const Service = () => {
    return (
        <div>
            <section id="services" class="services section-bg">
                <div class="container" data-aos="fade-up">



                    <div class="row">
                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                                <div class="icon"><i class="fab fa-dribbble"></i></div>
                                <h2 class="title"><a href="">Built-in security & trust</a></h2>
                                <p class="description">All of our Zirtual Assistants undergo background checks, and we’re experienced in the use of smart tech like Lastpass to securely share passwords.</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                            <div class="icon-box">
                                <div class="icon"><i class="fab fa-apple-whole"></i></div>
                                <h2 class="title"><a href="">Long term solution with no contracts</a></h2>
                                <p class="description">Our Zirtual Assistants stick with us for years. We expertly manage their workload so you enjoy consistent quality, availability, and responsiveness.</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                            <div class="icon-box">
                                <div class="icon"><i class="fab fa-algolia"></i></div>
                                <h2 class="title"><a href="">One transparent monthly fee</a></h2>
                                <p class="description">In your monthly fee, everything is taken care of. There are no additional payroll taxes or benefits to consider.</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
                            <div class="icon-box">
                                <div class="icon"><i class="fab fa-dribbble"></i></div>
                                <h2 class="title"><a href="">Fast response times every working day</a></h2>
                                <p class="description">Your Zirtual Assistant will respond to you within 2 hours with the task completed or with estimated delivery time if the task is big.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}

export default Service;
