import {useState} from 'react'
import { useContext } from 'react';
import {CartContext} from '../Context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


function FromOrder() {

    const {cart,removeFromCart,clearCart,getTotal} = useContext(CartContext);  

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
            <form onSubmit={submitHandler} className="row" >
                <div className="col-8 col-md-9 col-lg-9 formularioContacto justify-content-center align-items-center"/>
                    <div>
                        <h2>Información de contacto</h2>
                        
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
                        <button className="btn btn-success" type="submit" >Enviar</button>
                    </div>
                
            </form>
        </div>


    </>
 
  );
}

export default FromOrder;