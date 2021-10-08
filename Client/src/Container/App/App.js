import React from 'react'
import '../../App.css';

import {Banner,FirstFooter,MiddleFooter,NavBar,Card,Modal1,Login} from "../../Component";
import {Pages} from "..";

const App = () => {
  return (
    <div>


<Modal1/>
<NavBar/>
<Banner/>
<Card/>
<Card/>
<Card/>
<Pages.Service/>
<Pages.Client/>
<Pages.Compare/>
<Pages.Portfolio/>
<FirstFooter/>
<MiddleFooter/>
<Pages.Request/>
<Login/>



{/* <Route  path="/serve">
<NavBar/>
<Banner/>
<Card/>
<Pages.Service/>
<Pages.Client/>
<Pages.Compare/>
<Pages.Portfolio/>
<FirstFooter/>
<MiddleFooter/>
</Route>
<Route   path="/what">
<NavBar/>
<Banner/>
<Card/>
<Pages.Service/>
<Pages.Client/>
<Pages.Compare/>
<Pages.Portfolio/>
<FirstFooter/>
<MiddleFooter/>
</Route>

<Route  path="/faq">
<NavBar/>
<Banner/>
<Card/>
<Pages.Service/>
<Pages.Client/>
<Pages.Compare/>
<Pages.Portfolio/>
<FirstFooter/>
<MiddleFooter/>
</Route>
<Route exact  path="/pricing">
<NavBar/>
<Banner/>
<Card/>
<Pages.Service/>
<Pages.Client/>
<Pages.Compare/>
<Pages.Portfolio/>
<FirstFooter/>
<MiddleFooter/>
</Route> */}

    </div>
  )
}

export default App;
