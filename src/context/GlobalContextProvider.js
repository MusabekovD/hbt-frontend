import { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    const [hotels, setHotels] = useState([])
    const [baths, setBaths] = useState([])
    const [loading, setLoading] = useState(true)
    const [likedHotels, setLikedHotels] = useState([])
    const [likedBaths, setLikedBaths] = useState([])
    const [filteredHotels, setFilteredHotels] = useState([])
    const [filteredBaths, setFilteredBaths] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        fetchHotels()
        fetchBaths()
    }, [])

    useEffect(() => {

        if (hotels.length > 0 && baths.length > 0) {

            const filteredHotelsData = hotels.filter((hotel) => {
                return searchQuery.toLowerCase() === null ? hotels : hotel.attributes.name.toLowerCase().includes(searchQuery.trim())
            })
            setFilteredHotels(filteredHotelsData)

            const filterBathsData = baths.filter((bath) => {
                return searchQuery.toLocaleLowerCase() === null ? baths : bath.attributes.name.toLocaleLowerCase().includes(searchQuery.trim())
            })
            setFilteredBaths(filterBathsData)
        }

    }, [hotels, baths, searchQuery])

    const fetchHotels = () => {
        fetch("https://hbt-backend.onrender.com/api/hotels?populate=*")
            .then(res => res.json())
            .then(data => {
                setHotels(data?.data)
                setLoading(false)
            })
    }
    const fetchBaths = () => {
        fetch("https://hbt-backend.onrender.com/api/bathrooms?populate=*")
            .then((res) => res.json())
            .then((data) => {
                setBaths(data?.data)
                setLoading(false)

            }, [baths])
    }
    return (
        <GlobalContext.Provider value={{ likedBaths, setLikedBaths, filteredBaths, filteredHotels, setSearchQuery, loading, likedHotels, setLikedHotels, }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider
export const UserContext = () => useContext(GlobalContext)