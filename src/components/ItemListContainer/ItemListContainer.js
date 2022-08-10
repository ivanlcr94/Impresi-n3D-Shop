import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Spinner from '../Spinner/Spinner';

function ItemListContainer() {

const [info, setInfo] = useState([])
const params = useParams()

useEffect(() => {

  const db = getFirestore();

  const q = query(collection(db, "products"), params.id ? where("categoria", "==", params.id) : where("categoria", "!=", "") );

  getDocs(q).then((snapshot) => {
  setInfo(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })

},[params.id] )


  return (

    <>
    {info.length == 0 ? 
    <Spinner/> 
    : 
    <ItemList items={info}/> }
    </>  
  );
}

export default ItemListContainer;