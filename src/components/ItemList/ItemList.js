import './ItemList.css';
import Item from '../Item/Item';

function ItemList(props) {

  

  return (
    
      <div className='container contenedorItems'>
        <div className='row'>
          {props.items.map(i => <Item key = {i.id} nombre={i.nombre} precio={i.precio} id={i.id} img={i.img} />) }
        </div>
      </div>
      
  );
}

export default ItemList;
