import React from "react";
import { getProducts } from "../Api/Api";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";


export default function Categorias() {
  // ButtonDropdown open state
  const [dropdownOpen, setOpen] = React.useState(false);
  const [item , setItem] = React.useState([]);

  React.useEffect(() => {

    getProducts().then((item) => setItem(item))
  
  })
  

function removeDuplicates(item) {
    var unique = [];
    item.forEach(element => {
        if (!unique.includes(element.categoria)) {
            unique.push(element.categoria);
        }
    });
    return unique;
}

var filtrados = removeDuplicates(item);


  
   

  
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
                  {filtrados.map((filtrados) => (
                    <DropdownItem><Link to={`Productos/${filtrados}`}></Link>{filtrados}</DropdownItem>
                  ))}
 
              </DropdownMenu>
          </ButtonDropdown>
      </div>
    
       );
}