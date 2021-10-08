
import React,{useState} from 'react';
import './NavBar.css';
import { Sidebar } from '../Sidebar/Sidebar';


const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);
  return (
    
    <div> 
      <nav class="navbar navbar-expand-lg   fixed-top"   >
        <div className="navBar_toggle_style">
        <span onClick={showSidebar}>
        <i class="fa fa-bars mx-3" >
          </i>
          </span>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
           
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
           
                 
                    <span>{item.title}</span>
                
                </li>
              );
            })}
          </ul>
        </nav>
  
          <p style={{ color: "white",marginTop:"5px" }} >Abstract</p>
        </div>
        <div class="collapse navbar-collapse mx-3" id="navbarSupportedContent">
  
            <ul class="navbar-nav ms-auto">     
              <li class="nav-item scrollto active">
                <a class="nav-link" >
                  Who We Are </a></li>

                <li class="nav-item scrollto active">
                <a class="nav-link" >
                  Who We serve </a></li>
                   <li class="nav-item scrollto active">
                <a class="nav-link" >
                  What we do </a></li>
                    <li class="nav-item scrollto active">
                <a class="nav-link" >
                  FAQ </a></li>
                    <li class="nav-item scrollto active">
                <a class="nav-link" >
                 pricing </a></li>
                 <li class="nav-item scrollto active">
                <a class="nav-link" >
              987456321 </a></li>
                 <li class="nav-item scrollto active">
                <a class="nav-link" >
                login </a></li>
            </ul>
         
      
          <button class="btn btn-success my-2 my-sm-0" type="submit">Request A Consultation</button>

        </div>
        <div className="clear"></div>
      </nav>
    



    </div>
    

  )
}

export default NavBar;

{/* <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars  />
          </Link>
        </div>
        <nav >
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>

 */}