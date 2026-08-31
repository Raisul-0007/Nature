import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ApiContext = createContext()
const ApiData = ({children}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const Apifetch = async()=>{
        try{
            setLoading(true)
            const response = await axios.get("https://dummyjson.com/products?&limit=0")
            setData(response.data.products)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        Apifetch()
    },[])
  return (
    <ApiContext.Provider value={{data, loading}}>
        {children}
    </ApiContext.Provider>
  )
}

export default ApiData
