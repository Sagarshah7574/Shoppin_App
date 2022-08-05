import React, { useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ADD } from "../../redux/action"
import { productData } from "../Itemdata"
import "./Shop.css"
function Shop() {
  const [data, setData] = useState(productData)

  const dispatch = useDispatch()

  const filterItem = (item) => {
    const updatedItems = productData.filter((curElem) => {
      return curElem.category === item
    })

    setData(updatedItems)
  }
  const getdata = useSelector((state) => state.cartreducer.carts)

  const send = (e) => {
    //  console.log(e);

    dispatch(ADD(e))
  }

  return (
    <div className="new_arrivals">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="section_title new_arrivals_title">
              <h2>New Arrivals</h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col text-center">
            <div className="new_arrivals_sorting">
              <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                <li
                  className="grid_sorting_button button d-flex flex-column justify-content-around align-items-center "
                  onClick={() => setData(productData)}
                >
                  ALL
                </li>
                <li
                  className="grid_sorting_button button d-flex flex-column justify-content-around align-items-center"
                  onClick={() => filterItem("women's")}
                >
                  WOMEN'S
                </li>
                <li
                  className="grid_sorting_button button d-flex flex-column justify-content-around align-items-center"
                  onClick={() => filterItem("accessories")}
                >
                  ACCESSORIES
                </li>
                <li
                  className="grid_sorting_button button d-flex flex-column justify-content-around align-items-center"
                  onClick={() => filterItem("men's")}
                >
                  MEN'S
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="product-grid d-flex justify-content-center align-items-center">
            {data.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-2 card_style"
                  >
                    <Card.Img
                      variant="top"
                      src={element.imgdata}
                      style={{ height: "16rem", border: "1px solid #ebebeb" }}
                      className="mt-3"
                    />
                    <Card.Body style={{ border: "1px solid #ebebeb" }}>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ${element.price}</Card.Text>
                      <div className="button_div d-flex justify-content-center">
                        {getdata.some((e) => e.id === element.id) ? (
                          <Link to="/cart">
                            {" "}
                            <Button
                              variant="dark"
                              onClick={() => send(element)}
                            >
                              Go To Cart
                            </Button>
                          </Link>
                        ) : (
                          <Button variant="dark" onClick={() => send(element)}>
                            Add TO Cart
                          </Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
