import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewClasses() {
  const [classes, setClasses] = useState([]);
 

  function LoadClasses() {
    axios.get("http://localhost:8080/api/class/fetchAll").then((response) => {
      setClasses(response.data);
      console.log(response.data);
    });
  }
  useEffect(() => {
    LoadClasses();
  }, []);
  return (
    <div className="container-fluid">
      <div className="btn btn-dark w-10 mb-2 mt-2">
        <Link
          to="/viewclasses/addclass"
          className="text-white text-decoration-none"
        >
          +AddClass
        </Link>
      </div>
      <form className="form-control">
        <table className="table table-dark table-striped-columns">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Class</th>
              <th scope="col">Code</th>
              <th scope="col">CreateDate</th>
              <th scope="col">UpdateDate</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((clas) => {
              return (
                <tr>
                  <th scope="row" key={clas.classId}>
                    {clas.classId}
                  </th>
                  <td>{clas.name}</td>
                  <td>{clas.code}</td>
                  <td>{clas.createdDate}</td>
                  <td>{clas.updatedDate}</td>
                  <button
                    className="w-100"
                  >
                    <Link
                      to="/viewclasses/editclass/:classId"
                      className="bi bi-pen-fill btn btn-warning bg-warning w-45 me-1"
                    ></Link>
                    <Link
                      to="/viewclasses/editclass/:classId"
                      className="bi bi-trash-fill btn btn-danger bg-danger w-45"
                    ></Link>

                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ViewClasses;
