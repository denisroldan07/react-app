import React from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";



export default function Categorias(categoryItems,setItem,item) {
  // ButtonDropdown open state
  const [dropdownOpen, setOpen] = React.useState(false);

  const filterItem = (curcat) => {
    const newItem = item.filter((newVal) => {
      return newVal.category === curcat; 
            // comparing category for displaying data
    });
    setItem(newItem);
  };


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
                  {/* {categoryItems.map((val,id) => {
                    
                    return(
                      <DropdownItem 
                          key={id} 
                          onClick={() => filterItem(val)}>{val}</DropdownItem>
                    )
                  })} */}
                  <DropdownItem 
                    onClick={() => setItem(item)}> Todos</DropdownItem>
              </DropdownMenu>
          </ButtonDropdown>
      </div>
    
       );
}