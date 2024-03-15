import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  function handleDeleteClick(event) {
    var classId = parseInt(event.target.value);
    var flag = window.confirm("Are you sure\nWant to delete?");
    if (flag === true) {
      axios
        .delete(`http://localhost:8080/api/class/delete/${classId}`)
        .then((response) => {
          setClasses(response.data);
        });
    }
  }
  return (
    <div className="container-fluid">
      <div aria-label="AddClass">
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
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
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
                    <td>
                      <Link
                        className="bi bi-pen-fill btn btn-warning bg-warning w-45 me-1"
                        to={`/edit-class/${clas.classId}`}
                      >Edit</Link>
                    </td>
                    <td>
                    <button
                        className="bi bi-trash btn btn-danger bg-danger w-45 text-dark"
                        value={clas.classId}
                        onClick={handleDeleteClick}
                      >Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default ViewClasses;
