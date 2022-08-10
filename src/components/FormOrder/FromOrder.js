import {useState} from 'react'
import { useContext } from 'react';
import {CartContext} from '../Context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from "sweetalert2";
import Spinner from '../Spinner/Spinner';


function FromOrder() {

    const {cart,clearCart,getTotal} = useContext(CartContext);  

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [newOrderId, SetNewOrderId ] = useState("")

   const nameHandler = (event) => {
    setName(event.target.value)
   }

   const lastNameHandler = (event) => {
    setLastName(event.target.value)
   }

   const phoneHandler = (event) => {
    setPhone(event.target.value)
   }

   const emailHandler = (event) => {
    setEmail(event.target.value)
   }

   const submitHandler = (event) => {
    event.preventDefault();

    const NewBuyer = {
        name: name,
        lastName: lastName,
        phone: phone,
        email: email
    }

    const order = {
        buyer: NewBuyer,
        total: getTotal(),
        items: cart,
        date: Date()
    }

    const db = getFirestore()

    const ordersColletion = collection(db, "orders");

    addDoc(ordersColletion, order).then((doc) => SetNewOrderId(doc.id));

   

    setName("")
    setLastName("")
    setPhone("")
    setEmail("")

    

   }

    

  return (
    <>
     <div className="container">

        { newOrderId === ""?
            <form onSubmit={submitHandler} className="row" >
                <div className="col-8 col-md-9 col-lg-9 formularioContacto justify-content-center align-items-center"/>
                    <div>
                        <h2 id="formularioCompra">Información de contacto</h2>
                        
                    </div>
                    <div className="form-floating mb-3 p-1">
                        <input type="text" className="form-control" id="floatingInputNombre" placeholder="Nombre" value={name} onChange={nameHandler} required/>
                        <label >Nombre</label>
                    </div>
                    <div className="form-floating mb-3 p-1">
                        <input type="text" className="form-control" id="floatingInputApellido" placeholder="Apellido" value={lastName} onChange={lastNameHandler}  required/>
                        <label >Apellido</label>
                    </div>
                    <div className="form-floating mb-3 p-1">
                        <input type="number" className="form-control" id="floatingInputNumber" placeholder="Telefono" value={phone} onChange={phoneHandler} required/>
                        <label >Telefono</label>
                    </div>
                    <div className="form-floating mb-3 p-1 ">
                        <input type="email" className="form-control" id="floatingInputEmail" placeholder="Email" value={email} onChange={emailHandler}  required/>
                        <label >Email</label>
                    </div>
                    <p>Por favor complete el formulario con sus datos para terminar la compra.</p>
                    <div className="col-12 d-flex justify-content-end m-2 buttonFormulario">
                        <button className="btn btn-success" type="submit" >COMPRAR</button>
                    </div>
                
            </form>
        :

        Swal.fire({
            title: 'Compra Finalizada con exito!',
            text: `Tu orden de compra es: ${newOrderId} `,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Volver a pagina de inicio'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                text: `Gracias por comprar en IMPRESIÓN3D.`,
                footer: "Redirigiendo a  la pagina de inicio...",  
                showConfirmButton: false,
                timer: 4000,
                allowOutsideClick: false
              }).then(() => {
                <Spinner/>
                return (window.location.href = "/");
              });
            }
          }) 

          (clearCart())
    
    }
        
        </div>

    </>
 
  );
}

export default FromOrder;