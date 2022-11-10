import React from 'react'
import Pic from '../imgs/profile.jpeg';
import {  BsFillCircleFill } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";

import { ProgressBar } from 'react-bootstrap';

export default function MainSlider() {
  return (
    <div className='mainSlider' >
        <div>
            <h3>تقيم التطبيق</h3>
        </div>
        <div className='sliderContent'>
             <div>
                    <div className='sliderHeader'>
                        <div className='rateNum'>
                        <span>اجمال عدد التقيمات</span>
                        <p>12,000</p>
                        </div>
                    <ProgressBar>
                      <ProgressBar variant="success" now={70} key={1} />
                      <ProgressBar variant="warning" now={20} key={2} />
                      <ProgressBar variant="danger" now={10} key={3} />
                    </ProgressBar>
                        <div className='rateText'><label><span className='spanOne'><BsFillCircleFill /> </span> جديد جدا </label><label><span className='spanTwo'><BsFillCircleFill /></span>جديد </label><label><span className='spanThree'><BsFillCircleFill /></span>سئ </label></div>
                    </div>

            </div>
            <div className='sliderFooter'>
              <h4>تعليقات</h4>
              <div className='sliderComment'>
                 
                <div className='commentInfo'><img src={Pic} alt="" /><div><h5>Ali Abbas </h5> <p>التعليق</p></div></div> 
                <div className='commentIcon'><BiLeftArrowAlt /></div>

              </div>
              <div className='sliderComment'>
                 
                <div className='commentInfo'><img src={Pic} alt="" /><div><h5>Ali Abbas </h5> <p>التعليق</p></div></div> 
                <div className='commentIcon'><BiLeftArrowAlt /></div>

              </div>
              <div className='sliderComment'>
                 
                <div className='commentInfo'><img src={Pic} alt="" /><div><h5>Ali Abbas </h5> <p>التعليق</p></div></div> 
                <div className='commentIcon'><BiLeftArrowAlt /></div>

              </div>
            </div>
        </div>
    </div>
  )
}
