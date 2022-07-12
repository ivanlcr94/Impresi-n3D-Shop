import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {

const [info, setInfo] = useState([])
const params = useParams()


useEffect(()=> {
  setTimeout(()=> fetch("/data.json")
  .then((resp) => resp.json())
  .then((data) => setInfo(params.id ? data.filter(elemento => elemento.categoria == params.id): data))
  ,2000)
 
 }, [params.id]) 


  return (
      <section className='container-flex contenedorItems'>
        <div className='row'>
          <ItemList items={info}/>
        </div>
      </section>
  );
}

export default ItemListContainer;