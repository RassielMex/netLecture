import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Detail from "../views/Detail/Detail";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import Main from "../views/Main/Main";

const RouteComponent = () => {
  const RequireLogIn = ({ children }) => {
    if (!sessionStorage.getItem("loggedIn")) {
      return <Navigate to={"/login"} replace={true} />;
    }
    return children;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <RequireLogIn>
                <Home />
              </RequireLogIn>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/main/:grade"
            element={
              <RequireLogIn>
                <Main />
              </RequireLogIn>
            }
          ></Route>
          <Route
            path="/detail/:id"
            element={
              <RequireLogIn>
                <Detail />
              </RequireLogIn>
            }
          ></Route>
          <Route path="*" element={<h1>Ups! algo salió mal</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteComponent;
