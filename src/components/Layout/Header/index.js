import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded"

import { Link } from "react-router-dom"
import { cart, home, shop } from "../../../constants/routeConstant"
import { Badge } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"



function Header() {
  const getdata = useSelector((state) => state.cartreducer.carts)
  // console.log(getdata)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Link to={home}>
          {" "}
          <img
            src="https://res.cloudinary.com/dsmlde0pv/image/upload/v1659070200/cart_ambnx1.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>

        <Navbar.Brand style={{ margin: "5px" }}>
          {" "}
          <span style={{ fontSize: "30px" }} className="list-style-type-none">
            {" "}
            Elite
          </span>{" "}
          <span style={{ fontSize: "30px" }} className="text-decoration-none">
            Shoppy
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={home} className="text-decoration-none text-dark mx-3">
              Home
            </Link>
            <Link to={shop} className="text-decoration-none text-dark mx-3">
              Shop
            </Link>
          </Nav>
          <Form className="d-flex mx-5">
            <Form.Control
              type="search"
              aria-label="Search"
              placeholder="search..."
            />
            
            <Badge
              badgeContent={getdata.length}
              color="info"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Link to={cart}>    
             <ShoppingBagRoundedIcon
                style={{ height: "40px", width: "40px" }}
              />
              <span>{getdata.carts}</span>
              </Link>

              
            </Badge>
          </Form>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  )
}

export default Header
