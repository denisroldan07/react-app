//import { Card , CardBody,CardTitle,CardSubtitle,CardLink, CardText } from "reactstrap";

import { useState , useEffect } from "react";
import { Spinner } from "reactstrap";
import { getProducts } from "../Api/Api";
import ItemList from "./ItemList";



export default function ItemContainer() 
{  
  const [products , setProducts] = useState();

  useEffect(() => {

    getProducts().then((products => setProducts(products)));

  }, []);
  
    return (
      <div className="mt-3">
             
        {!products ? <Spinner>Loading...</Spinner> : <ItemList products={products}></ItemList>}
        

      </div>
    );
}