import {useState,useContext, useEffect} from 'react'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'
import SortForm from '../components/SortForm'
import Tab from '../components/tab/TabBar'
import ReadBookContainer from '../components/tab/ReadBookContainer'
import { BookDataProvider } from '../BookProvider'






export default function BookList() {

  const {allBookData} = useContext(BookDataProvider)
  const [readTab,setWishTab] = useState(true)
  const [cardData,setCardData] = useState([]);
  

  const handleTab = (txt)=>{
    if(txt === "READ"){
      setWishTab(true)
    }else{
      setWishTab(false)
    }
  }

  const handleShort = (key) =>{

    // console.log(key)

    setCardData(cardData=>{
      let newData = [...cardData];
      if(key=="rating"){
        return newData.sort((a,b)=> a.rating - b.rating )
      }else if(key=="page"){
        return newData.sort((a,b)=>  b.totalPages - a.totalPages )
      }else if(key=="year"){
        return newData.sort((a,b)=>  b.yearOfPublishing - a.yearOfPublishing )
      }
    })


  }

  useEffect( ()=>{

    fetch('booksData.json')
    .then(res=>{
     
      return res.json()
    })
    .then(res=>{
     
      
      if(readTab){

        let newArr = res.filter(data=>{
          let findData =  allBookData.readBooks.find(id=>{
            return id == data.bookId
          })
          if(findData){
            return data
          }
        })
        setCardData(newArr)

      }else{
        let newArr = res.filter(data=>{
          let findData =  allBookData.wishBooks.find(id=>{
            return id == data.bookId
          })
          if(findData){
            return data
          }
        })
        setCardData(newArr)

      }

    })

  },[readTab])


  return (
    <>
       
        <PageNav />
          <div className="container">
          <h3 className='bg-light text-center fw-bold my-4 py-4 rounded'>Book</h3>
          </div>
          <div className='d-flex justify-content-center my-3'>
              <div>
                <SortForm handleShort={handleShort}/>
              </div>
          </div>
          <div className="container mb-5">
            <div className="row mb-3">
              <Tab readTab={readTab} handleTab={handleTab}/>
              <hr className='mt-3'></hr>
            
            </div>
            
            
            {/* // all card will be randered hare */}
            

            <ReadBookContainer cardData={cardData}/>
            
            



          </div>





        <Footer />
    </>
  )
}
