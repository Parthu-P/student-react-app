import React from 'react'
import { Link } from 'react-router-dom'

function Subject() {
  return (
    <div>
      <div>
      <section className="row mt-4">
        <nav className="col-1 bg-light">
          <div className="btn btn-dark w-100 mb-2 mt-2">
            <Link to="/viewsubjects" className="text-white text-decoration-none">
              ViewSubjects
            </Link>
          </div>
        </nav>
      </section>
    </div>
    </div>
  )
}

export default Subject
