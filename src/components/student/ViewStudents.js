import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewStudents() {
  const [students, setStudents] = useState([]);

  function LoadStudents() {
    axios.get("http://localhost:8080/api/student/fetchAll").then((response) => {
      setStudents(response.data);
      console.log(response.data)
    });
  }
  useEffect(() => {
    LoadStudents();
  }, []);
  return (
    <div className="container-fluid">
      <div className="btn btn-dark w-10 mb-2 mt-2">
              <Link to="/viewstudents/addstudent" className="text-white text-decoration-none">
                +AddStudent
              </Link>
            </div>
      <form className="form-control">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Password</th>
              <th scope="col">DOB</th>
              <th scope="col">Create</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return(
              <tr>
                <th scope="row" key={student.studentId}>{student.studentId}</th>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.password}</td>
                <td>{student.dob}</td>
                <td>{student.createdDate}</td>
                <td>{student.updatedDate}</td>
              </tr>
            )})}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ViewStudents;
