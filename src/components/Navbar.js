import './Navbar.css';

function Navbar() {
  return (

    <header>  

      <nav class=" navbar navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand">IMPRESIÓN<span id="logo3d">3D</span> Shop</a>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Search"></input>
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
 
    </header>

  );
}

export default Navbar;