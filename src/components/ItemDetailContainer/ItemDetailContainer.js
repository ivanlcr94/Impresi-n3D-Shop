import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';


function ItemDetailContainer() {

  const params = useParams()

  const [item, setItem] = useState([])

  
  useEffect(() => {

    const db = getFirestore();
  
    const productsRef = collection(db, "products")
  
    getDocs(productsRef).then((snapshot) => {
  
        const filtroProducto = snapshot.docs.map((doc) => doc.data())
  
        setItem(params.id ? filtroProducto.find(elemento => elemento.id == params.id): filtroProducto)
      
    })
  
  },[params.id] )


  
  return (
    <> 
     {item&&<ItemDetail nombre={item.nombre} detalle={item.detalle} img={item.img} precio={item.precio} stock={item.stock} item={item} />}
   </>
  );
}

export default ItemDetailContainer;