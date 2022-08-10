import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Spinner from '../Spinner/Spinner';


function ItemDetailContainer() {

  const params = useParams()
  const [item, setItem] = useState([])

  
  useEffect(() => {

    const db = getFirestore();
    
    const productsRef = doc(db, "products", params.id)
    getDoc(productsRef).then((snapshot) => {
      setItem({id: snapshot.id, ...snapshot.data()})
    })
   
  },[params.id] )

  
  return (
    <> 
    
     {item.length === 0 ?  
     <Spinner/>
    : 
    <ItemDetail nombre={item.nombre} detalle={item.detalle} img={item.img} precio={item.precio} stock={item.stock} item={item} /> }

   </>
  );
}

export default ItemDetailContainer;