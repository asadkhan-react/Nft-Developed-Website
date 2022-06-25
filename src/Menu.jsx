import React from 'react';
import {NavLink} from 'react-router-dom';
function Menu(){
    return(
        <>

{/* Menu Bootstrap Start */}

            <nav class="navbar p-0 navbar-expand-lg bg-light">
                <div class="navbar-main-div container-fluid p-0 ">
                    <button class="navbar-toggler mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse mobile-collapse justify-content-center w-50  mt-4 navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mobile-collapse-ul mt-2 gap-5   mb-2 mb-lg-0   ">
                            <li class="nav-item ">
                            <NavLink exact className='nav-link mobile-collapse-ul-li text-white' activeClassName='active_class' to='/'> Home </NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink exact className='nav-link mobile-collapse-ul-li text-white' activeClassName='active_class' to='/gallery'>  Gallery    </NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink exact className='nav-link mobile-collapse-ul-li text-white' activeClassName='active_class' to='/nft'>  NFT  </NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink exact className='nav-link mobile-collapse-ul-li text-white' activeClassName='active_class' to='/store'> Store </NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink exact className='nav-link mobile-collapse-ul-li text-white' activeClassName='active_class' to='/pdf'>  PDF  </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

{/* Menu Bootstrap End */}
        </>
    )
}
export default Menu;