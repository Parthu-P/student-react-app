import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./addclass.css";
import * as yup from "yup";

function AddClass() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      classId: 0,
      name: " ",
      code: " ",
      createdDate: new Date(),
      updatedDate: new Date(),
    },
    validationSchema: yup.object({
      classId: yup
        .string()
        .required("ClassId required")
        .min(1, "ClassId is Empty")
        .max(10),
      name: yup
        .string()
        .required("Name is Required")
        .min(2, "Name Too Short")
        .max(15),
      code: yup
        .string()
        .required("Code is Required")
        .min(2, "Code Too Short")
        .max(15),
    }),
    onSubmit: (clas) => {
      axios.post("http://localhost:8080/api/class/create", clas);
      navigate("/viewclasses");
    },
  });
  return (
    <div className="container-fluid col-1 w-75 me-5">
      <form
        className="text-white p-2 mb-2 w-45 col-5 bg-info-subtle mt-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-3 row  ">
          <label className="col-sm-2 col-form-label text-bold text-dark">
            Class Id
          </label>
          <div>
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Enter Id"
              name="classId"
              onChange={formik.handleChange}
              {...formik.getFieldProps("classId")}
            />
            <dd className="text-danger">{formik.errors.classId}</dd>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold text-dark">
            Name
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ClassName"
              name="name"
              onChange={formik.handleChange}
              {...formik.getFieldProps.name}
            />
            <dd className="text-danger">{formik.errors.name}</dd>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold text-dark">
            Code
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Code"
              name="code"
              onChange={formik.handleChange}
              {...formik.getFieldProps.code}
            />
            <dd className="text-danger">{formik.errors.code}</dd>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold text-dark">
            Create
          </label>
          <div>
            <input
              type="date"
              className="form-control"
              name="createdDate"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label font-bold text-dark">
            Update
          </label>
          <div>
            <input
              type="date"
              className="form-control mb-2"
              name="updatedDate"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <button className="btn btn-primary me-4">Submit</button>
        <Link to="/viewclasses">
          <button className="btn btn-info">Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default AddClass;
