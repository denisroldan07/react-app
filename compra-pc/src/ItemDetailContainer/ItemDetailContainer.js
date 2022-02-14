import { useEffect , useState } from "react";
import { getProducts } from "../Api/Api";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

export default function ItemDetailContainer(){
    const [item , setItem] = useState();
    const {itemId} = useParams();
    
    useEffect(() => {
        getProducts().then((items) => {
            const item = items.find((i) => i.id.toString() === itemId)
            setItem(item);
        });
    }, [itemId]);

    console.log("el console log de abajo");
    console.log(item);


   
    return (
        <div>
        {!item ? <p>Cargando ...</p> :  <ItemDetail item={item}></ItemDetail>}
        </div>
    );
        
}