import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="container-fluid">
      <form
        className="bg-dark text-white p-2 mb-2 w-45 "
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-3 row  ">
          <label className="col-sm-1 col-form-label text-bold">Id</label>
          <div className="col-sm-6">
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
          <label className="col-sm-1 col-form-label text-bold">Name</label>
          <div className="col-sm-6">
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
          <label className="col-sm-1 col-form-label text-bold">Code</label>
          <div className="col-sm-6">
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
        <button  className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddClass;
