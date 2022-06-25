import React from 'react';
import angel from './angel.png';
import devil from './devil.png';

function Hero(){
    return(
        <>
        <section className='main_heading text-white'>
            <div className='Header_logo mt-3 '>
                <h1 className='text-center '>NFT LOGO.</h1>
            </div>

            <div className='HeroSection container-fluid pb-5 '>
                <div className='row d-flex justify-content-evenly align-items-center' >

                    <div className='hero-section-content px-4 col-md-4 col-lg-4 col-xxl-4 col-10 '>
                        <h1 className='lh-base'>Get Your Devil & Angel NFT</h1>
                        <button className='btn btn-danger fs-5 py-3 border border-white '>Buy NFT</button>
                    </div>

                    <div className='secondgroup col-md-4 col-lg-4 col-xxl-4 col-10 '>
                        <figure className=''>
                        <img className='mx-5 imgone bg-transparent img-fluid' src={devil} alt="Girl in a jacket" />
                        </figure>
                    </div>

                    <div className=' bg-transparent secondgroup col-md-4 col-lg-4 col-xxl-4 col-10 '>
                        <figure className=''>
                            <img className='imgtwo  img-fluid' src={angel} alt="Girl in a jacket" />
                        </figure>
                    </div>
                     
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;