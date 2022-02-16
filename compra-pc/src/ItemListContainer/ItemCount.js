import { useState } from "react";
import { Badge, Button } from "reactstrap";

export default function ItemCount({stock , initial , onAdd , onChangeItemCount}) {
    const [itemCounter , setItemCounter] = useState(initial);
    
    function Suma() 
    { 
        setItemCounter(Math.min(itemCounter + 1 , stock));    
    }

     function Resta()
     {
         setItemCounter(Math.max(itemCounter - 1 , 0));
     }

     function addToCart()
     {
         onAdd(itemCounter);
     }

    return (
        <div>
            
            <Button color="danger" onClick={Resta} className='mx-2'> - </Button>
            <Badge color="dark">{itemCounter}</Badge>
            <Button color="success" onClick={Suma} className='mx-2'> + </Button>
            <hr></hr>

            <Button color="primary" onClick={() => onAdd(addToCart)}> Agregar al carrito </Button>

        </div>
    )
}