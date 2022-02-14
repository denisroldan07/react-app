import { Row , Col, CardBody, CardTitle, CardText, Button} from "reactstrap";
import ItemCount from "../ItemListContainer/ItemCount";
import { Link } from "react-router-dom";


export default function ItemDetail({ item }){
    
    function AgregarAlCarrito (counter)
    {
      console.log(counter);
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
                    <CardText><p>Stock: {item.cantidad}</p></CardText>
                    
                    <CardText>{item.cantidad > 0 ? <ItemCount stock={item.cantidad} initial={1} onAdd={AgregarAlCarrito}></ItemCount> : <Button disabled>Agotado</Button>}</CardText>

                    <CardText><Button color="danger"><Link to={`/Productos`}>Volver a la lista de productos</Link></Button></CardText> 

                </CardBody>
            </Col>
        </Row>
        
    </div>
    );
}