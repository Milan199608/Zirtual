import React from 'react';
import "./Compare.css";

const Compare = () => {
    return (
        <div>
            <section id="pricing" class="pricing section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Compare your options</h2>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
              <h3>Concern</h3>
              <h4><sup>$</sup> 449<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li class="na">Pharetra massa</li>
                <li class="na">Massa ultricies mi</li>
              </ul>
            
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
            <div class="box featured">
              <h3>Zirtual</h3>
              <h4><sup>$</sup> 449<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li class="na">Massa ultricies mi</li>
              </ul>
              
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
              <h3>Developer</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
              <h3>Free</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li class="na">Pharetra massa</li>
                <li class="na">Massa ultricies mi</li>
              </ul>
              
            </div>
          </div>

        </div>

      </div>
    </section>
    <div className="clear"></div>
            
        </div>
    )
}

export default Compare;
