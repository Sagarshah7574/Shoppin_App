
import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { home } from "../constants/routeConstant"

const PageNotFound = () => {
  return (
    <div className="page-not-found-main">
      <div className="page-not-found-inner">
        <span><h1>404</h1></span>
        <img src="assets/sad.gif" alt="" className='emptycart_img' style={{width:"300px",padding:10}}  />
        <div>
         <h2> The page you are looking for is not found.</h2>
        </div>
        <Link to={home} className="custom-btn-primary error-page-button">
        <Button variant="outline-dark" size="lg">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
