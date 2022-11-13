import React, {  useState } from 'react'
import img from '../imgs/profile.jpeg'
import {MdMoreHoriz} from 'react-icons/md'
import {FiUsers} from "react-icons/fi";
import {MdClose} from "react-icons/md";
import {BsTrash} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAppear, popDeleteClose, popDeleteOpen, popEditClose, popEditOpen} from '../redux/logoutslice';

export default function UserLeft() {
  const  [nameEdit , setName] = useState("");
  
  const {del,popEdit,popDelete} = useSelector((state)=> state.logout);
  const dispatch = useDispatch();
  const handelDel=()=>{
    dispatch(deleteAppear())
  }
  const handleEdit=(e)=>{
    let id =e.target.id ;
     let  element = document.getElementById(id).previousElementSibling;
    setName(`تعديل ${element.innerHTML}`);
    dispatch(popEditOpen());
  }
  const handelCloseDeleteUser=()=>{
    if(popDelete===false){
      dispatch(popDeleteClose())
    }
  }
  const handlApperDeleteUser=()=>{
    if(popDelete === true){
      dispatch(popDeleteOpen())
    }
  }
  const handleClosePop=()=>{
    if(popEdit===false){
      dispatch(popEditClose());
      const x = document.getElementById('editInpText');
      x.value="";
    }
  }
  
  return (
    <div className='userLeft'>
   <div className='userInfo'>
      <div className='userLeftHeader'>
      <img src={img} alt=""/>
        <span  ><MdMoreHoriz onClick={handelDel} /></span>
        <button className={del ? 'delActive': 'delNotActive'} onClick={handlApperDeleteUser}> حذف المستخدم  <BsTrash /> </button>
      </div>
        <div className='userLeftDetails'>
          <label> <p>الاسم : </p> <button onClick={handleEdit} id='name'>تعديل</button> <span>Ali Abbas</span> </label>
          <label> <p>النوع : </p> <button onClick={handleEdit} id='gender'>تعديل</button> <span>ذكر</span> </label>
          <label> <p>الرقم التسلسلي : </p> <button onClick={handleEdit} id='userId'>تعديل</button> <span>41810228</span> </label>
          <label> <p>رقم التليفون : </p> <button onClick={handleEdit} id='phone'>تعديل</button> <span>01098535816</span></label>
          <label> <p>العنوان : </p> <button onClick={handleEdit} id='address'>تعديل</button><span>القاهره</span></label>
          <label> <p>الاعلانات : </p> <button onClick={handleEdit} id='ads'>تعديل</button> <span>5</span> </label>

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
      
      <div className={popEdit ? 'popClose' : 'popOpen'}>
          <form>
            <label onClick={handleClosePop}><MdClose /></label>
            <div className='formPop'>
            <span>{nameEdit}</span>
            <input type={'text'} id='editInpText' />
            <input type={'submit'} value="تعديل" />
            </div>
            
          </form>
        </div>
        <div className={popDelete? 'popDeleteClose' : 'popDeleteOpen'}>
            <div>
              <span>هذا الحذف سوف يحذف المستخدم نهائيا,هل انت متاكد من الحذف ؟</span>
              <label onClick={handelCloseDeleteUser}><MdClose /></label>
              <div className='buttons'><button className='finalDelete'>حذف المستخدم</button>
              <button className='cancel' onClick={handelCloseDeleteUser} >الغاء</button></div>
            </div>
        </div>
        
    </div>
  )
}
