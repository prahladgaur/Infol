import Navbar from "./components/Navbar";
import "./App.css";
import "./css/Login.css"
import './css/Infoltable.css'
import Login from "./components/Authentication/Login";
import Home from "./components/Home";
import Signup from "./components/Authentication/Signup";
import About from "./components/About";
import FindInfol from "./components/FindInfol";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import Dashboard from "./components/Dashboard";
import Update from "./components/Update";

//import AddData from "./pages/AddData";
import Ourwork from "./components/Ourwork";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/ourwork" element={<Ourwork />}></Route>
            <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
            <Route path="/dashboard/:username" element={<Dashboard />}></Route>
            <Route path="/user/:username" element={<UserProfile />}></Route>           
            <Route path="/findinfol" element={<FindInfol />}></Route>
            <Route path="/ProfileEdit" element={<Update />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
