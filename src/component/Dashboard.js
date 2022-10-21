import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionTwo } from '../redux/logoutslice'
import Header from './Header'
import Navbar from './Nav'

export default function Dashboard() {
  const {Bar} = useSelector((state)=> state.logout)
  const dispatch= useDispatch()
  const handelBar =()=> {
    if(Bar===false){
    dispatch(ActionTwo());
    }
}
  
  return (
    <div className='dashboard' onClick={handelBar}>
      <Header />
      <Navbar />
     
    </div>
  )
}
