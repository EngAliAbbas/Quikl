import React from 'react'
import img from '../imgs/logo.png'
import '../Styles/notFound/notFound.css'
export default function NotFound() {
  return (
    <div className='notFound'>
        <div>
        <h1>404</h1>
        <p>.There isn't a Quikl Pages site here</p>
        </div>
        <img src={img} alt=""/>

    </div>
  )
}
