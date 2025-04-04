import React from 'react'
import bannerImg from "./banner.png"
import "./banner.css"

export default function Banner() {
  return (
    <div className='container-sm'>
        <div className="row">
            <div className="card bg-light my-5">
              <div className="card-body">
                  <div className="bannerBody">
                    <div className="bannerleft">
                        <h2 className='fw-bolder firfont'>Books to freshen up <br></br>your bookshelf</h2>
                        <button className='btn btn-primary fw-semibold text-white'>View The List</button>
                    </div>
                    <div className="bannerRight">
                        <img src={bannerImg} alt="" />
                    </div>
                  </div>
                  
              
                
              </div>
            </div>
        </div>
    </div>
  )
}
