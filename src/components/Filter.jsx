import React from 'react'

const Filter = ({filter}) => {
  return (
    <div className='flex flex-wrap'>
      {filter.map((item) =>(
        <div className="w-1/3 border border-primary">
          <img src={item.thumbnail} alt={item.id}/>
          <div className="">
            <h4 className='text-3xl font-semibold text-primary'>{item.title.slice(0,13)}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Filter
