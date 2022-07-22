import { Link } from 'react-router-dom';
import './Item.css';


function Item(props) {

  return (
    <>
          <div className=' container col-12 col-md-6 col-lg-4  contenedorCard'> 
            <div className="card shadow  m-5 itemCard ">
                <img src={props.img} className="card-img-top imagenCard " />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">Precio: ${props.precio}</p>
                    <Link to={`/item/${props.id}`} className="btn btn-outline-primary">Detalles de producto</Link>
                </div>
            </div>  
          </div>   
    </>
 
  );
}

export default Item;