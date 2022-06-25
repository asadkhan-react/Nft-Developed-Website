import React, { useState } from 'react';
import SliderData from './SliderData';
import {FaArrowCircleRight , FaArrowCircleLeft,  } from 'react-icons/fa';

function Slider(slides){

    const [current, setCurrent] = useState(0);
    const length =  slides.sliderLength.length;
  
    function nextSlide(){
        setCurrent( current === length - 1 ? 0 : current + 1);
    }

    function prevSlide(){
        setCurrent( current === 0 ? length - 1 : current - 1);
    }
    
    return(
        <>
        <section className='slider d-flex justify-content-center align-items-center'>
            <FaArrowCircleLeft className='text-white position-absolute start-0 bg-danger left-arrow' onClick={prevSlide}/>
            <FaArrowCircleRight className='text-white position-absolute end-0  bg-danger right-arrow' onClick={nextSlide}/>
            {SliderData.map(function(slider , index){
                return(
                    <div className={ index ===  current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <img width="956px" height="527.24px" src={slider.image} />
                    )}   
                    </div>
                )
            })}
        </section>
        
        </>
    )
}

export default Slider;