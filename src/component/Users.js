import React from 'react'
import UserLeft from './UserLeft'
import UserRight from './UserRight'
import '../Styles/users/users.css'
export default function Users() {
  return (
    <div className='users'>
      <div className='usersRight'>
        <UserRight />
      </div>

      <div className='usersLeft'>
      <UserLeft />
      </div>
    </div>
  )
}
