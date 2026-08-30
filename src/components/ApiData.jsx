import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ApiContext = createContext()
const ApiData = ({children}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const fetch = async()=>{
        try{
            setLoading(true)
            const response = await axios.get("https://dummyjson.com/products?&limit=0")
            setData(response.data.products)
        }catch{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetch()
    },[])
  return (
    <ApiContext.Provider value={{data, loading}}>
        {children}
    </ApiContext.Provider>
  )
}

export default ApiData
