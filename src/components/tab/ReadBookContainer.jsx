import React from 'react'
import TabCard from './TabCard'

export default function ReadBookContainer({cardData}) {
  return (
    <>
      {
        cardData.map((data,indx)=>{
          return <TabCard data={data} key={indx}/>
        })
      }
        
        
    </>
  )
}
