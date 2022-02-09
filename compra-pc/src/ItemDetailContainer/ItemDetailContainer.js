import { useEffect , useState } from "react";
import { getProducts } from "../Api/Api";
import ItemCount from "../ItemListContainer/ItemCount";
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer(){
    const [item , setItem] = useState();
    useEffect(() => {
        getProducts().then((items) => {
            const item = items.find((i) => i.id === 1)
            setItem(item);
        });
    }, []);

    console.log(item);
    function AgregarAlCarrito (counter)
    {
      console.log(counter);
    }

   
    return (
        
        <div> 
        <ItemDetail item={item}></ItemDetail>
        
        </div>
    );
}