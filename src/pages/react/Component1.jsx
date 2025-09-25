import React from 'react'
import Component2 from './Component2'

const Component1 = ({user}) => {
  return (
    <div>
      my name is {user.name}
      <Component2 user={user} />
    </div>
  )
}

export default Component1