/* eslint-disable react/prop-types */
//import React from 'react'
import { useNavigate } from "react-router-dom";

const Infoltable = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (user) => {
    navigate(`/user/${user.username}`, { state: { user } });
  };
  return (
    <>
      <div className="profile-card">
        {data.map((item, index) => (
          <div onClick={() => handleClick(item)} className="card" key={index}>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
            <div className="container1">
              <p>
                <b> {item.username}</b>
              </p>
              <p>{item.email}</p>
              <p>{item.tag}</p>
              <button
                className="btn btn-primary my-2"
                onClick={() => handleClick(item)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Infoltable;
