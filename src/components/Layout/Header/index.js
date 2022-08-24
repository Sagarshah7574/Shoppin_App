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

import { Button } from "react-bootstrap"



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
  // const activeLink="bg-red-100 text-black"
  // const normalLink=""

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Link to={home} style={{textDecoration:"none"}}>
          {" "}
          <img
            src="https://res.cloudinary.com/dsmlde0pv/image/upload/v1659070200/cart_ambnx1.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top mt-2"
            alt="React Bootstrap logo"
          />
       

        <Navbar.Brand style={{ margin: "5px" }}>
          {" "}
          <span style={{ fontSize: "30px" }} className="text-decoration-none">
            {" "}
            Elite
          </span>{" "}
          <span style={{ fontSize: "30px" }} className="text-decoration-none">
            Shoppy
          </span>
        </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={home} className="text-decoration-none text-dark mx-3 ">
            <Button variant="outline-dark">Home</Button>
            </Link>
            <Link to={shop} className="text-decoration-none text-dark mx-3">
            <Button variant="outline-dark">Shop</Button>
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
              <Link to={cart} style={{textDecoration:"none"}}>    
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
