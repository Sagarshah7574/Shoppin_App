import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>  
    <section>                            
    <div className="footer mt-1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            
             <div className="logo">
              <img src="https://res.cloudinary.com/dsmlde0pv/image/upload/v1659070200/cart_ambnx1.jpg"
               width="30"
              height="30"
              className="d-inline-block align-top mt-1"
              alt="React Bootstrap logo"/>
              <span  style={{fontSize:"30px",margin: "5px"}} >Elite</span> <span  style={{fontSize:"30px"}}>Shoppy</span>
            </div>
          </div>
           <div className="col-md-12">
            <div className="footer-menu">
              <ul>
                <li>Home</li>
                <li>Help</li>
                <li>Privacy Policy</li>
                <li>How It Works?</li>
                <li>Contact Us</li>
              </ul>
            </div>
           </div>
           <div className="col-md-12">
            <div className="social-icons">
              <ul>
                <li><FacebookIcon/></li>
                <li><TwitterIcon/></li>
                <li><LinkedInIcon/></li>
                <li><InstagramIcon/></li>
              </ul>
            </div>

           </div>
        </div>
      </div>
       
    </div>
    
    {/* sub footer */}

    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright-text">
              <p><strong> ©2022 Elite shoppy.All rights reserved</strong></p>
            </div>
          </div>
          </div>
        </div>
      </div>
      </section>
    </>
    
    
  )
}

export default Footer