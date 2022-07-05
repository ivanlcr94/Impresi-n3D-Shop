import { useEffect, useState } from 'react';
import './ItemList.css';
import Item from './Item';

function ItemList() {

const [info, setInfo] = useState([])

   
useEffect(()=> {
  setTimeout(()=> fetch("data.json")
  .then((resp) => resp.json())
  .then((data) => setInfo(data))
  ,2000)
    

}, [])

  return (
      <section className='container-flex'>
        <div className='row'>
          {info&&info.map(i => <Item key = {i.id} nombre={i.nombre} precio={i.precio} />)}
        </div>
      </section>
  );
}

export default ItemList;
