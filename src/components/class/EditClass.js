import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditClass() {

  const { calssId } = useParams();
  const [clas, setClas] = useState({
    calssId: 0,
    name: "",
    code: "",
    updatedDate: new Date(),
    createdDate: new Date(),
  });

  const { name, code, updatedDate, createdDate } = clas;

  const onInputChange = (e) => {
    setClas({ ...clas, [e.target.name]: e.target.value });
  };

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/class/update/${calssId}`
    );
    console.log(result.data)
    setClas(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/class/update/${calssId}`, clas);
  };

  return (
    <div className="container-fluid">
      <form
        className="bg-dark text-white p-2 mb-2 w-45"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="mb-3 row ">
          <label className="col-sm-1 col-form-label text-bold">Id</label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Enter Id"
              name="classId"
              value={calssId}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-1 col-form-label text-bold">ClassName</label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter ClassName"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
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
              value={code}
              onChange={(e) => onInputChange(e)}
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
              value={createdDate}
              onChange={(e) => onInputChange(e)}
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
              value={updatedDate}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default EditClass;
