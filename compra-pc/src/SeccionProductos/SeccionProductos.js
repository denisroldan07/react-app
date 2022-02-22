import { useState } from 'react';
import { Container , Row , Col} from 'reactstrap';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Categorias from './Categorias';
import Data from '../Api/producto.json'

export default function SeccionProductos() {
    const [products , setProducts] = useState(Data);

  console.log(products);

    // const filterItem = (curcat) => {
    //     const newItem = item.filter((newVal) => {
    //       return newVal.category === curcat; 
    //             // comparing category for displaying data
    //     });
    //     setItem(newItem);
    //   };

    const categoryItems = [...new Set(products.map((val) => val.categoria))];
    console.log(categoryItems);
  
  

    return(
        <Container className="bg-light border" fluid>
            <Row>
                <Col 
                    md="4">
                    <Categorias 
                        categoryItems={categoryItems} 
                        setItem={setProducts} 
                        item={products}>
                    </Categorias>             
                </Col>

                <Col  
                    md="8">                
                    <ItemListContainer></ItemListContainer>            
                </Col>

            </Row>
        </Container>
    );
    
}