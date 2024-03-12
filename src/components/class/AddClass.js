import axios from "axios";
import { useFormik } from "formik";
import React from "react";

function AddClass() {
  const formik = useFormik({
    initialValues: {
      classId: 0,
      name: "",
      code: "",
      createdDate: new Date(),
      updatedDate: new Date(),
    },
    onSubmit: (clas) => {
      axios.post("http://localhost:8080/api/class/create", clas);
      alert("Appointment Added");
    },
  });
  return (
    <div className="container-fluid">
      <form className="bg-dark text-white" onSubmit={formik.handleSubmit}>
        <div className="mb-3 row ">
          <label className="col-sm-1 col-form-label text-bold">Id</label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control mt-2"
              name="classId"
              onChange={formik.classId}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">ClassName</label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={formik.name}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">Code</label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              name="code"
              onChange={formik.code}
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
              onChange={formik.createdDate}
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
              onChange={formik.updatedDate}
            />
          </div>
        </div>
      </form>
      <div className="btn btn-dark w-10 mb-2 mt-2">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default AddClass;
