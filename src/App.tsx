import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import FormPage from "./components/FormPage";
import LoginControlled from "./components/LoginControlled";
import Profile from "./components/Profile";
import './components/sass/main.scss'
import SigninControlled from "./components/SigninControlled";
import Users from "./components/Users";

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
          <Route index element={<Users />} />
          <Route path="login" element={<LoginControlled />} />
          <Route path="signin" element={<SigninControlled />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<p>Error</p>} />
      </Routes>
    </div>
  );
}

export default App;
