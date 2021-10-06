import React from 'react';
import "./Client.css";
import Client1 from "../../../Asset/Image/1a71dee5.png";
//import Client2 from "../../../Asset/Image/8d0afc2ab1a60432d5b33ba75dd9c9cc.png"

const Client = () => {


    return (
        <div>
             <section id="doctors" class="doctors">
      <div class="container">

      

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={Client1} alt=""/></div>
              <div class="member-info">
                <h4>Anastasia Leng</h4>
                <span>Picaso Labs</span>
                <p>“Michelle has ramped up quickly to become an indispensable member of our team. She's fast to respond, learns quickly, and adapts at lightning speed to the needs of our company. She's seamlessly integrated herself into our team and magically taken on lots of responsibilities, which has freed up our time to tackle other priorities that we were never quite able to get to before she came along.”</p>
              
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={Client1} alt=""/></div>
              <div class="member-info">
                <h4>Kathleen Mullaney</h4>
                <span>Udacity</span>
                <p>“I refer Zirtual to everyone on our executive team. My assistant Erin helps me with email and calendar management, partner research, LinkedIn management, expense reporting, travel booking, photo editing, and slide creation. One of my favorite things is how she takes my inbox from hundreds of unread and uncategorized emails into something totally manageable.”

</p>
              </div>
            </div>
          </div>

          
        </div>

      </div>
    </section>
            
        </div>
    )
}

export default Client;
