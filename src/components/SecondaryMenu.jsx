import logo from "../assets/imagenes/logo.png"
const SecondaryMenu = () => {
  return (
    <header>
        <div className="container-fluid ">
            <div className="row header">
                <div className="col-sm-4 bg-dark index-icon ">
                    <a className="navbar-brand" href="index.html">
                        <img className="logo" src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="col-sm-5 bg-dark index-inputSearch">
                <form className="d-flex w-100 ">
                    <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Buscar productos"
                    />
                    <button className="btn-search">
                    <i className="bi bi-search"> </i>
                    </button>
                </form>
                </div>
                <div className="col-sm-3 bg-dark index-carrito">
                    <button className="btn-carrito">
                        <i className="bi bi-cart-dash" /> Carrito{" "}
                    </button>
                </div>
            </div>
        </div>
    </header>

  )
}

export default SecondaryMenu
