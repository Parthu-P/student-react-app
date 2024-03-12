import React from 'react'
import { Link } from 'react-router-dom'

function Class() {
  return (
    <div>
      <div>
      <section className="row mt-4">
        <nav className="col-1 bg-light">
          <div className="btn btn-dark w-100 mb-2 mt-2">
            <Link to="/viewclasses" className="text-white text-decoration-none">
              ViewClasses
            </Link>
          </div>
        </nav>
      </section>
    </div>
    </div>
  )
}

export default Class
