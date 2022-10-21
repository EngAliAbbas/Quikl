import React from 'react'
import "../Styles/loginform/loginForm.css";
import { useNavigate } from 'react-router-dom';
export default function LoginForm() {
  const  route =  useNavigate()
 const handlClick=(e)=>{
  e.preventDefault() ;
  route('dashboard') ;
 }
  return (
    <div className='loginForm'>
        <div className='validity'>
            <span>حدد ما هي صلاحياتك</span>
            <label><input type={'radio'} name ="validity"  checked="checked"/><p>فريق عمل</p></label>
            <label><input type={'radio'} name="validity" checked="checked"/><p>الادارة</p></label>
        </div>
       
       
        <form onSubmit={handlClick}>
             <label><span>رقمك الوظيفي</span></label> 
             <br/>
             <input type={'text'} />
             <br/>
             <label> <span>كلمة المرور</span> </label>
             <br/>
             <input type={'password'}/>
             <br/>
             <input type={'submit'} value="دخول" />
             <p>اذا فقدت أيا من رقمك الوظيفي او كلمه المرور قم بإبلاغ الاداره</p>

        </form>       
    </div>
    
  )
}
