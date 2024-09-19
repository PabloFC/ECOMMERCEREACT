import Molbeck from "../assets/imagenes/Molbeck.jfif"
const Testimonials = () => {
  return (
    <section className="testimonios separacion">
    <div className="row d-flex justify-content-center mb-50">
        <div className="col-md-10 col-xl-8 text-center">
        <h2 className="mb-5">Testimonios de clientes</h2>
        </div>
    </div>
    <div className="row text-center">
        <div className="col-md-4 mb-5">
        <div className="d-flex justify-content-center mb-4">
            <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            className="rounded-circle shadow-1-strong"
            width={100}
            height={100}
            />
        </div>
        <h5 className="mb-3">Veronica Chase</h5>
        <h6 className="color-primario mb-3">Web Developer</h6>
        <p className="px-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
            <li>
            <i className="fas fa-star-half-alt fa-sm text-warning" />
            </li>
        </ul>
        </div>
        <div className="col-md-4 mb-5">
        <div className="d-flex justify-content-center mb-4">
            <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
            className="rounded-circle shadow-1-strong"
            width={100}
            height={100}
            />
        </div>
        <h5 className="mb-3">Izabel Cunha</h5>
        <h6 className="color-primario mb-3">Graphic Designer</h6>
        <p className="px-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
        </ul>
        </div>
        <div className="col-md-4 mb-0 ">
        <div className="d-flex justify-content-center mb-4">
            <img
            src={Molbeck}
            className="rounded-circle shadow-1-strong"
            width={100}
            height={100}
            />
        </div>
        <h5 className="mb-3">Marco Molbeck</h5>
        <h6 className="color-primario mb-3">Marketing Specialist</h6>
        <p className="px-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
            <li>
            <i className="fas fa-star fa-sm text-warning" />
            </li>
            <li>
            <i className="far fa-star fa-sm text-warning" />
            </li>
        </ul>
        </div>
    </div>
</section>

  )
}

export default Testimonials
