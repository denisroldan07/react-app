import { Row , Col, CardBody, CardTitle, CardText, Button} from "reactstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Item({ item }){
    const [itemCount , setItemCount] = useState();
    
    function onAddItem(newItemCount)
    {
      console.log(newItemCount);
      setItemCount(newItemCount);
    }

    return (    
            <div key={item.id} className="card mb-3 border border-2 border-primary rounded">
                <Row noGutters>
                    <Col md='4'>
                        <img src={item.imagen} alt='imagen' className="img-fluid"></img>    
                    </Col>
                    <Col md='8'>
                        <CardBody>
                            <CardTitle>{item.nombre}</CardTitle>
                            <CardText><p>Precio: {item.precio}</p></CardText>
                            <CardText><p>Stock: {item.stock}</p></CardText>
                            
                            <CardText><Button color="info"><Link to={`/Productos/${item.id}`}>Ver detalle</Link></Button></CardText> 
                            
                          

                            <CardText>{item.stock > 0 ? <ItemCount stock={item.stock} initial={1} onAdd={onAddItem}></ItemCount> : <Button disabled>Agotado</Button>}</CardText>
                           
                        </CardBody>
                    </Col>
                </Row>
                
            </div>
    
    );
}

