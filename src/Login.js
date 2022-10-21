import React from 'react'
import LoginForm from './component/LoginForm'
import "./Styles/login/login.css"
import logo from './imgs/logo.png' 
import './App';
export default function Login() {
  return (
    <div className='login'>
      <div className='content'> 
      <div className='content-header'>
             <img src={logo} alt="" />
             <p>لوحة تحكم اداره كويكل</p>
        </div>  
        <div>
        
            <LoginForm />
        </div>
      </div>
      </div>
        
    
  )
}
