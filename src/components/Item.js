import './Item.css';


function Item(props) {

  return (
    <>
          <div className='col-12 col-md-6 col-lg-4 justify-content-center align-items-center'> 
            <div className="card shadow mx-auto m-5">
                <img src="..." className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">Precio: ${props.precio}</p>
                    <a href="#" className="btn btn-outline-primary">Detalles de producto</a>
                </div>
            </div>  
          </div>   
    </>
 
  );
}

export default Item;