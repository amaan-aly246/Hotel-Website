import { React, createContext, useState, useEffect } from "react"
import { fetchAllRoomsFunc } from "../functions/fetchAllRoomsFunc"

// create context
const RoomInfoContext = createContext(null)

export const RoomInfoProvider = ({ children }) => {
  const [bookingSummaryComponent, setBookingSummaryComponent] = useState([])
  const [roomsData, setRoomsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [totalAmount, setTotalAmount] = useState(0)
 const [price, setPrice] = useState(0);
 
  useEffect(() => {
    const fetchData = async () => {
      const rooms = await fetchAllRoomsFunc()
      setRoomsData(rooms)
      setIsLoading(false)
    }

    fetchData()
  }, [])
  return (
    <RoomInfoContext.Provider
      value={{
        bookingSummaryComponent,
        setBookingSummaryComponent,
        isLoading,
        setIsLoading,
        roomsData,
        setRoomsData,
        totalAmount,
        setTotalAmount,
        price,
      }}>
      {children}
    </RoomInfoContext.Provider>
  )
}

export default RoomInfoContext
