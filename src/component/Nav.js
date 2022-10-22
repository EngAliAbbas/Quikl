import React, { useLayoutEffect } from 'react'
import { NavLink, Outlet, useLocation  } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { HiSpeakerphone } from "react-icons/hi";
import { MdNotificationsActive} from "react-icons/md";
import { FaEnvelopeOpenText} from "react-icons/fa";
import { FcManager} from "react-icons/fc";
import '../Styles/nav/nav.css'


export default function Nav() {

  
  const location = useLocation();
  
  useLayoutEffect(()=>{
    let list = document.querySelectorAll("a");
    if(location.pathname !== "/"){
      list[0].classList.remove("active");
    }
    list.forEach(function (e) {
      e.onclick = function(){
        list.forEach(function (e){
          e.classList.remove("active");
        });
        e.classList.add("active");
      };
    })

  },)
  
  return (
    <div className='navContent'>
    <div className='nav'>
      
      <nav>
        <NavLink  to=""><AiFillHome className='icon' />الرئيسيه </NavLink>
        <NavLink to="users"><HiUsers className='icon' />المستخدمين</NavLink>
        <NavLink to="ads"><HiSpeakerphone className='icon' />الاعلانات</NavLink>
        <NavLink to="notification"><MdNotificationsActive className='icon' />الاشعارات</NavLink>
        <NavLink to="complaints"> <FaEnvelopeOpenText className='icon' / >شكاوي ومقترحات</NavLink>
        


      </nav>
      <NavLink to="administration"><FcManager className='icon' />الاداره</NavLink>

      
    </div>
    
    <Outlet />
    
    </div>
  )
}
