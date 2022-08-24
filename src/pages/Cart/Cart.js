import React, { useEffect, useState } from "react"
import "../../assets/global.css"
import "./Cart.css"
import "../Viewpage/Viewpage.css"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { ADD, DLT, REMOVE } from "../../redux/action/index"
import {  Link, useParams } from "react-router-dom"
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
    if(window.confirm("Are you sure wanted to remove this  item?"))
    {
      dispatch(DLT(id))
    }
    
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
        <div className="container fluid">
          <div className="row ">
            {/* <div className="details cart " key={id}>
                   
                      {" "}
                     <img src={element.imgdata} style={{width:"100px",height:"100px"}}alt="" />{" "}
                  
                    
                    <div className="box">
                      <div className="row">
                        <h6>{element.rname}</h6>
                        <span>${element.price}</span>
                      </div>
                     
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
                          </div> */}

            <div className="row">
              <div className="col-md-12 ">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>SubTotal</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getdata.map((element, id) => {
                      return (
                        <tr key={id}>
                         
                          <td>
                            <img
                              src={element.imgdata}
                              style={{ width: "100px", height: "100px",background:"#efe7e4" }}
                              alt=""
                            />
                          </td>
                          <td>{element.rname}</td>
                          <td>${element.price}</td>
                          <td>
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
                          </td>
                          <td>
                            <p>
                              $
                              {element.price * element.qnty}
                            </p>
                          </td>
                          <td>
                            <span
                              className="btn btn-dark"
                              onClick={() => dlt(element.id)}
                              style={{marginBottom:"12px"}}
                            >
                              Remove
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <img src="assets/buy-now-or-cry-later-crying.gif" alt="" className='emptycart_img' style={{width:"300px",padding:10}}  />
      )}
      <div className="total" style={{ marginRight: "50px" }}>
        <Link to="/payment">Payment</Link>
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
