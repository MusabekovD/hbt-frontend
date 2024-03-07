import {  createContext, useState } from "react";
 

export const GlobalContext =  createContext()

const GlobalContextProvider = ({children})=>{
    const [like, setLike] = useState(false)
    const [hotel, setHotel] = useState([])
 
    
    return(
        <GlobalContext.Provider value={{  like, setHotel}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider