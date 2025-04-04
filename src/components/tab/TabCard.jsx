import React from 'react'

import { TfiLocationPin } from "react-icons/tfi";
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";

export default function TabCard({data}) {
  return (
    <div className="card mb-3">
              <div className="card-body">
              <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 bg-light d-flex justify-content-center align-items-center">
                <img src={data.image} className='img-fluid p-3' style={{height:"200px"}} alt="" />
              </div>
              <div className="col-12 col-sm-6 col-md-8 col-lg-9 ">
                  <div className='ps-2'>
                    <h1 className='firfont'>{data.bookName}</h1>
                    <p>By : {data.author} </p>
                    <p className='mt-3'>
                      <span className='fw-bold '>Tag</span>
                      <span className='bg-secondary-subtle px-4 py-1 rounded-pill ms-3 text-primary'>#{data.tags[0]}</span>
                      <span className='bg-secondary-subtle px-4 py-1 rounded-pill ms-3 text-primary'>#{data.tags[1]}</span>
                      <span className='ms-3'>
                      <TfiLocationPin  className='mx-1'/>
                        Year Of  Publish: {data.yearOfPublishing}</span>
                    </p>
                    <p className='mt-3'>
                      <span className='me-4'>
                      <GoPeople className='mx-1'/> Publisher: {data.publisher} 
                      </span>
                      <span>
                      <MdOutlineContactPage className='mx-1'/> Page: {data.totalPages}
                      </span>
                    </p>
                    <hr />
                    <button style={{background:"#dde7ea"}} className='btn  border-none rounded-pill me-3 px-5 py-1 text-primary'>Catagory: {data.category}</button>
                    <button style={{background:"#FFAC3326",color:"yellow"}} className='btn  border-none rounded-pill me-3 px-5 py-1'>Rating: {data.rating}</button>
                    <button style={{background:"#dde7ea"}} className='btn bg-primary text-white border-none rounded-pill px-5 py-1'>View Detail</button>

                  </div>
              </div>
            </div>
              </div>
            </div>
  )
}
