import calcetines from "../assets/iconos/calcetines.png";
import camisetas from "../assets/iconos/camisetas.png";
import pantalones from "../assets/iconos/pantalones.png";
import zapatillas from "../assets/iconos/zapatillas.png";

const Categories = () => {
  return (
    <div>
      <>
        <h2>Categorías</h2>
        <section id="seccion_categorias">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3 material_deportivo categoria">
                <a href="#" className="text-decoration-none text-dark">
                  <span>
                    <p>Calcetines</p>
                    <div className="iconos_materiales">
                      <img src={calcetines} alt="calcetines" />
                    </div>
                  </span>
                </a>
              </div>
              <div className="col-sm-3 material_deportivo categoria">
                <a href="#" className="text-decoration-none text-dark">
                  <span>
                    <p>Camisetas</p>
                    <div className="iconos_materiales">
                      <img src={camisetas} alt="camisetas" />
                    </div>
                  </span>
                </a>
              </div>
              <div className="col-sm-3 material_deportivo categoria">
                <a href="#" className="text-decoration-none text-dark">
                  <span>
                    <p>Pantalones</p>
                    <div className="iconos_materiales">
                      <img src={pantalones} alt="pantalones" />
                    </div>
                  </span>
                </a>
              </div>
              <div className="col-sm-3 material_deportivo">
                <a href="#" className="text-decoration-none text-dark">
                  <span>
                    <p>Zapatillas</p>
                    <div className="iconos_materiales">
                      <img src={zapatillas} alt="zapatillas" />
                    </div>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Categories;
