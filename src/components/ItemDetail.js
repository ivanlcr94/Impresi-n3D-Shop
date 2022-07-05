import './ItemDetail.css';
import ItemCount from './ItemCount';

function ItemDetail(props) {


  return (
    <> 
    <div className='contenedorDetallePorducto shadow'>

    
       <div className='container'>
        <div className='row'>

          <div className='col-12 col-md-12 col-lg-6 contenedorImg'>
          <img src={props.img} alt={props.nombre} className="img-fluid"/>
          </div>

         <div className='col-12 col-md-12 col-lg-6 contenedorDescripcion'>
          <h2>{props.nombre}</h2>  
          <p>{props.descripcion}</p>
          <p>Precio: ${props.precio}</p>
          <ItemCount />
        </div>
        
        </div>
      </div> 
    </div>

 


   </>
  );
}

export default ItemDetail;