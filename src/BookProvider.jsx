import React,{createContext,useReducer} from 'react'

export const BookDataProvider = createContext()

function reducer(state,action){
    let newState = {...state}
    if(action.type === "ADD_READBOOK"){
        let esExist = newState.readBooks.find(data=>{
            return data == action.data
        })
        if(!esExist){
            newState.readBooks = [...newState.readBooks,action.data]
        }else{
            return state
        }
        
    }else if(action.type === "ADD_WISHBOOK"){

        let esExist = newState.wishBooks.find(data=>{
           return data == action.data
        })
        
        if(!esExist){
            newState.wishBooks = [...newState.wishBooks,action.data]
        }else{
            return state
        }
        
    }
    return newState
}


export default function BookProvider({children}) {

    const data= {
        readBooks : [1,2],
        wishBooks : [4,6,5]
    }

    const [allBookData,dispatch] = useReducer(reducer,data)


  return (
    <BookDataProvider.Provider value={{allBookData,dispatch}}>
            {
                children
            }
    </BookDataProvider.Provider>
        
   
  )
}
