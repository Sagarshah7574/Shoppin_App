import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { cart, home, payment, shop, view } from '../constants/routeConstant'
import Layout from '../components/Layout'
import Cart from '../pages/Cart/Cart'
import Home from '../pages/Homepage'
import Shop from '../pages/Shoppage'
import View from '../pages/Viewpage'
import PageNotFound from '../pages/PageNotFound'
import Payment from '../pages/Payment'

function Routing() {
  return (
     <div>
        <Router>
            <Layout>
               <Routes>
                      <Route path={home} exact element={<Home/>}/>
                      <Route path={shop}   element={<Shop/>}/>
                      <Route path={cart}   element={<Cart/>}/>
                      <Route path={`${view}/:id`}  element={<View/>}/>
                      <Route path={payment}  element={<Payment/>}/>
                      {/* NotFound Error page */}
                      <Route path="*" element={<PageNotFound/>} />

               </Routes>
            </Layout>
        </Router>
     </div>
  )
}

export default Routing