
import React from "react"
import { Link } from "react-router-dom"
import { home } from "../constants/routeConstant"

const PageNotFound = () => {
  return (
    <div className="page-not-found-main">
      <div className="page-not-found-inner">
        <span className="page-error-code">404</span>
        <div className="page-error-msg">
          The page you are looking for is not found.
        </div>
        <Link to={home} className="custom-btn-primary error-page-button">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
