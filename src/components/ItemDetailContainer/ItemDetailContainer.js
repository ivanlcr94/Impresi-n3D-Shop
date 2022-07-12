import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';


function ItemDetailContainer() {

  const params = useParams()

  const [item, setItem] = useState([])


  useEffect(()=> {
    fetch("/data.json")
    .then((resps) => resps.json())
    .then((data) => setItem((params.id ? data.find(elemento => elemento.id == params.id): data)))
  }, [params.id])
  
  return (
    <> 
     {item&&<ItemDetail nombre={item.nombre} detalle={item.detalle} img={item.img} precio={item.precio} stock={item.stock} />}
   </>
  );
}

export default ItemDetailContainer;