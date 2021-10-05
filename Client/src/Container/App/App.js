import React from 'react'

import '../../App.css';

/* import Banner from '../../Component/Banner/Banner';
import Portfolio from "../Page/Portfolio/Portfolio";
import Client from '../Page/Client/Client.js';
import FirstFooter from '../../Component/FirstFooter/FirstFooter';
import MiddleFooter from '../../Component/MiddleFooter/MiddleFooter';
import LastFooter from '../../Component/LastFooter/LastFooter';
import Testimonial from "../Page/Testimonial/Testimonial"
import NavBar from '../../Component/Navbar/NavBar';
 */
import {Banner,FirstFooter,LastFooter,MiddleFooter,NavBar} from "../../Component";
import {Pages} from "..";

const App = () => {
  return (
    <div>
<NavBar/>

<Banner/>
<Pages.Portfolio/>
<Pages.Testimonial/>
<Pages.Client/>
<FirstFooter/>
<MiddleFooter/>
<LastFooter/>
      
    </div>
  )
}

export default App