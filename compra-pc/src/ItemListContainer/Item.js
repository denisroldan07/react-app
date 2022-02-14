import { Row , Col, CardBody, CardTitle, CardText, Button} from "reactstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function Item({ item }){
    
    function AgregarAlCarrito (counter)
    {
      console.log(counter);
    }

    return (    
            <div key={item.id} className="card mb-3">
                <Row noGutters>
                    <Col md='4'>
                        <img src={item.imagen} alt='imagen' width={200} height={200}></img>    
                    </Col>
                    <Col md='8'>
                        <CardBody>
                            <CardTitle>{item.nombre}</CardTitle>
                            <CardText><p>Precio: {item.precio}</p></CardText>
                            <CardText><p>Stock: {item.cantidad}</p></CardText>
                            
                            <CardText><Button color="info"><Link to={`/Productos/${item.id}`}>Ver detalle</Link></Button></CardText> 
                            
                          

                            <CardText>{item.cantidad > 0 ? <ItemCount stock={item.cantidad} initial={1} onAdd={AgregarAlCarrito}></ItemCount> : <Button disabled>Agotado</Button>}</CardText>
                           
                        </CardBody>
                    </Col>
                </Row>
                
            </div>
    
    );
}

