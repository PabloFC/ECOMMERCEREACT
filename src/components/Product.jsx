import camiseta_nike_hombre from "../assets/imagenes/camisetas/camiseta_nike_hombre.jpg";
const Product = () => {
  return (
    <main className="py-5">
      <div className="container">
        <div className="row gx-5">
          <aside className="col-lg-6">
            <div className="mb-3 d-flex justify-content-center">
              <a
                data-fslightbox="mygalley"
                className="rounded-4"
                target="_blank"
                data-type="image"
                href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
              >
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100vh",
                    margin: "auto",
                  }}
                  className="rounded-4 fit"
                  src={camiseta_nike_hombre}
                />
              </a>
            </div>
          </aside>
          <div className="col-lg-6">
            <div className="ps-lg-3">
              <h4
                className="title text-dark"
                style={{ textAlign: "start !important" }}
              >
                Quality Mens Hoodie for Winter, Mens Fashion Casual Hoodie
              </h4>
              <div className="d-flex flex-row my-3">
                <div className="text-warning mb-1 me-2">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fas fa-star-half-alt" />
                  <span className="ms-1">4.5</span>
                </div>
                <span className="text-muted">
                  <i className="fas fa-shopping-basket fa-sm mx-1" />
                  154 pedidos
                </span>
                <span className="text-success ms-2">In stock</span>
              </div>
              <div className="mb-3">
                <span className="h5">30.99€</span>
              </div>
              <p>
                Modern look and quality demo item is a streetwear-inspired
                collection that continues to break away from the conventions of
                mainstream fashion. Made in Italy, these black and brown
                clothing low-top shirts for men.
              </p>
              <hr />
              <div className="row mb-4">
                <div className="col-md-4 col-6 mb-3 ">
                  <label className="mb-2 d-block">Quantity</label>
                  <div className="input-group mb-3 " style={{ width: 170 }}>
                    <button
                      className="btn btn-white border border-secondary px-3"
                      type="button"
                      id="button-addon1"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <input
                      type="text"
                      className="form-control text-center border border-secondary"
                      placeholder={1}
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                    <button
                      className="btn btn-white border border-secondary px-3"
                      type="button"
                      id="button-addon2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                </div>
              </div>
              <a href="#" className="boton-primario shadow-0">
                {" "}
                <i className="me-1 fa fa-shopping-basket" /> Añadir al carrito{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
