import React, { useEffect, useState } from "react"
import "../../assets/global.css"
import "./Cart.css"
import "../Viewpage/Viewpage.css"
import { Button, Card, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { ADD, DLT, REMOVE } from "../../redux/action/index"
import { Link, useParams } from "react-router-dom"
import { isDisabled } from "@testing-library/user-event/dist/utils"

function Cart() {
  const [data, setData] = useState([])

  const { id } = useParams()

  // const [price, setPrice] = useState(0)
  // console.log()

  const getdata = useSelector((state) => state.cartreducer.carts)
  // console.log(getdata)
  const dispatch = useDispatch()

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    })
    setData(comparedata)
  }

  useEffect(() => {
    compare()
  }, [id])

  const dlt = (id) => {
    dispatch(DLT(id))
  }

  
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e))
  }

  const remove = (item) => {
   
    dispatch(REMOVE(item))
  }

  return (
    <div>
      {getdata.length ? (
        <div className="container">
          <div className="row ">
            {getdata.map((element, id) => {
              return (
                <>
                  <div className="details cart " key={id}>
                    <Link to={`/view/${element.id}`}>
                      {" "}
                      <img src={element.imgdata} alt="" />{" "}
                    </Link>
                    
                    <div className="box">
                      <div className="row">
                        <h2>{element.rname}</h2>
                        <span>${element.price}</span>
                      </div>
                      <p>{element.type}</p>
                      <p>{element.somedata}</p>
                      <div className="amount">
                        <Button
                          className="btn btn-light ms-2"
                          onClick={
                            element.qnty <= 1
                              ? isDisabled
                              : () => remove(element)
                          }
                        >
                          -
                        </Button>
                        <span>{element.qnty}</span>
                        <Button
                          className="btn btn-light ms-2"
                          onClick={() => send(element)}
                        >
                          +
                        </Button>
                        <p>
                          <strong>Total</strong>:${element.price * element.qnty}
                        </p>
                      </div>
                    </div>
                    <div className="delete">
                      <Button
                        className="button"
                        variant="secondary"
                        size="lg"
                        onClick={() => dlt(element.id)}
                        style={{ cursor: "pointer", margin: "25px" }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      ) : (
        "this is empty"
      )}
      <div className="total" style={{ marginRight: "50px" }}>
        {/* <Link to="/payment">Payment</Link> */}
        <h3>
          {" "}
          Total Price:$
          {getdata.reduce(
            (total, element) => total + element.price * element.qnty,
            0
          )}
        </h3>
      </div>
    </div>
  )
}

export default Cart
