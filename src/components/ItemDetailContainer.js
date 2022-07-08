import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';


function ItemDetailContainer() {

  const params = useParams()

  const [item, setItem] = useState([])

  const i = item.find(elemento => elemento.id == params.id)
  
  const fetchItem = ()=> {
    fetch("data.json")
    .then((resps) => resps.json())
    .then((data) => setItem(data))
  }

  useEffect(()=> {
   fetchItem() 
  }, [])
  
  return (
    <> 
     {i&&<ItemDetail nombre={i.nombre} detalle={i.detalle} img={i.img} precio={i.precio} stock={i.stock} />}
   </>
  );
}

export default ItemDetailContainer;