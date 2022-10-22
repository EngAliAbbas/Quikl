import img from'../imgs/logo.png'
import profilePic from '../imgs/KXUSE8005.JPG'
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import '../Styles/header/header.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ActionOne } from '../redux/logoutslice';

export default function  Header() {
  const {Bar} = useSelector((state)=> state.logout)
  const route = useNavigate();
  const dispatch = useDispatch();
  
  
  const handelBar =()=> {
    dispatch(ActionOne());
  }    

const handelLog =()=>{
  if(Bar===false){
    route('/Quil-dashboard-under-development');
  }
}

//
  return (
    <div className='header' >
        <div className='logo'>
        <img src={img} alt=""/>
       </div>
       
       <div className='userInfo'>
        <span>99</span>
       <IoNotificationsOutline  className='notifi'/>
       <p>اشعارات</p>
       <IoChevronDownCircleOutline className='logout' onClick={handelBar}/>
       <button className={Bar ? 'Active' : 'notActive' } onClick={handelLog}>Logout</button>
       <p>Ali Abbas</p>
       <img src={profilePic} alt="" width= '80px' height='80px'/>  
       </div>
     
       
    </div>
  )
}

//BsChevronDown