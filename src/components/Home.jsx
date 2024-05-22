import React, { useEffect, useState } from "react";
import firebaseApp from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);

const Home = ({ correoUsuario }) => {
  const valorInicial = {
    nombre: "",
    edad: "",
    profesion: "",
  };

  const [user, setUser] = useState(valorInicial);
  const [lista, setLista] = useState([]);

  const capturarInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      await addDoc(collection(db, "usuarios"), {
        ...user,
      });
    } catch (error) {
      console.log(error);
    }
    setUser({ ...valorInicial });
  };

  //función para renderizar la lista de usuarios
  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLista(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getLista();
  }, [lista]);

  // funcion para eliminar usuarios
  const deleteUser = async (id) =>{
    await deleteDoc(doc(db, "usuarios", id))
  }

  return (
    <div className="container">
      <p>
        Bienvenido <strong>{correoUsuario}</strong>Iniciaste sesión
        correctamente
      </p>
      <button className="btn btn-dark" onClick={() => signOut(auth)}>
        cerrar sesión
      </button>
      <hr></hr>
      <div className="row">
        {/*{sección formulario*/}
        <div className="col-md-4">
          <h3 className="text-center mb-3">Ingresar usuario</h3>
          <form onSubmit={guardarDatos}>
            <div className="card card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  className="form-control mb-3"
                  placeholder="ingresar el nombre del usuario"
                  onChange={capturarInputs}
                  value={user.nombre}
                ></input>
                <input
                  type="texto"
                  name="edad"
                  className="form-control mb-3"
                  placeholder="ingresar la edad del usuario"
                  onChange={capturarInputs}
                  value={user.edad}
                ></input>
                <input
                  type="texto"
                  name="profesion"
                  className="form-control mb-3"
                  placeholder="ingresar la profesion del usuario"
                  onChange={capturarInputs}
                  value={user.profesion}
                ></input>
              </div>
              <button className="btn btn-dark btn-black">Guardar</button>
            </div>
          </form>
        </div>
        {/*{sección lista de usuarios*/}
        <div className="col-md-8">
          <h2 className="text-center mb-5">Lista de usuarios</h2>
          <div className="container card">
            <div className="card-body">
              {lista.map((List) => (
                <div key={List.id}>
                  <p>
                    <strong>Nombre: </strong>
                    {List.nombre}
                  </p>
                  <p>
                    <strong>Edad: </strong>
                    {List.edad}
                  </p>
                  <p>
                    <strong>Profesion: </strong>
                    {List.profesion}
                  </p>
                  <button className="btn btn-dark" onClick={() => deleteUser(List.id)}>Eliminar</button>
                  <button className="btn btn-dark m-1">Actualizar</button>
                  <hr></hr>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
