import { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";

const Cart = () => {
    const {cart , emptyCart , deleteItem} = useContext(CartContext);
    console.log(cart)

    return (
        <> 
            {cart.map((producto) => {
                return (
                <div key={producto.id}>
                    
                        {producto.nombre}
                        {producto.cantidad}
                        <button className="mx-3" onClick={() => deleteItem(producto.id)}> X </button>
                    
                    <button onClick={() => emptyCart()}> Vaciar carrito </button>
                </div>
                )})}
        </>
    )
};

export default Cart;