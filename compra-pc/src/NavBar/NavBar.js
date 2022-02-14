import React from 'react';
import './NavBar.css';
import { useState } from 'react';
import { Navbar , NavbarBrand , NavbarToggler , Collapse , Nav , NavItem, NavLink} from 'reactstrap';
import CartWidget from './CartWidget'


export default function NavBar() {
  const [isOpen , setIsOpen] = useState(false);

    return (

<div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      Compra-PC
    </NavbarBrand>
    <NavbarToggler onClick={() => {setIsOpen(!isOpen)}} />
    <Collapse isOpen={isOpen} navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/Productos/">
            Productos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Contacto
          </NavLink>
        </NavItem>
        
      </Nav>
      <NavItem>
          <NavLink href='#'>
            <CartWidget></CartWidget>
          </NavLink>
        </NavItem>
    </Collapse>
  </Navbar>
</div>
    );
    
}