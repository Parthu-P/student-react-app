import React from "react";
import { Link } from "react-router-dom";

function Student() {
  return (
    <div>
      <section className="row mt-4">
        <nav className="col-1 bg-light">
          <div className="btn btn-dark w-100 mb-2 mt-2">
            <Link to="/viewstudents" className="text-white text-decoration-none">
              ViewStudents
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Student;
