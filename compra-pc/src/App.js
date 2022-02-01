import React from 'react';
import { Container , Row , Col} from 'reactstrap';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import './NavBar/NavBar.css';

function App() {
  return (

    <div>
  
    <NavBar></NavBar>


    <Container className="bg-light border" fluid>
          <Row>
            <Col className='bg-dark text-white' md="4">
              <p>Columna de 4</p>
            </Col>

            <Col className='bg-success' md="8">
              <p className='text-center'>Columna de 8</p>
              <ItemListContainer desafio={"Greeting"}></ItemListContainer>
            </Col>

          </Row>
    </Container>

    </div>

    
  );
}

export default App;
