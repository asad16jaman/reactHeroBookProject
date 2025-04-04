import React from 'react'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'
import Ch from '../components/Bar/Ch'

export default function ReadBooks() {
  return (
    <>
        <PageNav />

          <div className="d-flex justify-content-center my-5">
          <Ch />
          </div>

        <Footer />
    </>
  )
}
