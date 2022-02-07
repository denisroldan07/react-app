import { useState } from "react";

export default function ItemCount({stock , initial , onAdd}) {
    const [counter , setCounter] = useState(initial);
    
    function Suma() { 
    
        setCounter(counter + 1);
        if(counter > stock){
            counter = stock;
        }

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
        </div>
    )
}