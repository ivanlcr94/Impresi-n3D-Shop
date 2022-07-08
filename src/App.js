import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes , Route } from 'react-router-dom';
import ItemList from './components/ItemList';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/productos" element={<ItemListContainer/>}></Route>
        <Route path="/categorias:id" element={<ItemList/>}></Route>
        <Route path='/item:id' element={<ItemDetailContainer/>}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
