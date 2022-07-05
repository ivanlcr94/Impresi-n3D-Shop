import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';


function ItemDetailContainer() {

    const [productos, setProductos] = useState([])

    const listadoProdutos = [
        {
            id: 1,
            nombre: "Maceta Azcteca",
            descripcion: "Maceta con forma de piramide azcteca impresa en PLA+ material BIODEGRADABLE y barnizada para su mejor conservación al aire libre y durabilidad. Ideal para plantines, cactus o suculentas",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_712277-MLA46758685264_072021-F.webp",
            precio: 2500,
            categoria: 0
        }
    ]

    const getItem = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(listadoProdutos)   
          }, 2000);
        }
        )
      }

      useEffect(() => {
        getItem()
          .then(res => setProductos(res))   
      }, [])


  return (
    <> 
      {productos&&productos.map(i => <ItemDetail key = {i.id} nombre={i.nombre} descripcion={i.descripcion} img={i.img} precio={i.precio} />)}
   </>
  );
}

export default ItemDetailContainer;