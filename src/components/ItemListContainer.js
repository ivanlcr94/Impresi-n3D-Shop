import './ItemListContainer.css';
import ItemCount from './ItemCount';

function ItemListContainer() {

  return (
    <>
      <section>
        <h2>Lista de productos</h2>
        <p>Seleccione su producto:</p>
      </section>
      <ItemCount stockActual="3" />
      <ItemCount stockActual="7" />
   </>
  );
}

export default ItemListContainer;