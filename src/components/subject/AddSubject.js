import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function AddSubject() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      subjectId: 0,
      name: " ",
      code: " ",
      createdDate: new Date(),
      updatedDate: new Date(),
      classId: 0,
    },
    onSubmit: (subject) => {
      axios.post("http://localhost:8080/api/subject/create", subject);
      navigate("/viewsubjects");
    },
  });
  return (
    <div className="container-fluid">
      <form
        className="bg-dark text-white p-2 mb-2 w-45"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-3 row ">
          <label className="col-sm-1 col-form-label text-bold">Id</label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Enter Id"
              name="subjectId"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">
            Name
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Subject Name"
              name="name"
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
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row ">
          <label className="col-sm-1 col-form-label text-bold">ClassId</label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Enter Class Id"
              name="classId"
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
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddSubject;
