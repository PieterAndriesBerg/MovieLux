import "./App.css";
import React from "react";
import { Routes, Route} from "react-router-dom";

//Components
import Login from "./Components/Login/Login"
import SignUp from "./Components/SignUp/SignUp";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Discover from "./Pages/Discover/Discover";

const App = () => {
  return (
	  <div className="App">
		<NavBar />
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/discover" element={<Discover />} />
			<Route path="/login" element={<Login />}/>
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	  </div>
  );
};

export default App;

//TODO: FOOTER CREATE + STYLE
//TODO: implement save of the accesToken in localstorage also we need to verify if token is valid
//TODO: Style Login
//TODO: style Signup