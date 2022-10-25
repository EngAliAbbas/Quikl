import React from 'react'
import {FiUsers} from "react-icons/fi";
import {RiAdvertisementLine} from "react-icons/ri"

export default function Mainhader() {
  return (
    
    <div className='main'>
    <div className='headerMain'>
      <h2>الرئيسية</h2>
    </div>
    <div className='content'>
      
    <div className='contentParts'>
      <label>{<FiUsers />}</label>
      <span><h4>عدد المستخدمين</h4> <p>365,000</p></span>
    </div>
    <div className='contentParts'>
      <label>{<FiUsers />}</label>
      <span><h4>المستخدمين النشط</h4> <p>365,000</p></span>
    </div>
    <div className='contentParts'>
      <label>{<RiAdvertisementLine />}</label>
      <span><h4>عدد الاعلانات</h4> <p>365,000</p></span>
    </div>
    </div>
  </div>
  )
}
