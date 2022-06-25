import React, { useState } from 'react';
import GalleryData from './GalleryData';
import image1 from './images/image1.jpg'
import image4 from './images/image4.jpg'
import Devil from './Devil';
import Angel from './Angel';
import Armor from './Armor';
import Weapon from './Weapon';
function Store(){

const [angelNft , SetAngelNft] = useState(false);
const [DevilNft , SetDevilNft] = useState(false);
const [ArmorNft , SetArmorNft] = useState(false);
const [WeaponNft , SetWeaponNft] = useState(false);
const [hideValue , SetHideValue] = useState(true);

    function GetAngel(){
        SetAngelNft(true);
        SetDevilNft(false);
        SetHideValue(false);
    }


    function GetDEvil(){
        SetDevilNft(true);
        SetAngelNft(false);
        SetHideValue(false);
    }

    function StoreAgain(){
        SetHideValue(true);
        SetAngelNft(false);
        SetDevilNft(false);
        SetArmorNft(false);
        SetWeaponNft(false);
    }

    function GetArmor(){
        SetArmorNft(true);
        SetAngelNft(false);
        SetDevilNft(false);
        SetWeaponNft(false);
    }

    function GetWeapon(){
        SetWeaponNft(true)
        SetAngelNft(false);
        SetDevilNft(false);
        SetArmorNft(false);
    }

    return(
        <>
        <div className='games_container'>
            {hideValue && <h1 className='mobile-heading container mt-5 text-center text-white main-heading'>WELCOME TO THE STORE</h1>}
            {!hideValue && <h1 className='good-choice container conditional-heading text-center text-white main-heading'>GREAT CHOICE</h1>}
            <div className='d-flex store-container mt-5  gap-5 container'>
                    <div className='store-image' onClick={GetAngel}>
                    {hideValue && <>
                        <img  className='img-fluid' src={image1} />
                        <h4 class=" bg-danger  p-2 text-white">Angel NFT Store</h4>
                    </>}   

                    </div>
                <div className='store-image' onClick={GetDEvil}>
                    {hideValue && <>
                        <img  className='bg-transparent img-fluid' src={image4} />
                        <h4 class=" bg-danger  p-2 text-white">Devil NFT Store</h4>
                    </>}
                </div>
            </div>

            <div className='button-container store-button-container d-flex justify-content-center p-2'>
                    {!hideValue && 
                    <>
                    <button onClick={GetWeapon} className= 'mb-5 text-white border-white btn-outline-danger btn fs-4 w-25 mx-auto p-4 ' >Get Weapon NFT</button>
                    <button onClick={GetArmor} className= 'mb-5 text-white  border-white btn-outline-danger btn fs-4 w-25 mx-auto p-4 ' >Get Armour NFT</button>
                    <button onClick={StoreAgain} className= 'mb-5 text-white  border-white btn-outline-danger btn fs-4 w-25 mx-auto p-4 ' >Go To Store Again</button> 
                    </>
                    }
            </div>

            {angelNft && <Angel/>}
            {ArmorNft && <Armor/>}
            {WeaponNft && <Weapon/>}
            {DevilNft && <Devil/>}


        </div>
        </>
    )
}

export default Store;