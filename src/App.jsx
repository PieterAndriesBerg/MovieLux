import "./App.css";
import React from "react";
import { Routes, Route} from "react-router-dom";

//Components
import Login from "./Components/Login/Login"
import SignUp from "./Components/SignUp/SignUp";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
	  <div className="App">
		<NavBar />
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/login" element={<Login />}/>
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	  </div>
  );
};

export default App;


// TODO: REACT ROUTER IMPLEMENTATION FOR SIGNIN / SIGNUP
// TODO: CREATE A HEADER NAV
// TODO: CREATE HOMEPAGE