import React from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi'
import pic from '../imgs/profile.jpeg';

export default function UserRight() {
  return (
    <div className='users-Right'>
        <div className='div'>
            <h3>المستخدمين</h3>
            <div className='usersContent'>
            <form>
                <div className='inputs'><span>بحث برقم التليفون </span> <input type={'text'} /> </div>
                <div className='inputs'><span>بحث بالاسم </span> <input type={'text'} /> </div>
                <div className='submitIn'><input type={'submit'} value='بحث' /> </div>
            </form>
            <label>عدد المستخدمين <span>263,000</span></label>
           <div className='resultBig'> <div className='resultDiv' >
                <div className='resultBar'>
                    <p>الصورة</p>
                    <p>الاسم</p>
                    <p>رقم التليفون</p>
                    <p>id</p>
                    <p>البريد الالكتروني</p>
                </div>
                
            </div>
            <div className='resultContainer'>
            <div className='theResult'>
                <img src={pic} alt=''/>
                <p>Ali Abbas</p>
                <p>01098535816</p>
                <p>41810228</p>
                <p>aliabbas@gmail.com</p>
                <span><BiLeftArrowAlt /></span>

            </div>
            <div className='theResult'>
                <img src={pic} alt=''/>
                <p>Ali Abbas</p>
                <p>01098535816</p>
                <p>41810228</p>
                <p>aliabbas@gmail.com</p>
                <span><BiLeftArrowAlt /></span>

            </div>
            <div className='theResult'>
                <img src={pic} alt=''/>
                <p>Ali Abbas</p>
                <p>01098535816</p>
                <p>41810228</p>
                <p>aliabbas@gmail.com</p>
                <span><BiLeftArrowAlt /></span>

            </div>
            </div>
            </div>
        </div> 

        </div>
    </div>
  )
}
