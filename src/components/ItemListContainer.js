import './ItemListContainer.css';
import ItemList from './ItemList';

function ItemListContainer() {

  return (
    <>
      <section>
        <h2>Lista de productos</h2>
        <p>Seleccione su producto:</p>
      </section>
      
      <ItemList />
      
   </>
  );
}

export default ItemListContainer;