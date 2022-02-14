//import { Card , CardBody,CardTitle,CardSubtitle,CardLink, CardText } from "reactstrap";

import { useState , useEffect } from "react";
import { Spinner } from "reactstrap";
import { getProducts } from "../Api/Api";
import ItemList from "./ItemList";



export default function ItemContainer({greeting}) 
{  
  const [products , setProducts] = useState();

  useEffect(() => {

    getProducts().then((products => setProducts(products)));

  }, []);
  
    return (
      <div>
        <p>{greeting}</p>       
        {!products ? <Spinner>Loading...</Spinner> : <ItemList products={products}></ItemList>}
        

      </div>
    );
}