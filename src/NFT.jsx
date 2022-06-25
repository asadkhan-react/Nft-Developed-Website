import React , {useState} from 'react';
import First_Filter_NFT from './First_Filter_NFT';
import Second_Filter_NFT from './Second_Filter_NFT';




function NFT(){

    const [Gclick , SetGclick] = useState(false);
    const [Hclick , SetHclick] = useState(false);

    function changev(){
        SetGclick (true);
        SetHclick(false);
    }

    function changeb(){
        SetGclick (false);
        SetHclick(true)
    }
    return(
        <div className='games_container p-5'>
            <div className='d-flex justify-content-center my-3'>
                <h1 className='games-heading mt-3 text-white w-50'>Get Most Popular Weapon and Armour NFT's</h1>
            </div>
            <div className='button-container d-flex justify-content-center  my-4 p-4'>
                <button onClick={changev} className= {`btn fs-4 w-25 mx-5 p-4 ${Gclick === true ? 'btn-danger' :  'btn-outline-danger text-white border-white' }`} >Get Weapon NFT</button>
                <button onClick={changeb} className= {`btn fs-4 w-25 mx-5 p-4 ${Hclick === true ? 'btn-danger' :  'btn-outline-danger text-white border-white' }`} >Get Armour NFT</button>
            </div>
            
            {Gclick && <First_Filter_NFT/>}
            {Hclick && <Second_Filter_NFT/>}
        </div>
        
    )
}

export default NFT;