import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      studentId: 0,
      firstname: " ",
      lastname: " ",
      gender: " ",
      email: " ",
      phone: 0,
      password: " ",
      dob: " ",
      classId: 0,
      createdDate: new Date(),
      updatedDate: new Date(),
    },
    onSubmit: (student) => {
      axios.post("http://localhost:8080/api/student/create", student);
      navigate("/viewstudents");
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
              name="studentId"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">FirstName</label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              name="firstname"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">LastName</label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              name="lastname"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">Gender</label>
          <div className="col-sm-6">
            <label className="me-5">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={formik.handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={formik.handleChange}
              />
              Female
            </label>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">Email</label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              name="email"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">Password</label>
          <div className="col-sm-6">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">Mobile</label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Mobile No"
              name="phone"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">DOB</label>
          <div className="col-sm-6">
            <input
              type="date"
              className="form-control"
              name="dob"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">Class</label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
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

export default AddStudent;
