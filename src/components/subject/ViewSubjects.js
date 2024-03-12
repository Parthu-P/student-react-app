import axios from "axios";
import React, { useEffect, useState } from "react";

function ViewSubjects() {
  const [subjects, setSubjects] = useState([]);

  function LoadSubjects() {
    axios.get("http://localhost:8080/api/subject/fetchAll").then((response) => {
      setSubjects(response.data);
      console.log(response.data);
    });
  }
  useEffect(() => {
    LoadSubjects();
  }, []);
  return (
    <div className="container-fluid">
        
      <form className="form-control">
        <table className="table table-dark table-striped-columns">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Subject</th>
              <th scope="col">Code</th>
              <th scope="col">Create</th>
              <th scope="col">Update</th>
              <th scope="col">Subjects</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => {
              return (
                <tr>
                  <th scope="row" key={subject.subjectId}>
                    {subject.subjectId}
                  </th>
                  <td>{subject.name}</td>
                  <td>{subject.code}</td>
                  <td>{subject.createdDate}</td>
                  <td>{subject.updatedDate}</td>
                  <td>{subject.updatedDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ViewSubjects;
