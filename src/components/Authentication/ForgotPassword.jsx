import {useState} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';

function ForgotPassword() {
    
  const [email, setEmail] = useState("");
  

  
  //const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post("/auth/forgot-password", {  email })
      .then((res) => {
        console.log(res)
        if(res.data.status){
            alert("Check your email")
           // navigate('/login');
        }    
      })
      .catch(err => {
        console.log(err);
      })
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
    <div className="bg-white p-3 rounded w-25">
      <h2>RESET PASSWORD</h2>
      <form action="" onSubmit={handleSubmit}>
       

        <div className="mb-3">
          <label>
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="form-control rounded-4"
          />
          
        </div>

       

        <button type="submit" className="btn btn-success w-100  rounded-4">
          <strong>Send</strong>
        </button>
        <p>You are agree to our terms and policies</p>
        <Link
          to="/login"
          className='btn btn-default border w-100 bg-light rounded-4 text-decoration-none'
        >
         <strong>Login</strong>
        </Link>
      </form>
    </div>
  </div>
  )
}

export default ForgotPassword