//import { Card , CardBody,CardTitle,CardSubtitle,CardLink, CardText } from "reactstrap";

import { useState , useEffect } from "react";
import { getProducts } from "../Api/Api";
import ItemCount from './ItemCount'
import ItemList from "./ItemList";



export default function ItemContainer({greeting}) 
{  
  const [products , setProducts] = useState();



  useEffect(() => {

    getProducts().then((products => setProducts(products)));

  }, []);

  function AgregarAlCarrito (counter)
  {
    console.log(counter);
  }
  
  

    return (
      <div>
        <p>{greeting}</p>       
        {!products ? <p>Cargando ...</p> : <ItemList products={products}></ItemList>}
        <ItemCount stock={5} initial={1} onAdd={AgregarAlCarrito}></ItemCount>

      </div>
    );
}