/* eslint-disable react/prop-types */
//import React from 'react'
import { useState } from "react";
import '../css/UserProfile.css';

function Update({ userData }) {
  const [data, setData] = useState(userData);
  const handleChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };
  const handleSubmit = () => {
    
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="profile-edit">
          <input value={data.name} onChange={handleChange}></input>
          <input value={data.email} onChange={handleChange}></input>
          <button type="submit">Submit</button>
        </div>
        
      </form>
    </>
  );
}

export default Update;
