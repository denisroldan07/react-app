import { useState } from "react";

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
            
            <button onClick={Resta}> - </button>
            {counter}
            <button onClick={Suma}> + </button>

            <button onClick={() => onAdd(counter)}> Agregar al carrito </button>

        </div>
    )
}