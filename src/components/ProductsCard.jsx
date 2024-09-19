import products from "../BBDD/products.js";
const ProductsCard = () => {
  return (
    <div className="text-center container py-5">
      <h2 className="mt-4 mb-5">
        <strong> Lo mejor en deporte para tí</strong>
      </h2>
      <div className="row">
        {products.map((product) => {
          // las llaves se ponen cuando lleva logica
          console.log(product);
          return (
            <div key={product.id} className="col-sm-6 col-md-3 mb-3">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img src={product.photo} className="w-100" />
                  <a href="#">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-success ms-2 mt-2">
                            New
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="#" className="text-reset">
                    <h5 className="card-title mb-3">{product.description}</h5>
                  </a>
                  <p>{product.gender}</p>
                  <h6 className="mb-3">29€</h6>
                  <a href="#" className="boton-primario">
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCard;
