import React, { useState } from "react"
import { Card } from "react-bootstrap"

import { Link } from "react-router-dom"
import Banner from "../../components/commonBanner"
import { Itemdata } from "../Itemdata"



function Home() {
  const [data] = useState(Itemdata)

  

  // const [anchorEl, setAnchorEl] = useState(null)
  

  // const dispatch = useDispatch()
  
  return (
    <div>
      <Banner />
       <div className="section">         
      <div className="container ">
        <h2 className="text-center mt-0.5">Featured Products</h2>
        <div className="row d-flex justify-content-center align-items-center">
          {data.map((element,id) => {
            return (
              <>
                
                <Card
                  style={{ width: "285px", border: "none" }}
                  className="mx-2 mt-4 card_style"  
                  key={id}
                >
                  <Link to={`/view/${element.id}`} >
                    {" "}
                    <Card.Img
                      variant="top"
                      src={element.imgdata}
                      className="mt-3"
                      style={{ height: "256px" }}
                    />{" "}
                  </Link>

                  <Card.Body style={{ border: "1px solid #ebebeb" }}>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>${element.price}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button>
                     */}
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

export default Home
