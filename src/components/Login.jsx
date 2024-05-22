import React from "react";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

import firebaseApp from "../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(firebaseApp);

const Login = () => {
  const [registro, setRegistro] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (registro) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
  };

  return (
    <div className="row container p-4">
      {/*creamos el slider*/}
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="tamano-imagen" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={img2} className="tamano-imagen" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={img3} className="tamano-imagen" alt="..."></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/**creamos el formulario */}
      <div className="col-md-4">
        <div className="mt-5 ms-5">
          <h1>{registro ? "Registrate" : "Iniciar Sesion"}</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Direccion de correo electronico
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Ingrese su correo electronico"
                id="email"
                required
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Ingrese su contraseña"
                id="password"
                required
              ></input>
            </div>
            <button className="btn btn-outline-dark" type="submit">
              {registro ? "Registrate" : "Iniciar Sesion"}
            </button>
          </form>
          <div className="form-group">
            <button
              className="btn btn-outline-dark mt-4 form-control"
              onClick={() => setRegistro(!registro)}
            >
              {registro
                ? "Ya tienes cuenta?,Iniciar sesion"
                : "¿No tienes cuenta?Registrate"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
