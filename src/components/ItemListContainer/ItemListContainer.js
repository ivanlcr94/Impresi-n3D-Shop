import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';

function ItemListContainer() {

const [info, setInfo] = useState([])
const params = useParams()

useEffect(() => {

  const db = getFirestore();

  const productsRef = collection(db, "products")

  getDocs(productsRef).then((snapshot) => {

      const filtroCategorias = snapshot.docs.map((doc) => doc.data())

      setInfo(params.id ? filtroCategorias.filter(elemento => elemento.categoria == params.id): filtroCategorias)
    
  })

},[params.id] )


  return (
      <section className='container  contenedorItems'>
        
          <ItemList items={info}/>
      
      </section>
  );
}

export default ItemListContainer;