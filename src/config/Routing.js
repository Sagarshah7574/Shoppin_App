import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { cancel, cart, home, payment, shop, success, view } from '../constants/routeConstant'
import Layout from '../components/Layout'
import Cart from '../pages/Cart/Cart'
import Home from '../pages/Homepage'
import Shop from '../pages/Shoppage'
import View from '../pages/Viewpage'
import PageNotFound from '../pages/PageNotFound'
import Payment from '../Payment/Payment'
import Cancel from '../Payment/Cancel'
import Success from '../Payment/Success'

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
                      <Route path={cancel} element={<Cancel/>}/>
                      <Route path={success} element={<Success/>}/>
                      {/* NotFound Error page */}
                      <Route path="*" element={<PageNotFound/>} />

               </Routes>
            </Layout>
        </Router>
     </div>
  )
}

export default Routing