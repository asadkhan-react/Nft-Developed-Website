import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home_Page from './Home_Page';
import Gallery from './Gallery';
import NFT from './NFT';
import Contact_Page from './Contact_Page';
import PDF from './PDF';
import Store from './Store'
function Pages(){
    return(
        <>
            <Switch>
                <Route exact path='/' component={Home_Page} />
                <Route exact path='/gallery' component={Gallery} />
                <Route exact path='/nft' component={NFT} />
                <Route exact path='/contact' component={Contact_Page} />
                <Route exact path='/pdf' component={PDF} />
                <Route exact path='/store' component={Store} />
            </Switch>
        </>
    )
}

export default Pages;