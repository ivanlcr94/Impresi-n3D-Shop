import { useState } from "react";
import Swal from "sweetalert2";
import './ItemCount.css';

function ItemCount({stock, initial, onAdd}) {

    

    const [num, setNum] = useState(initial)

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
            if(num>initial){
            setNum(num - 1)
        }
    }

    return (
   
        <>   
            <p>Stock Actual = {stock - num}</p>
            <div className="contador">
                <button type="button" className="btn btn-light botonContador"  onClick={sumar}>+</button>
                <p>{num}</p>
                <button type="button" className="btn btn-light botonContador"  onClick={restar}>-</button>
                <button type="button" className="btn btn-outline-primary botonAgregarCarrito"  onClick={()=>onAdd(num)} >Agregar al carrito</button>
            </div>
        </>
    );
  }
  
  export default ItemCount;