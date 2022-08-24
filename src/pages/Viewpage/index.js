import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { cart } from "../../constants/routeConstant"
import { ADD, DLT } from "../../redux/action"
import { Itemdata } from "../Itemdata"
import "./Viewpage.css"

const View = () => {
  const [data, setData] = useState([])

  //  console.log(data);

  const dispatch = useDispatch()

  const { id } = useParams()

  const getdata = useSelector((state) => state.cartreducer.carts)

  const compare = () => {
    let comparedata = Itemdata.filter((e) => {
      return e.id == id
    })
    setData(comparedata)
  }

  // const isItemInCart = (id) => !!data.find((e) => e.id === id)

  const send = (e) => {
    //  console.log(e);

    dispatch(ADD(e))
  }

  const dlt = (id) => {
    dispatch(DLT(id))
  }

  useEffect(() => {
    compare()
  }, [id])

  return (
    <>          
    <div className="view">
      {data.map((element, id) => {
        return (
          <div className="details" key={element.id}>
            <div className="big_img">
              <img src={element.imgdata} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{element.rname}</h2>
                <span>
                  <h5>${element.price}</h5>
                </span>
              </div>
              <p>{element.type}</p>
              <p>{element.somedata}</p>

              {getdata.some((e) => e.id == element.id) ? (
                <Link to="/cart">
                  {" "}
                  <Button
                    variant="dark"
                    style={{ width: "230px" }}
                    // onClick={() => send(element)}
                    key={id}
                  >
                    Go To Cart
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="dark"
                  style={{ width: "230px" }}
                  onClick={() => send(element)}
                  key={id}
                >
                  Add To Cart
                </Button>
              )}
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}
export default View
