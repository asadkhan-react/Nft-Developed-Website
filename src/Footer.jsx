import React from 'react';
import FooterMenu from './FooterMenu';

function Footer(){
    return(
        <>
    <div className='mt-5 '>
        <span className='invisible'>This is Spacer. I created to get my own margin from top</span>
        <div className='container mt-5'>
            <div className='row footer-upper-container align-items-center px-5 mx-5 text-white'>
                <div className='upper-child d-flex justify-content-start col-md-6 col-lg-6 col-12'>
                    <h5 className=''>nftcompany@gmail.com</h5>
                </div>
                <div className='d-flex upper-child justify-content-end col-md-6 col-lg-6 col-12'>
                    <a href="#" class="fa fa-facebook text-white"></a>
                    <a href="#" class="fa fa-twitter text-white"></a>
                    <a href="#" class="fa fa-instagram text-white"></a>
                    <a href="#" class="fa fa-linkedin text-white"></a>
                    <a href="#" class="fa fa-youtube text-white"></a>
                    <a href="#" class="fa fa-pinterest text-white"></a>
                </div>
            </div>

            <div className='row footer-second mt-4 mb-4 border-bottom border-top py-4 border-white justify-content-center'>
                <div className='col-md-4 col-lg-4 col-10 text-white'>
                    <h2>NFT LOGO</h2>
                    <p className='footer-paragraph'>Be prepared to catch the escaping robbers, shoot and fight all with all Miami criminals in this lucifer devil angel superhero game. Are you ready for an ultimate evil crime adventure like crazy devil angels, racing on the streets, and shooting thugs of Vegas city.</p>
                </div>
                <div className='footer-third justify-content-evenly'>
                    <div className=' px-5 footer-third-section w-25 col-md-4 col-lg-4 col-10 text-white'>
                        <h5>Pages</h5>
                        <div class=" mt-4 d-grid gap-2 mb-4">                        
                                <FooterMenu />  
                        </div>
                    </div>
                    <div className=' px-5 w-25 footer-third-section col-md-4 col-lg-4 col-10 text-white'>
                        <h5>Legal Pages</h5>
                            <div class="d-grid gap-2 mt-4 mb-4">
                                <FooterMenu />
                            </div>
                    </div>
                </div>
                <div className='text-white mt-2 text-center bottom copyright'>
                <h6>Copyright All rights reserved by @nftcompany.com | Created by 2022   </h6>
                </div>
            </div>


        </div>
    </div>
        </>
    )
}

export default Footer;