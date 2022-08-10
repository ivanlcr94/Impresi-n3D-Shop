import './Card.css';


function Card(props) {

  return (
    <>
        <div className='container contenedorCardCarrito'>
            <div className='row'>

                <div className='col-4 col-md-3 col-lg-3 contenedorImg'>
                    <img src={props.img} className="imgCard" alt={props.nombre} />
                </div>

                <div className='col-8 col-md-6 col-lg-5 p-2'>
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-title">{props.cantidad > 1 ? props.cantidad + " Unidades" : props.cantidad + " Unidad"}</p>
                </div>

                <div className='col-8 col-md-3 col-lg-2 contenedorPrecio'>
                    <h5 className="card-title">  ${props.precio}</h5>
                </div>

                <div className='col-4 col-md-3 col-lg-2 p-2 contenedorBotonEliminar '>
                    <button type="button" className="btn btn-outline-danger"  onClick={()=>props.eliminar(props.id)} >Eliminar</button>
                </div>

            </div>

        </div>

    </>
 
  );
}

export default Card;