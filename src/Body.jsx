import React, { useState } from 'react';
import game from './game.jpg';
import Slider from './Slider';
import SliderData from './SliderData';

function Body(){

    return(
        <>         

        <div className='bodyfirst body-headings  d-flex flex-column align-items-center'>
            <h1 className='mt-5 text-white'>War Between Angels & Devils</h1>
            <iframe className='' width="956px" height="527.24px" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
        
        <div className='container body-second-container'>
             <div className='row bodysecond justify-content-evenly '>
                <div className='ms-4 bodysecond-img col-lg-6 col-md-6 col-12 col-xxl-6 '>
                    <img className='h-100 img-fluid' src={game} />
                </div>

                <div className='p-0 body-headings col-lg-4 col-md-4 col-12 col-xxl-4 text-white '>
                    <h1 className='body-heading mb-4'>War Between Angels & Devils</h1>
                    <p className='body-paragraph mb-4'>Be prepared to catch the escaping robbers, shoot and fight all with all Miami criminals in this lucifer devil angel superhero game. Are you ready for an ultimate evil crime adventure like crazy devil angels, racing on the streets, and shooting thugs of Vegas city.</p>
                    <button className='mt-3 mb-5 btn btn-danger fs-6 py-2 w-25 border border-white'>Buy NFT</button>
                </div>
            </div>
        </div>

        <div className='bodythird body-headings d-flex flex-column text-white'>
            <h1 className='mt-4 mb-5'>War Between Angels & Devils</h1>
            <Slider sliderLength={SliderData}/>                        
        </div>
        </>
    )
}

export default Body;