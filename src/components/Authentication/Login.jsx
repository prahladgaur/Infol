import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./signup_val";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/store";
import toast from "react-hot-toast";

//const bcrypt = require("bcrypt");

// eslint-disable-next-line no-unused-vars
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation({ email, password }));
    try {
      axios
        .post("http://localhost:3000/auth/login", { email, password })
        .then(async (res) => {
          console.log(res);
          const { token } = res.data;

          if (res.data.status) {
            localStorage.setItem("token", token);
            dispatch(authActions.login());
            toast.success("User login Successfully");

            const token1 = localStorage.getItem("token");
            const response = await axios.get(
              "http://localhost:3000/auth/getuser",
              {
                headers: { Authorization: `Bearer ${token1}` },
              }
            );
            const {name} = response.data;
            
            navigate(`/dashboard/${name}`);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="body-login">
      <div className="main">
        <div className="login">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}

            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}

            <button type="submit">Login</button>

            <button>
              <Link className="link" to="/signup">
                <strong>Signup</strong>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
