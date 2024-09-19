
const LoginForms = () => {
  return (
    <main id="login--logins">
  <div className="container mt-3">
    <div className="row">
      {/* LEFT FORM */}
      <div className="col-sm-6" id="left-form--login">
        <form>
          <h2>Iniciar sesión</h2>
          <br />
          <h5>Accede con tus datos anteriores</h5>
          {/* Email input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
            />
            <label className="form-label" htmlFor="email" />
          </div>
          {/* Password input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Contraseña"
            />
            <label className="form-label" htmlFor="password" />
          </div>
          {/* Submit button */}
          <button
            data-mdb-ripple-init=""
            type="submit"
            className="boton-primario btn-block"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
      {/* RIGHT FORM */}
      <div className="col-sm-6" id="right-form--login">
        <h2>Regístrate</h2>
        <br />
        <h5>
          Crea una cuenta en Sportstyle para conseguir tu primer descuento como
          cliente
        </h5>
        <form>
          {/* 2 column grid layout with text inputs for the first and last names */}
          <div className="row mb-4">
            <div className="col">
              <div data-mdb-input-init="" className="form-outline">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Nombre"
                />
                <label className="form-label" htmlFor="name" />
              </div>
            </div>
            <div className="col">
              <div data-mdb-input-init="" className="form-outline">
                <input
                  type="text"
                  id="Apellidos"
                  className="form-control"
                  placeholder="Apellidos"
                />
                <label className="form-label" htmlFor="Apellidos" />
              </div>
            </div>
          </div>
          {/* Email input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
            />
            <label className="form-label" htmlFor="email" />
          </div>
          {/* Password input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input
              type="password"
              id="contraseña"
              className="form-control"
              placeholder="Contraseña"
            />
            <label className="form-label" htmlFor="contraseña" />
          </div>
          {/* Submit button */}
          <button
            data-mdb-ripple-init=""
            type="button"
            className="boton-primario btn-block mb-4"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  </div>
</main>

  )
}

export default LoginForms
