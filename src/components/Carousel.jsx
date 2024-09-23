import portada1 from "../assets/imagenes/portada1.jpg";
import portada2 from "../assets/imagenes/portada2.jpg";
import portada3 from "../assets/imagenes/portada3.webp";
const Carousel = () => {
  return (
    <div
      id="index-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-interval={4000}
    >
      {/* Indicators/dots */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#index-carousel"
          data-bs-slide-to={0}
          className="active"
        />
        <button
          type="button"
          data-bs-target="#index-carousel"
          data-bs-slide-to={1}
        />
        <button
          type="button"
          data-bs-target="#index-carousel"
          data-bs-slide-to={2}
        />
      </div>
      {/* The slideshow/carousel */}
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{ backgroundImage: `url(${portada1})` }}
        >
          <div className="carousel-caption fondoTransparente">
            <h3>Prepárate para el buen tiempo</h3>
            <button className="boton-primario">Ver más</button>
          </div>
        </div>

        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${portada2})` }}
        >
          <div className="carousel-caption fondoTransparente">
            <h3>Hasta un 30% en zapatillas Nike</h3>
            <button className="boton-primario">Ver más</button>
          </div>
        </div>

        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${portada3})` }}
        >
          <div className="carousel-caption fondoTransparente">
            <h3>Nuevos diseños de calcetines a la venta</h3>
            <button className="boton-primario">Ver más</button>
          </div>
        </div>
      </div>
      {/* Left and right controls/icons */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#index-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#index-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};

export default Carousel;
