import React from 'react';
import Menu from './Menu';
import Pages from './Pages';
import Footer from './Footer';
import FooterMenu from './FooterMenu';
function App(){
    return(
        <>
            <div className='Navbar'><Menu /></div>
                <Pages />
            <Footer />
            
        </>
    )
}

export default App;