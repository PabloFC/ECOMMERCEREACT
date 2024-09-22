import whyUs from "../assets/imagenes/whyUs.jpg";
const WhyUs = () => {
  return (
    <section className="py-3 py-md-5">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src={whyUs}
              alt="About 2"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-10">
                <h2 className="mb-3 text-left  color-terciario">
                  ¿Por qué elegirnos?
                </h2>
                <p className="lead fs-4 mb-3 mb-xl-5">
                  Con años de experiencia y un profundo conocimiento de la
                  industria, tenemos un historial comprobado de éxito y estamos
                  constantemente presionando nosotros mismos para mantenernos a
                  la vanguardia.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="#6369d1"
                      className="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <div>
                    <p className="fs-5 m-0">
                      Nuestro proceso de desarrollo es extremadamente eficiente
                      e inteligente
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="#6369d1"
                      className="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <div>
                    <p className="fs-5 m-0">Entregamos los pedidos en 1 día.</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4 mb-xl-5">
                  <div className="me-3 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="#6369d1"
                      className="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <div>
                    <p className="fs-5 m-0">2 años de garantía</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
