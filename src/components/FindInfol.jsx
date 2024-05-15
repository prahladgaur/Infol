import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Infoltable from "./Datatable/Infoltable";
import Brands from "./Brands";

function FindInfol() {
  const [data1, setdata1] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(true);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/auth/getallusers"
      );

      const { data } = response;

      //const {data} = response.data;
      if (data?.success) {
        setdata1(data.users);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const search = (data) => {
    return data.filter(
      (item) =>
        item.username.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      {
        <div className="Infol">
          <div className="infol_data">
            {page ? (
              <h2 className="text-center">Find Influencer</h2>
            ) : (
              <h2 className="text-center">Brands</h2>
            )}

            <div>
              <div className="text-center">
                <button
                  className="mx-3"
                  disabled={page}
                  onClick={() => setPage(!page)}
                >
                  Influencers
                </button>
                <button disabled={!page} onClick={() => setPage(!page)}>
                  Brands
                </button>
              </div>
              <div>
                <input className="info-table"
                  type="text"
                  placeholder="Search Infol"
                  onChange={(e) => setQuery(e.target.value)}
                ></input>
              </div>
              {page ? (
                <div>
                  <Infoltable data={search(data1)} />
                </div>
              ) : (
                <div>
                  <Brands />
                </div>
              )}
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default FindInfol;
