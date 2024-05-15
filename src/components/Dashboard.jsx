import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Update from "./Update";
//import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";

function Dashboard() {
  const [userData, setUserData] = useState({ name: "", email: "" });
  //const [profileImage, setProfileImage] = useState(null);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  dispatch(authActions.login());

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/auth/getuser", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { name, email } = response.data;
      console.log({ name, email });
      setUserData({ name, email });
    } catch (error) {
      console.log(error);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      event.target.name === "profileImage";
    }
  };
  const handleEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      <div className="userprofile">
        <div className="profile-card">
          <div className="card">
            <img
              type="file"
              name="profileImage"
              onClick={onImageChange}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
            <div className="container1">
              <button onClick={handleEdit}>{edit ? "Save" : "Edit"}</button>
              <div>
                {edit ? (
                  <Update userData={userData}/>
                ) : (
                  <div>
                    <p>
                      <b>{userData.name}</b>
                    </p>
                    <p>{userData.email}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
