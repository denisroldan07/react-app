import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget'


export default function NavBar() {

    return (

      <nav className="navbar">
     {/* <!-- LOGO --> */}
     <div classNameName="logo">MUO</div>
     {/* <!-- NAVIGATION MENU --> */}
     <ul className="nav-links">
       {/* <!-- USING CHECKBOX HACK --> */}
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" className="hamburger">&#9776;</label>
       {/* <!-- NAVIGATION MENUS --> */}
       <div className="menu">
         <li><a href="/">Home</a></li>
         <li><a href="/">About</a></li>
         <li><a href="/">Contact</a></li>
         <li className="services">
           <CartWidget></CartWidget>
           {/* <!-- DROPDOWN MENU --> */}
           <ul className="dropdown">
             <li><a href="/">Dropdown 1 </a></li>
             <li><a href="/">Dropdown 2</a></li>
             <li><a href="/">Dropdown 2</a></li>
             <li><a href="/">Dropdown 3</a></li>
             <li><a href="/">Dropdown 4</a></li>
           </ul>
         </li>
       </div>
     </ul>
   </nav>
    );
    
}