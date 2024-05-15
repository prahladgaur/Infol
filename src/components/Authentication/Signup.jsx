import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./signup_val";
import toast from "react-hot-toast";
//const bcrypt = require("bcrypt");

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tag, setTag] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username == "" || tag=="" || email=="" || password=="" ){
      alert("Fields are Empty")
    }
    setErrors(Validation({ username, tag, email, password }));
    
    try {
      axios
        .post("http://localhost:3000/auth/signup", {
          username,
          tag,
          email,
          password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            toast.success("User registered Successfully");
            navigate("/login");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="body-login">
        <div className="main">
          <div className="signup">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>

              <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setUsername(e.target.value)}
                name="username"
              />

              <input
                type="text"
                placeholder="Enter Tag"
                onChange={(e) => setTag(e.target.value)}
                name="tag"
              />

              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                name="email"
              />

              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}

              <button type="submit">Sign up</button>
              <button>
                <Link className="link" to="/login">
                  <strong>Login</strong>
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
