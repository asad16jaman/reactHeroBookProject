import React from 'react'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'
import Banner from '../components/Banner/Banner'
import CardContainer from '../components/homeCard/CardContainer'


export default function Home() {

  
 

  return (
    
      <>
     
        <PageNav />
        <Banner />
        <CardContainer />
        <Footer />
    
    
    </>
  )
}




export async function BookLoader(){
   let books = await fetch('booksData.json');
   let book = await books.json();
   return book
   
}
