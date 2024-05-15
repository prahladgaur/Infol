import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import {useSelector} from 'react-redux'
//import '../Media.css'
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { authActions } from "../redux/store";
import logo from "../assets/logo.png";
import '../App.css'

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  //const [isLogged, setisLogged] = useState(true);
  const handleProfile = async()=>{
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/auth/getuser", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const {name }= response.data;
      navigate(`/dashboard/${name}`);
    } catch (error) {
      console.log(error);
    }
   
  }
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      axios.get("http://localhost:3000/auth/logout").then((res) => {
        if (res.data.status) {
          toast.success("Logout Successfully");
          localStorage.clear();
          navigate("/login"); 
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <header>
        <nav className={scrollPosition > 20 ? "scrolled" : ""}>
          <div className="container">
            <div className="navbar">
              <img src={logo}></img>
              <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                  <Link to="/">
                    {" "}
                    <a href="#hero">HOME</a>
                  </Link>
                </li>
                <li>
                  <a href="#about">ABOUT US</a>
                </li>

                <li>
                  <a href="#work">OUR WORK</a>
                </li>
                <li>
                  <a href="#contact">CONTACT </a>
                </li>
                <li>
                  <Link to="/findinfol">FIND INFLUENCER</Link>
                </li>

                {!isLogin && (
                  <>
                    <li>
                      <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                      <Link to="/signup">SIGNUP</Link>
                    </li>
                  </>
                )}

                {isLogin && (
                  <li >
                    <div className="dropdown">
                      🧒
                      <div className="dropdown-content">
                        <a href="#" onClick={handleProfile}>Profile</a>
                        <a href="#" onClick={handleLogout}>Logout</a>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
              <div
                className="menu-toggle"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
