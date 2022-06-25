import React from 'react';
import {NavLink} from 'react-router-dom';
import Pages from './Pages';
function FooterMenu(){
    return(
        <>                   
            <NavLink exact className='nav-link text-white' activeClassName='active_class' to='/'> Home </NavLink>
            <NavLink exact className='nav-link text-white' activeClassName='active_class' to='/gallery'>  Gallery    </NavLink>
            <NavLink exact className='nav-link text-white' activeClassName='active_class' to='/nft'>  NFT  </NavLink>
            <NavLink exact className='nav-link text-white' activeClassName='active_class' to='/store'> Store </NavLink>
            <NavLink exact className='nav-link text-white' activeClassName='active_class' to='/pdf'>  PDF  </NavLink>
        </>
    )
}

export default FooterMenu;