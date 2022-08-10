import { Link } from 'react-router-dom'
import './Cart.css';
import { useContext, useState } from 'react';
import {CartContext} from '../Context/CartContext'
import Card from './Card';
import FromOrder from '../FormOrder/FromOrder';
import { useEffect } from 'react';



function Cart() {


  const [mostrarFormulario, SetMostrarFormulario] = useState(false)
  const {cart,removeFromCart,clearCart,getTotal} = useContext(CartContext);

  useEffect(() => {

   if(cart.length === 0) {
    SetMostrarFormulario(false)
   }
   
  },[cart] )


  return (
 
    <>
    <div className='contenedorCarritoDeCompras'>

      {cart.length > 0 ? (
        cart.map(i => <Card key = {i.item.id} nombre={i.item.nombre} precio={i.item.precio}  img={i.item.img} id={i.item.id} cantidad={i.quantity} eliminar={removeFromCart} />)
        ) : ( 
        <h2 className='carritoVacio'>El carrito esta vacio</h2>
        )}  

      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-12 botonCarrito p-3'>

            {cart.length > 0 ? (
                  <button className="btn btn-danger" onClick={() => clearCart() } >
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

       {cart.length > 0 ? (

          <div id='pago' className='container d-flex justify-content-end align-items-center shadow contenedorTotalCompra'>
            <div className='row'>
              <div className='col-12 d-flex justify-content-center'>
                <h4>Total de la compra ${getTotal()}</h4>     
              </div>
              <div className='col-12 d-flex justify-content-center mt-3'> 
                <button className="btn btn-primary" onClick={() => SetMostrarFormulario(true) (window.location.href = "#pago") }>Finalizar la compra</button> 
              </div> 
            </div>
          </div>   

       ) : (
       ""
       )}           
    </div>

        {mostrarFormulario === false ? "" 
        :
         <FromOrder/>  
        }

    </>
    
  );
}

export default Cart;