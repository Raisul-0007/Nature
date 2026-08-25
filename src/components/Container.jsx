import React from 'react'

const Container = ({children, clasName}) => {
  return (
    <div className={`max-w-7xl mx-auto ${clasName}`}>
      {children}
    </div>
  )
}

export default Container
