import React from 'react'
import "./footer.css"

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="container-fluid footer mt-5 gap-2">
        <div className="row detail-footer p-5">

          <div className="  mt-3 col-sm-5 col-md-3">
              <h4 className='mb-3'>Customer Care</h4>
              <div className="col mb-2">
                FAQ
              </div>
              <div className="col mb-2">
                Shippings & Returns
              </div>
              <div className="col mb-2">
                Stor policy
              </div>
          </div>

          <div className=" mt-3 col-sm-5 offset-sm-2 col-md-3 offset-md-0">  
              <h4 className='mb-3'>Connect</h4>
              <div className="col mb-2">
                Instagram
              </div>
              <div className="col mb-2">
                Facebook
              </div>
              <div className="col mb-2">
                Twitter
              </div>
              <div className="col mb-2">
                Contact
              </div>
          </div>

          <div className=" mt-3 col-sm-5 col-md-3">
              <h4 className='mb-3'>The Company</h4>
              <div className="col mb-2">
                About
              </div>
              <div className="col mb-2">
                Sustainability
              </div>
              <div className="col mb-2">
                Accessbility
              </div>
              <div className="col mb-2">
                Stor Locator
              </div>            
          </div>
        </div>
        <div className="row  bottom-footer text-center ">
          <p className='pt-3'>&copy; {currentYear} by ETHKL. Powered and secured by Gautam</p>           
        </div>
      </div>
    </div>
  )
}

export default Footer