import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from './../components/ApiData';
import Container from "../components/Container"
import Filter from '../components/Filter';
const Shop = () => {
  let {data} = useContext(ApiContext)
  let [category, setCategory] = useState([])
  let [filter, setFilter] = useState([])
  useEffect(()=>{
    setCategory([...new Set(data.map((item)=> item.category))])
  },[data])

  let handleCategory = (cItem)=>{
    let filterItem = data.filter(((item)=>item.category === cItem))
    setFilter(filterItem)
  }
  return (
    <div>
      <Container className="flex gap-5">
        <div className="w-1/4">
        <div className="bg-white rounded-2xl p-5 h-[calc(100vh-120px)] overflow-y-auto sticky top-24">
          <h3 className='text-xl font-semibold mb-5'>Filter by category</h3>
          <div className="space-y-2">
            <ul>
              <li></li>
            {category.map((item)=>(
              <li className='cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition' key={item} onClick={()=>handleCategory(item)}>{item}</li>
            ))}
            </ul>
          </div>
        </div>
        </div>
        <div className="w-3/4">
        <Filter/>
        </div>
      </Container>
    </div>
  )
}

export default Shop
