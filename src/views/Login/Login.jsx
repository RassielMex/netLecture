import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";

import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [logInError, setLogInError] = useState("");
  const navigate = useNavigate();
  const onSubmit = () => {
    const email = values.email;
    const password = values.password;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        sessionStorage.setItem("loggedIn", true);
        //console.log(user);
        navigate("/");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/network-request-failed":
            setLogInError("Error de conexión a internet");
            break;
          case "auth/wrong-password":
            setLogInError("Verifique su contraseña");
            break;
          case "auth/user-not-found)":
            setLogInError("Email no encontrado");
            break;
          default:
            setLogInError("Error de autenticación");
            break;
        }
        //console.log(error.code);
      });
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const required = "Este campo es obligatorio";
  const invalidMail = "Introduzca un email válido";

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(invalidMail).required(required),
    password: Yup.string().required(required),
  });

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleChange, handleSubmit, values, errors, handleBlur, touched } =
    formik;

  return (
    <>
      {sessionStorage.getItem("loggedIn") && <Navigate to={"/"} />}
      <div className="container">
        <div className="container-login">
          <h3>Acceso</h3>
          {logInError && <p className="error">{logInError}</p>}
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="email">Correo electronico:</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </fieldset>
            <fieldset>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
            </fieldset>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
