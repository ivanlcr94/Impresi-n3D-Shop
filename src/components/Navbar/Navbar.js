import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link , NavLink} from 'react-router-dom'

function Navbar(props) {
  return (

    <header>  

<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow  ">
  <div className="container-fluid">
  <Link className="navbar-brand logo" to='/'>IMPRESIÓN<span id="logo3d">3D</span> Shop</Link>
  <CartWidget />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse listaNav " id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
    
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to='/categorias/accesorios'>Accesorios</Link></li>
            <li><Link className="dropdown-item" to="/categorias/deco">Deco</Link></li>
            <li><Link className="dropdown-item" to="categorias/juguetes">Juguetes</Link></li>
            <li><Link className="dropdown-item" to="categorias/mates">Mates</Link></li>
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

 {/*      <nav class=" navbar navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand">IMPRESIÓN<span id="logo3d">3D</span> Shop</a>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Search"></input>
            <button class="btn btn-outline-success" type="submit">Buscar</button>
            <CartWidget />
          </form>
        </div>
      </nav> */}
 
    </header>

  );
}

export default Navbar;