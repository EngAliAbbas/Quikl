import React from 'react'
import MainHeader from './MainHeader'
import '../Styles/main/main.css'
import MainContent from './MainContent'
import MainSlider from './MainSlider'
export default function main() {
  return (
    <div className='bigMain'>
      <div className='mainRight'>
        <MainHeader />
        <MainContent />
      </div>
      <div className='mainLift'>
      <MainSlider />
      </div>
      

    </div>
  )
}
