import { Container , Row , Col} from 'reactstrap';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Categorias from './Categorias';


export default function SeccionProductos() {
    return(
        <Container className="bg-light border" fluid>
            <Row>
                <Col md="4">
                    <Categorias></Categorias>             
                </Col>

                <Col  md="8">                
                    <ItemListContainer greeting={"Compra-PC"}></ItemListContainer>            
                </Col>

            </Row>
        </Container>
    );
    
}