import { useState } from "react";

export default function ItemCount() {
    const [counter , setCounter] = useState(0);
    
    function Suma() { 
    
        setCounter(counter + 1);
     }

     function Resta()
     {
         setCounter(counter - 1);
     }

    return (
        <div>
            <button onClick={Resta}> - </button>
            <p className="text-center">{counter}</p>
            <button onClick={Suma}> + </button>
        </div>
    )
}