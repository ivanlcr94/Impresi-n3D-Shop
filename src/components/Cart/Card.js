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
                    <p className="card-title">{props.cantidad} Unidades</p>
                </div>

                <div className='col-8 col-md-3 col-lg-2 contenedorPrecio'>
                    <h5 className="card-title">  ${props.precio}</h5>
                </div>

                <div className='col-4 col-md-3 col-lg-2 p-2 contenedorBotonEliminar '>
                <button type="button" className="btn btn-outline-danger"  onClick={()=>props.eliminar(props.id)} >Eliminar</button>
                </div>

                

                

            </div>

        </div>


       {/*  <div className="card mb-3 p-1 container">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={props.img} className="img-fluid rounded-start imgCard" alt={props.nombre}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.nombre}</h5>
                        <p className=" m-0 p-0 precioCard">${props.precio}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
        </div> */}
    </>
 
  );
}

export default Card;