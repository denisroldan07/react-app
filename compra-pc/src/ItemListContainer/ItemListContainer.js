//import { Card , CardBody,CardTitle,CardSubtitle,CardLink, CardText } from "reactstrap";
import ItemCount from './ItemCount'
import ItemList from "./ItemList";
import { useState , useEffect } from "react";
import { getProducts } from "../Api/Api";


export default function ItemContainer({greeting}) 
{  
  const [products , setProducts] = useState([]);



  useEffect(() => {

    getProducts().then(function(products) 
    {
      console.log(products);  

      setProducts(products);
    })

  }, []);

  
  function AgregarAlCarrito (itemCount)
  {
    console.log(itemCount);
    return ;
  }
  
    return (
      <div>
        <p>{greeting}</p>        
        {products.lenght > 0 ? <ItemList products={products} /> : <p>Cargando ...</p>}
        <ItemCount stock={5} initial={1} onAdd={AgregarAlCarrito}></ItemCount>

      </div>
    );
}