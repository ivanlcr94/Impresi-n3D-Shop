import './Navbar.css';
import CartWidget from './CartWidget';

function Navbar() {
  return (

    <header>  

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <a className="navbar-brand logo">IMPRESIÓN<span id="logo3d">3D</span> Shop</a>
  <CartWidget />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse listaNav " id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Herramientas</a></li>
            <li><a className="dropdown-item" href="#">Juguetes</a></li>
            <li><a className="dropdown-item" href="#">Deco</a></li>
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