import { useState } from "react";
import { Badge, Button } from "reactstrap";

export default function ItemCount({stock , initial , onAdd}) {
    const [counter , setCounter] = useState(initial);
    
    function Suma() 
    { 
        setCounter(Math.min(counter + 1 , stock));    
    }

     function Resta()
     {
         setCounter(Math.max(counter - 1 , 0));
     }

    return (
        <div>
            
            <Button color="danger" onClick={Resta} className='mx-2'> - </Button>
            <Badge color="dark">{counter}</Badge>
            <Button color="success" onClick={Suma} className='mx-2'> + </Button>
            <hr></hr>

            <Button color="primary" onClick={() => onAdd(counter)}> Agregar al carrito </Button>

        </div>
    )
}