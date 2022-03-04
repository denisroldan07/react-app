import { useState } from "react";
import { Badge, Button } from "reactstrap";

// El componente hijo recibe del componente padre una funcion
export default function ItemCount({stock , initial , onAdd}) {
    const [cantidad , setCantidad] = useState(initial);
    
    function Suma() 
    { 
        setCantidad(Math.min(cantidad + 1 , stock));    
    }

     function Resta()
     {
        setCantidad(Math.max(cantidad - 1 , 0));
     }


     // aca seteo la cantidad y despues la paso como parametro de la funcion padre que recibi por prop
    return (
        <div>
            
            <Button color="danger" onClick={Resta} className='mx-2'> - </Button>
            <Badge color="dark">{cantidad}</Badge>
            <Button color="success" onClick={Suma} className='mx-2'> + </Button>
            <hr></hr>



            <Button color="primary" onClick={() => onAdd(cantidad)}> Agregar al carrito </Button>

        </div>
    )
}