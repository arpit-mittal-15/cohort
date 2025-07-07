import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div class={{ "border": "2px solid black", "margin": "20px" }}>
      {children}
    </div>
  )
}

export default Wrapper