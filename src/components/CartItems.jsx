import camiseta_nike_hombre from "../assets/imagenes/camisetas/camiseta_nike_hombre.jpg";
import fila_clementina from "../assets/imagenes/camisetas/fila_clementina.jpg";
import nike_air_zoom from "../assets/imagenes/zapatillas/nike_air_zoom_hombre.jpg";
import pantalon_asics from "../assets/imagenes/pantalones/pantalon_asics.jpg";
const CartItems = () => {
  return (
    <section className="h-100">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-normal mb-0 text-black">Mi carrito</h2>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Ordenar por:</span>{" "}
                  <a href="#!" className="text-body">
                    precio <i className="fas fa-angle-down mt-1" />
                  </a>
                </p>
              </div>
            </div>
            <div className="card rounded-3 mb-4 border-card-miCarrito">
              <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src={camiseta_nike_hombre}
                      className="img-fluid rounded-3"
                      alt="Cotton T-shirt"
                    />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button
                      className="btn btnPlusMinus_miCarrito"
                      //   onClick={this.parentNode.querySelector('input[type=number]').stepDown()}
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <input
                      id="form1"
                      min={0}
                      name="quantity"
                      defaultValue={1}
                      type="number"
                      className="form-control form-control-sm"
                    />
                    <button
                      className="btn btnPlusMinus_miCarrito"
                      //   onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    >
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">499.00€</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#">
                      <i className="fas fa-trash fa-lg btnDelete_miCarrito" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card rounded-3 mb-4 border-card-miCarrito">
              <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src={fila_clementina}
                      className="img-fluid rounded-3"
                      alt="Cotton T-shirt"
                    />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button
                      className="btn btnPlusMinus_miCarrito"
                      //   onClick={this.parentNode.querySelector('input[type=number]').stepDown()}
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <input
                      id="form1"
                      min={0}
                      name="quantity"
                      defaultValue={2}
                      type="number"
                      className="form-control form-control-sm"
                    />
                    <button
                      className="btn btnPlusMinus_miCarrito"
                      //   onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    >
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">499.00€</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#">
                      <i className="fas fa-trash fa-lg btnDelete_miCarrito" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card rounded-3 mb-4 border-card-miCarrito">
              <div className="card-body p-4">
                {" "}
                {/* THIS */}
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src={nike_air_zoom}
                      className="img-fluid rounded-3"
                      alt="Cotton T-shirt"
                    />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button
                      className="btn btnPlusMinus_miCarrito"
                      //   onClick={this.parentNode.querySelector('input[type=number]').stepDown()}
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <input
                      id="form1"
                      min={0}
                      name="quantity"
                      defaultValue={2}
                      type="number"
                      className="form-control form-control-sm"
                    />
                    <button
                      className="btn btnPlusMinus_miCarrito"
                      //   onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    >
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">499.00€</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#">
                      <i className="fas fa-trash fa-lg btnDelete_miCarrito" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card rounded-3 mb-4 border-card-miCarrito">
              <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src={pantalon_asics}
                      className="img-fluid rounded-3"
                      alt="Cotton T-shirt"
                    />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <p className="lead fw-normal mb-2">Basic T-shirt</p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button
                      className="btn btnPlusMinus_miCarrito"
                      //   onClick={this.parentNode.querySelector('input[type=number]').stepDown()}
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <input
                      id="form1"
                      min={0}
                      name="quantity"
                      defaultValue={2}
                      type="number"
                      className="form-control form-control-sm"
                    />
                    <button
                      className="btn btnPlusMinus_miCarrito"
                      //   onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    >
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">499.00 €</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#">
                      <i className="fas fa-trash fa-lg btnDelete_miCarrito" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-card-miCarrito">
              <div className="card-body card-miCarrito">
                <button
                  type="button"
                  className="btn btn-block btn-lg text-white"
                >
                  Proceder al Pago
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
