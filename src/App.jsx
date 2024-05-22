import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import React, { useState } from "react";

import FirebaseApp from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(FirebaseApp);



function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUsuario(userFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <div className="">
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login />}
    </div>
  );
}

export default App;
