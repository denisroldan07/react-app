import CartImage from './shopping-cart.png'
import './CartWidget.css'
import { Link } from 'react-router-dom'

export default function CartWidget(){
    return (
        <Link to={"/Cart"}><img src={CartImage} alt='Carrito' className='cartImage'></img></Link>
        
    )
}