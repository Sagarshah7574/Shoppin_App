
import React, { useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ADD } from "../../redux/action"
import { productData } from "../Itemdata"
import "./Shop.css"
function Shop() {
  const [data, setData] = useState(productData)
  const[price,setPrice]=useState('')
  // const [isActive,setActive]=useState("")
  
 
  const dispatch = useDispatch()

  const filterItem = (item) => {
    const updatedItems = productData.filter((curElem) => {
      return curElem.category === item
    })
  
    setData(updatedItems)
  }
  const getdata = useSelector((state) => state.cartreducer.carts)

  const AddData = (prod) => {
    //  console.log(e);

    dispatch(ADD(prod))
  }
   
  const handleChange=(event) =>{
        setPrice(event.target.value)
  }
  

  return (
    <>
       <div className="section">      
      <div className="container">
        <div className="row">
          <div className=" col-12 mb-5">
            <h1 className=" display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <Button
              variant="outline-dark me-2"
              onClick={() => setData(productData)}
              className="category"
              
            >
              All
            </Button>
            <Button
              variant="outline-dark me-2"
              className="category"
              onClick={() => filterItem("men's")}
            >
              Men's
            </Button>
            <Button
              variant="outline-dark me-2"
              onClick={() => filterItem("women's")}
              className="category"
            >
              Women's
            </Button>
            <Button
              variant="outline-dark me-2"
              onClick={() => filterItem("accessories")}
              className="category"
            >
              Accessories
            </Button>
           
      
          </div>
        </div>
        </div>
      
         
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          {data.map((product) => {
            return (
              <>
               {/* <h5>1$</h5>{" "}
                   <input
                    type="range"
                    className="icontrol search-mile"
                    id="vol"
                    name="miles"
                    min="1"
                    max="100"
                    value={data.price}
                    {...register("price", {
                      onChange: (e) => {
                        handleChange(e);
                      },
                    })}
                  />{" "}
                  <h5>${data.price}</h5>  */}
                
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt-2 card_style"
                >
                  <Card.Img
                    variant="top"
                    src={product.imgdata}
                    style={{ height: "16rem", border: "1px solid #ebebeb",background:"#efe7e4" }}
                    className="mt-3"
                  />
                  <Card.Body style={{ border: "1px solid #ebebeb" }}>
                    <Card.Title>{product.rname}</Card.Title>
                    <Card.Text>Price : ${product.price}</Card.Text>

                    <div className="button_div d-flex justify-content-center">
                      {getdata.some((e) => e.id === product.id) ? (
                        <Link to="/cart">
                          {" "}
                          <Button
                            variant="dark"
                            // onClick={() => send(element)}
                            className="add_to_cart"
                          >
                            Go To Cart
                          </Button>{" "}
                        </Link>
                      ) : (
                        <Button
                          variant="dark"
                          onClick={() => AddData(product)}
                          className="add_to_cart"
                        >
                          Add To Cart
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
      
    </>
  )
}

export default Shop

//  <Mile>1 mile</Mile>{" "}
//                   <input
//                     type="range"
//                     className="icontrol search-mile"
//                     id="vol"
//                     name="miles"
//                     min="1"
//                     max="100"
//                     value={filters.miles}
//                     {...register("miles", {
//                       onChange: (e) => {
//                         handleChange(e);
//                       },
//                     })}
//                   />{" "}
//                   <Mile>{filters.miles} miles</Mile> 