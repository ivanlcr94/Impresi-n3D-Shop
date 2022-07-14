import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes , Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import {CartProvider} from './components/Context/CartContext';


function App() {
  return (
    <>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/categorias/:id" element={<ItemListContainer/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </CartProvider>
    </>
  );
}

export default App;
