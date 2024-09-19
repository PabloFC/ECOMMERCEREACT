import { Link } from "react-router-dom"
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page" >
                        Inicio
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-link active" aria-current="page" >
                        Sobre Nosotros
                    </Link>
                    </li>
                    <li to="/contact" className="nav-item">
                    <Link to="/contact" className="nav-link active" aria-current="page" >
                        Contacto
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-link active" >
                        Login
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}

export default Navigation
