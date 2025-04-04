import React from 'react'
import BookCard from './BookCard'
import { useLoaderData } from 'react-router-dom'

export default function CardContainer() {
    const allBooks = useLoaderData()
   
  return (
    <div className="container pb-5">
        <div className="row">
            <h1 className='text-center firfont tw-bolder py-3 mb-5'>Books</h1>
        </div>
        <div className="row">

            {
                allBooks.map((book,indx)=>{
                    return <div className="col-md-2 col-lg-4 col-12 mb-4" key={indx}>
                    <BookCard book={book}/>
                </div>
                })
            }
            
            
        </div>
    </div>
  )
}
