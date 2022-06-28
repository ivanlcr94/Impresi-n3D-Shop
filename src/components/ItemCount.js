import { useState } from "react";
import './ItemCount.css';

function ItemCount(promps) {

    const stock = promps.stockActual;

    const [num, setNum] = useState(0)

     const sumar = () => {
            if(num<stock){
            setNum(num + 1)
        }
    }

    const restar = () =>{
            if(num>0){
            setNum(num - 1)
        }
    }

    return (
   
        <>   
            <div className="contador">
                <button className="botonContador" onClick={sumar}>+</button>
                <p>{num}</p>
                <button className="botonContador" onClick={restar}>-</button>
            </div>
        </>
    );
  }
  
  export default ItemCount;