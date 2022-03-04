import React from 'react';
//import { BrowserRouter, Routes , Route } from 'react-router-dom';
//import { Container , Row , Col} from 'reactstrap';
import NavBar from './NavBar/NavBar';
import SeccionProductos from './SeccionProductos/SeccionProductos';
import './NavBar/NavBar.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './Context/CartContextProvider';
import Cart from './Cart/Cart';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
            <header>
            <NavBar>

            </NavBar>
            </header>

          <main>
            <Routes>
              <Route
                path='/Productos'
                element={<SeccionProductos></SeccionProductos>}
              >
              </Route>
              
              <Route
                path='/Productos/:itemId'
                element={<ItemDetailContainer></ItemDetailContainer>}
              >
              </Route>
            </Routes>

            <Routes>
                <Route path='/Cart' element={<Cart></Cart>}></Route>
            </Routes>
          </main>

        </div>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
