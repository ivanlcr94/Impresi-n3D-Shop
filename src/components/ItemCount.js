import { useState } from "react";
import Swal from "sweetalert2";
import './ItemCount.css';

function ItemCount(promps) {

    const stock = promps.stock;

    const [num, setNum] = useState(0)

     const sumar = () => {
            if(num<stock){
            setNum(num + 1)
        } else{
            Swal.fire({
                title: 'Atención!',
                text: 'No hay más stock disponible.',
                icon: 'warning',
                timer: 2000
            })
        }
    }

    const restar = () =>{
            if(num>0){
            setNum(num - 1)
        }
    }

    return (
   
        <>   
            <p>Stock Actual = {promps.stock - num}</p>
            <div className="contador">
                <button type="button" className="btn btn-light botonContador"  onClick={sumar}>+</button>
                <p>{num}</p>
                <button type="button" className="btn btn-light botonContador"  onClick={restar}>-</button>
                <button type="button" className="btn btn-outline-primary botonAgregarCarrito">Agregar al carrito</button>
            </div>
        </>
    );
  }
  
  export default ItemCount;