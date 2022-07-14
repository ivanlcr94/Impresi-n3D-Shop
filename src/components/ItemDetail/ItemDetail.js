import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../Context/CartContext'

function ItemDetail(props) {

  const {addToCart} = useContext(CartContext);

  const [cantidadContador, setCantidadContador] = useState()
  const [contadorVisible, setContadorVisible] = useState()


  const agregarAlCarrito = (cantidad)=>{

    setCantidadContador(cantidad)

    addToCart(props.item, cantidad)

    setContadorVisible(false)
    console.log(`Se agrego ${cantidad} al carrito`)

  }


  return (
    <> 
    <div className='contenedorDetallePorducto shadow'>

    
       <div className='container'>

          <div className='row'>

            <div className='col-12 col-md-12 col-lg-6 contenedorImg'>
            <img src={props.img} alt={props.nombre} className="img-fluid imagDetail"/>
            </div>

          <div className='col-12 col-md-12 col-lg-6 contenedorDescripcion'>

            <h2>{props.nombre}</h2>  
            <p>{props.detalle}</p>
            <p>Precio: ${props.precio}</p>
            {contadorVisible == false ? <Link to='/cart' className="btn btn-outline-success">Comprar ahora</Link> : <ItemCount stock={props.stock} initial={1} onAdd={agregarAlCarrito}/> }

          </div>

        </div>
      </div> 
    </div>

 


   </>
  );
}

export default ItemDetail;
