//import React from 'react'
import "../css/UserProfile.css";
import { useLocation } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaHashtag } from "react-icons/fa6";
//import { useDispatch } from "react-redux";
//import { authActions } from "../redux/store";


function UserProfile() {
 // const dispatch = useDispatch();

  const location = useLocation();
  const { user } = location.state;
  //dispatch(authActions.login());
 
  return (
    <>
      { (
        <div className="userprofile">
          <div className="profile-card">
            <div className="card">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Avatar"
              />
              <div className="container1">
                <p>
                  <b>
                    <BsPerson />
                    {user.username}
                  </b>
                </p>
                <p>
                  <MdOutlineMail />
                  {user.email}
                </p>
                <p>
                  <FaHashtag />
                  {user.tag}
                </p>

                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserProfile;
