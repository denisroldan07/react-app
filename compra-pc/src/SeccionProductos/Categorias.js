import React from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";



export default function Categorias() {
  // ButtonDropdown open state
  const [dropdownOpen, setOpen] = React.useState(false);

  return (
    
      <div style={{
          display: 'block', width: 200 , padding: 30
      }}>
          <ButtonDropdown toggle={() => { setOpen(!dropdownOpen) }}
              isOpen={dropdownOpen}>
              <DropdownToggle className="bg-primary" caret>
                  Categorias
              </DropdownToggle>
              <DropdownMenu>
                  <DropdownItem header>Selecciona una</DropdownItem>
              </DropdownMenu>
          </ButtonDropdown>
      </div>
    
       );
}