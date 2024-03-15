import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Student from "../student/Student";
import AddStudent from "../student/AddStudent";
import EditStudent from "../student/EditStudent";
import ViewStudents from "../student/ViewStudents";
import ViewClasses from "../class/ViewClasses";
import ViewSubjects from "../subject/ViewSubjects";
import AddClass from "../class/AddClass";
import AddSubject from "../subject/AddSubject";
import EditClass from "../class/EditClass";
import "./studentindex.css"
function StudentIndex() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header>
          <span className="h3 bg-warning p-2">STUDENT-INFO</span>
        </header>
        <section className="row mt-4">
          <nav className="col-2">
            <div className="btn btn-lg w-100 mb-2 mt-2 ">
              <Link
                to="/viewstudents"
                className="text-info text-decoration-none"
              >
                Student
              </Link>
            </div>
            <div className="btn btn-light w-100 mb-2 mt-2">
              <Link to="viewclasses" className="text-info text-decoration-none">
                Class
              </Link>
            </div>
            <div className="btn btn-light w-100 mb-2 mt-2">
              <Link
                to="viewsubjects"
                className="text-info text-decoration-none"
              >
                Subject
              </Link>
            </div>
            <div className="btn btn-light w-100 mb-2 mt-2">
              <Link to="contact" className="text-info text-decoration-none">
                Contact-Info
              </Link>
            </div>
            <div className="btn btn-light w-100 mb-2 mt-2">
              <Link to="address" className="text-info text-decoration-none">
                Address-Info
              </Link>
            </div>
          </nav>
          <main className="col-10">
            <Routes>
              <Route path="/student" element={<Student />} />
              <Route path="/addstudent" element={<AddStudent />} />
              <Route path="/editstudent" element={<EditStudent />} />
              <Route path="/viewstudents" element={<ViewStudents />} />
              <Route path="/viewclasses" element={<ViewClasses />} />
              <Route path="/viewsubjects" element={<ViewSubjects />} />
              <Route path="/viewclasses/addclass" element={<AddClass />} />
              <Route path="/viewsubjects/addsubject" element={<AddSubject />} />
              <Route path="/viewstudents/addstudent" element={<AddStudent />} />
              <Route path="/edit-class/:classId" element={<EditClass />} />
            </Routes>
          </main>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default StudentIndex;
