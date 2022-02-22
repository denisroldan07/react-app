import { useEffect , useState } from "react";
import { getProducts } from "../Api/Api";
import { useParams } from "react-router-dom";

export default function ItemFilterContainer(){
    const [item , setItem] = useState();
    const {itemId} = useParams();
    
    useEffect(() => {
        getProducts().then((items) => {
            const item = items.find((i) => i.id.toString() === itemId)
            setItem(item);
        });
    }, [itemId]);
   
    return (
        
    );
        
}