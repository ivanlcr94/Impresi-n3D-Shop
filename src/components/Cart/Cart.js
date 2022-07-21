import { Link } from 'react-router-dom'
import './Cart.css';
import { useContext } from 'react';
import {CartContext} from '../Context/CartContext'
import Card from './Card';

function Cart() {

  const {cart} = useContext(CartContext);
  const {removeFromCart} = useContext(CartContext);
  const {clearCart} = useContext(CartContext);
  const {getTotal} = useContext(CartContext);


  return (
 
    <>
    <div className='contenedorCarritoDeCompras'>
      {cart.length > 0 ? (
        cart.map(i => <Card key = {i.item.id} nombre={i.item.nombre} precio={i.item.precio}  img={i.item.img} id={i.item.id} cantidad={i.quantity} eliminar={removeFromCart} />)
        ) : ( 
        <h2 className='carritoVacio'>El carrito esta vacio</h2>
        ) }  

      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-12 botonCarrito p-3'>
            {cart.length > 0 ? (
                  <button className="btn btn-danger" onClick={() => clearCart()}>
                    VACIAR CARRITO
                  </button>
                ) : (
                  <Link to="/" className="">
                    <button className='btn btn-outline-success'>IR A COMPRAR</button>
                  </Link>
                )}
          </div>    
        </div>
      </div> 

      <div className='container d-flex justify-content-end align-items-center shadow contenedorTotalCompra'>
        <div className='row'>
          <div className='col-12'>
            <h4>Total de la compra ${getTotal()}</h4>     
          </div>
        </div>

      </div>   

   </div>
    </>
    
  );
}

export default Cart;