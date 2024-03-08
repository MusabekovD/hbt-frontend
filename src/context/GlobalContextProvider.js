import { createContext, useContext, useEffect, useState } from "react";


export const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    const [hotels, setHotels] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchHotelsQuery, setSearchHotelsQuery] = useState("")
    const [searchHotelsResult, setSearchHotelsResult] = useState([])

    useEffect(() => {
        fetch("https://hbt-backend.onrender.com/api/hotels?populate=*")
            .then(res => res.json())
            .then(data => {
                setHotels(data?.data)
                setLoading(false)
            })
    }, [hotels])

    const filteredSearchData = hotels.filter((item) => {
        return searchHotelsQuery.toLocaleLowerCase() === null  ? hotels : item.attributes.name.toLowerCase().includes(searchHotelsQuery.trim().toLocaleLowerCase())
    }
    )



    return (
        <GlobalContext.Provider value={{ setSearchHotelsQuery, filteredSearchData,loading }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider
export const UserContext = () => useContext(GlobalContext)