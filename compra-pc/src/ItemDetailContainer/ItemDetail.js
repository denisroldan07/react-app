import { Row , Col, CardBody, CardTitle, CardText, Button} from "reactstrap";
import ItemCount from "../ItemListContainer/ItemCount";
import { Link } from "react-router-dom";
import {useContext, useState} from 'react';
import { CartContext } from "../Context/CartContextProvider";

export default function ItemDetail({ item }){
    const [cantidad , setCantidad] = useState();
    const { addToCart } = useContext(CartContext);
    
    //Le paso la cantidad del componente item count 
    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addToCart(cantidad,item);
    } 

    return (
        <div key={item.id} className="card mb-3">
        <Row noGutters>
            <Col md='4'>
                <img src={item.imagen} alt='imagen' width={400} height={400}></img>    
            </Col>
            <Col md='8'>
                <CardBody>
                    <CardTitle>{item.nombre}</CardTitle>
                    <CardText><p>Precio: {item.precio}</p></CardText>
                    <CardText><p>Stock: {item.stock}</p></CardText>

                    {
                        !cantidad ? <CardText>{item.stock > 0 ? 
                        <ItemCount 
                            stock={item.stock} 
                            initial={1} 
                            onAdd={onAdd}>  
                        </ItemCount> : <Button disabled>Agotado</Button>}</CardText> : <Link to="/Cart">Ir al carrito</Link>
                    }
                    
                    

                    <CardText><Button color="danger"><Link to={`/Productos`}>Volver a la lista de productos</Link></Button></CardText> 

                </CardBody>
            </Col>
        </Row>
        
    </div>
    );
}