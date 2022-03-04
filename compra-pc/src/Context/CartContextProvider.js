import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([]);

    const addToCart = (cantidad,item) => {
        console.log("Esta es la cantidad del context");
        console.log(cantidad);
        if (isOnCart(item.id)) {
            sumarCantidad(cantidad,item);
        } else {
            setCart([...cart,{...item,cantidad}]);            
        }
    }

    const emptyCart = () => {
        setCart([]);
    }

    const deleteItem = (id) => {
        setCart(cart.filter((producto) => producto.id !== id))
    }

    const isOnCart = (id) => {
        const respuesta = cart.some((producto) => producto.id === id);
        return respuesta; 
    }

    const sumarCantidad = (cantidad,item) => {
        const copiaCarrito = [...cart];
        copiaCarrito.forEach((producto) => {
            if(producto.id === item.id)
            {
                producto.cantidad += cantidad;
            }
        })
    }

    return(
        <CartContext.Provider value={{cart , addToCart , deleteItem , emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider