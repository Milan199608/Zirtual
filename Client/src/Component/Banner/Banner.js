import React from 'react';
import bannerImg from "../../Asset/Image/bb1b1c63.img";
import "./Banner.css"

const Banner = () => {
    return (
        <div>
      <section className="hero-banner banner-img d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-md-6 col-12 banner-box d-flex align-items-center justify-content-center flex-column">
                <div className="row">
                    <div className='col-md-12'><h1>Ditch the Virtual Assistant <br/> for a Zirtual Assistant who<br/> delivers every time.</h1>
                     <p className="bannersub"> High quality virtual assistant services from a dedicated, US-<br/>based assistant with a college degree.</p>
                     <div className="clear"></div>
                     <button class="btn btn-success mx-2 my-2 my-sm-0" type="submit"><a href="https://www.zirtual.com/request-a-consultation">Request A Consultation</a></button>
                     
                     <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Request A Consultation</button>

                    </div>
                 </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 banner-box d-flex align-items-center justify-content-center flex-column">

              <div className="img"> <img className="img-fluid" alt="" src={ bannerImg} /></div>
          </div>


      </section>
      <div className="clear"></div>

          
            
        </div>
    )
}

export default Banner
