import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewClasses() {
  const [classes, setClasses] = useState([]);

  function LoadClasses() {
    axios.get("http://localhost:8080/api/class/fetchAll").then((response) => {
      setClasses(response.data);
      console.log(response.data)
    });
  }
  useEffect(() => {
    LoadClasses();
  }, []);
  return (
    <div className="container-fluid">
      <div className="btn btn-dark w-10 mb-2 mt-2">
              <Link to="/viewclasses/addclass" className="text-white text-decoration-none">
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
              <th scope="col">Create</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((clas) => {
              return(
              <tr>
                <th scope="row" key={clas.classId}>{clas.classId}</th>
                <td>{clas.name}</td>
                <td>{clas.code}</td>
                <td>{clas.createdDate}</td>
                <td>{clas.updatedDate}</td>
              </tr>
            )})}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ViewClasses;
