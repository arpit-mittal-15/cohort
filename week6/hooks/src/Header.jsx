import React from 'react'

const Header = React.memo(({ title }) => {
  return (
    <div>
      {title}
    </div>
  )
})

export default Header   