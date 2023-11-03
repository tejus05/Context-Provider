import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext);
  if(!user) return <p>Please Login</p>

  return <p>Welcome { user.username}! {user.password} {user.password1} </p>
}

export default Profile
