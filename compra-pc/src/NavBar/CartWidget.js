import Cart from './shopping-cart.png'
import './CartWidget.css'

export default function CartWidget(){
    return (
        <img src={Cart} alt='Carrito' className='cartImage'></img>
    )
}