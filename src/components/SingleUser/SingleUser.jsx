//import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

function SingleUser() {
  const [userdata, setUserData] = useState(null);
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/getUser");
      const { data } = response;
      if (data?.success) {
        setUserData(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div>SingleUser</div>
      {userdata.email}
    </>
  );
}

export default SingleUser;
