import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './ItemList.css';
import Item from './Item';

function ItemList() {

  

const [info, setInfo] = useState([])

const params = useParams()

const filtro = params.id == undefined ? info : info.filter(elemento => elemento.categoria == params.id);

useEffect(()=> {
  setTimeout(()=> fetch("data.json")
  .then((resp) => resp.json())
  .then((data) => setInfo(data))
  ,2000)
    
}, [])

  return (
      <section className='container-flex '>
        <div className='row'>
          {filtro.map(i => <Item key = {i.id} nombre={i.nombre} precio={i.precio} id={i.id} img={i.img} />) }
        </div>
      </section>
  );
}

export default ItemList;
