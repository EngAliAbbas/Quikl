import React from 'react'
import img from '../imgs/profile.jpeg'
import {MdMoreHoriz} from 'react-icons/md'
import {FiUsers} from "react-icons/fi";
import {BsTrash} from 'react-icons/bs'

export default function UserLeft() {
  return (
    <div className='userLeft'>
   <div className='userInfo' >
      <div className='userLeftHeader'>
      <img src={img} alt=""/>
        <span ><MdMoreHoriz /></span>
        <button> حذف المستخدم  <BsTrash /> </button>
      </div>
        <div className='userLeftDetails'>
          <label> <p>الاسم : <span>Ali Abbas</span></p> <button>تعديل</button></label>
          <label> <p>النوع : <span>ذكر</span></p> <button>تعديل</button></label>
          <label> <p>الرقم التسلسلي : <span>41810228</span></p> <button>تعديل</button></label>
          <label> <p>رقم التليفون : <span>01098535816</span></p> <button>تعديل</button></label>
          <label> <p>العنوان : <span>القاهره</span></p> <button>تعديل</button></label>
          <label> <p>الاعلانات : <span>5</span></p> <button>تعديل</button></label>

        </div>
      </div>


      <div className='userFooter'>
      <div className='contentParts'>
      <label>{<FiUsers />}</label>
      <span><h4>عدد المستخدمين</h4> <p>365,000</p></span>
    </div>
    <div className='contentParts'>
      <label>{<FiUsers />}</label>
      <span><h4>المستخدمين النشط</h4> <p>365,000</p></span>
    </div>
      </div>
    </div>
  )
}
