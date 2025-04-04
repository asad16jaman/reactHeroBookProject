import React,{useContext} from 'react'
import { useLoaderData } from 'react-router-dom';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import "./bookdetail.css"
import { BookDataProvider } from '../BookProvider';
import { ToastContainer,toast } from 'react-toastify';



export default function BookDetail() {
    let book = useLoaderData()
    const {dispatch} = useContext(BookDataProvider)

    const handleReadBook = (id)=>{
        toast.success('Successfully add to readList')
        dispatch({
            type:"ADD_READBOOK",
            data:id
        })
    }

    const handleWishBook = (id)=>{
        toast.success('Successfully add to WishList')
        dispatch({
            type:"ADD_WISHBOOK",
            data:id
        })
    }
   
  return (
    <>
        <PageNav />
            <ToastContainer />
            <div className="container">
                <div className="row my-5 ">
                    <div className="col-12 col-md-6 bg-light d-flex justify-content-center rounded align-items-center p-3">
                        <img src={book.image} className='img-fluid' style={{height:"500px",objectFit:"cover"}} alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className='ms-5'>
                            <h1 className='firfont fw-bolder'>{book.bookName}</h1>
                            <p className='fw-semibold '>By:{book.author}</p>
                            <hr />
                            <p className='fw-semibold'>{book.category}</p>
                            <hr />
                            <div className="review">
                                <p>
                                    <span className='fw-bold'>Reivew : </span>{book.review}
                                </p>
                                <p>
                                    <span  className='fw-bold'>Tags : </span> <button className='btn btn-light px-5 py-1 rounded-pill mx-3  text-primary'>#{book.tags[0]}</button><button className='btn btn-light px-5 py-1 rounded-pill text-primary'>#{book.tags[1]}</button>
                                </p>
                            </div>
                            <hr />
                            <div>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Number Of Page</td>
                                        <td>{book.totalPages}</td>
                                    </tr>
                                    <tr>
                                        <td>Publisher</td>
                                        <td>{book.publisher}</td>
                                    </tr>
                                    <tr>
                                        <td>Year Of Publish</td>
                                        <td>{book.yearOfPublishing}</td>
                                    </tr>
                                    <tr>
                                        <td>Rating</td>
                                        <td>{book.rating}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='mt-4'>
                                <button onClick={handleReadBook.bind(this,book.bookId)} className='btn btn-outline-primary me-3'>Read</button>
                                <button onClick={handleWishBook.bind(this,book.bookId)} className='btn btn-primary'>WishList</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        <Footer />
    </>
  )
}

export async function BookDetailLoader({params}){
    let allData = await fetch('booksData.json');
    let books  = await allData.json();
    return books.find(book=>{
        return book.bookId == params.bookId
    })
    
}
