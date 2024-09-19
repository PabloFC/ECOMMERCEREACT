import logo from "../assets/imagenes/logo.png"
const ShoppingCartMenu = () => {
  return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-sm-4 bg-dark index-icon ">
                    <a className="navbar-brand" href="index.html">
                    <img className="logo" src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="col-sm-8 bg-dark index-carrito">
                    <button className="btn-secundario">
                    <i className="bi bi-cart-dash" /> Carrito{" "}
                    </button>
                    <div className="iconNext_miCarrito">
                    <i className="bi bi-arrow-right-circle primario" />
                    </div>
                    <button className="btn-primario">
                    <i className="bi bi-wallet" /> Forma de pago{" "}
                    </button>
                    <div className="iconNext_miCarrito">
                    <i className="bi bi-arrow-right-circle primario" />
                    </div>
                    <button className="btn-primario">
                    <i className="bi bi-card-checklist" /> Finalizar pedido{" "}
                    </button>
                </div>
            </div>
        </div>

  )
}

export default ShoppingCartMenu
