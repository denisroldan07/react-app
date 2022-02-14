import React from "react";
import { getProducts } from "../Api/Api";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default function Categorias() {
  // ButtonDropdown open state
  const [dropdownOpen, setOpen] = React.useState(false);
  const [item , setItem] = React.useState();

  React.useEffect(() => {

    getProducts().then((item) => setItem(item))
  })
  
  
  return (
      <div style={{
          display: 'block', width: 700, padding: 30
      }}>
    
          <ButtonDropdown toggle={() => { setOpen(!dropdownOpen) }}
              isOpen={dropdownOpen}>
              <DropdownToggle className="bg-primary" caret>
                  Categorias
              </DropdownToggle>
              <DropdownMenu>
                  <DropdownItem header>Selecciona una
                  </DropdownItem>
                  <DropdownItem>One</DropdownItem>
                  <DropdownItem>Two</DropdownItem>
                  <DropdownItem>Three</DropdownItem>
                  <DropdownItem>Four</DropdownItem>
                  <DropdownItem>Five</DropdownItem>
                  <DropdownItem>Six</DropdownItem>
                  <DropdownItem>Seven</DropdownItem>
                  <DropdownItem>Eight</DropdownItem>
                  <DropdownItem>Nine</DropdownItem>
                  <DropdownItem>Zero</DropdownItem>
              </DropdownMenu>
          </ButtonDropdown>
      </div>
  );
}