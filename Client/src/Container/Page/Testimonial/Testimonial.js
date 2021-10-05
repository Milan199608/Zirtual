import React from 'react';
import "./Testimonial.css";
import testimonialpage1 from "../../../Asset/Image/1a71dee5.png";
import Testimonialpage2 from "../../../Asset/Image/8d0afc2ab1a60432d5b33ba75dd9c9cc.png"

const Testimonial = () => {

    return (
        <div>
        <div className="row_cover">
            <div className='col-lg-6 col-md-6'>
                <div className="container"> 
                    <div className="row">
                        <div>
                            <div className="card">
                                <div className="testimonials"> 
                                  <div className="row">
                                      <div className="col-lg-12 col-md-12">
                                          <blockquote>“I refer Zirtual to everyone on our executive team. My assistant Erin helps me with email and calendar management, partner research, LinkedIn management, expense reporting, travel booking, photo editing, and slide creation. One of my favorite things is how she takes my inbox from hundreds of unread and uncategorized emails into something totally manageable.</blockquote>
                                      </div>

                                  </div>

                                  <div className="row">
                                  <div className="col-md-3 col-4">
                                      <div className="profilepic">
                                          <img alt="" src={testimonialpage1}/>

                                      </div>

                                  </div>
                                  <div className="col-md-9 col-8">
                                      <div className="profilepic">
                                         <p>Kathleen Mullaney</p>
                                         <p>Udacity</p>

                                      </div>

                                  </div>

                                  </div>
                                  

                                </div>

                            </div>
                        </div>

                    </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                 <div className="container"> 
                    <div className="row">
                        <div>
                            <div className="card">
                                <div className="testimonials"> 
                                  <div className="row">
                                      <div className="col-lg-12 col-md-12">
                                          <blockquote>“I refer Zirtual to everyone on our executive team. My assistant Erin helps me with email and calendar management, partner research, LinkedIn management, expense reporting, travel booking, photo editing, and slide creation. One of my favorite things is how she takes my inbox from hundreds of unread and uncategorized emails into something totally manageable.</blockquote>
                                      </div>

                                  </div>

                                  <div className="row">
                                  <div className="col-md-3 col-4">
                                      <div className="profilepic">
                                          <img alt="" src={Testimonialpage2 }/>

                                      </div>

                                  </div>
                                  <div className="col-md-9 col-8">
                                      <div className="profilepic">
                                         <p>Kathleen Mullaney</p>
                                         <p>Udacity</p>

                                      </div>

                                  </div>

                                  </div>
                                  

                                </div>

                            </div>
                        </div>

                    </div>
                    </div>
                </div>

        
            
            
            </div>
        </div>
    )
}

export default Testimonial;
