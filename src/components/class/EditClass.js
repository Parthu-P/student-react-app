import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EditClass() {
  const [classes, setClasses] = useState([]);
  const { classId } = useParams();
  function LoadClasses() {
    axios
      .get(`http://localhost:8080/api/class/fetch/${classId}`)
      .then((response) => {
        setClasses(response.data);
      });
    console.log(classes);
  }
  useEffect(() => {
    LoadClasses();
  }, []);

  const formik = useFormik({
    initialValues: {
      classId: 0,
      name: " ",
      code: " ",
      createdDate: new Date(),
      updatedDate: new Date(),
    },
    onSubmit: (clas) => {
      axios.put(`http://localhost:8080/api/class/fetch/${classId}`, clas);
    },
  });
  return (
    <div className="container-fluid">
      <form className="bg-dark text-white p-2 mb-2 w-45 ">
        <div className="mb-3 row  ">
          <label className="col-sm-1 col-form-label text-bold">Id</label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Enter Id"
              name="classId"
              value={classes.classId}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">Name</label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter ClassName"
              name="name"
              value={classes.name}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">Code</label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Code"
              name="code"
              value={classes.code}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">Create</label>
          <div className="col-sm-6">
            <input
              type="date"
              className="form-control"
              name="createdDate"
              value={classes.createdDate}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">Update</label>
          <div className="col-sm-6">
            <input
              type="date"
              className="form-control mb-2"
              name="updatedDate"
              value={classes.updatedDate}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div>
          <button className="btn btn-primary me-3">Update</button>
          <button className="btn btn-warning ">
            <Link
              to="/viewclasses"
              className="text-decoration-none text-dark"
            >
              Cancel
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditClass;
