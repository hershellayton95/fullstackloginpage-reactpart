import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import FormPage from "./components/FormPage";
import LoginControlled from "./components/LoginControlled";
import './components/sass/main.scss'
import SigninControlled from "./components/SigninControlled";

function App() {

  const location = useLocation();

  const classNameApp = (pathSting: typeof location): string => {
    const path = pathSting.pathname.split("/").pop() as string;
    return path;
  }



  return (
    <div className= {`app ${classNameApp(location)}`}>
      <Routes>
        <Route path="/" element={<h1>Pagina Principale</h1>} />
        <Route path="user" element={<FormPage/>}>
          <Route index element={<h1>Pagina Principale</h1>} />
          <Route path="login" element={<LoginControlled />} />
          <Route path="signin" element={<SigninControlled />} />
        </Route>
        <Route path="/profile" element={<p>Contact</p>} />
        <Route path="*" element={<p>Error</p>} />
      </Routes>
    </div>
  );
}

export default App;
