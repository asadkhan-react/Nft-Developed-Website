import React, {useEffect,  useState } from "react";

import Modal from "./Modal";
import GalleryData from "./GalleryData";

function Gallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [tag , setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(function(){
      tag === 'all' ? setFilteredImages(GalleryData) : setFilteredImages(GalleryData.filter( Gdata => Gdata.tag === tag));
  }, [tag])

  function TagButton({name , handleSetTag , classprop}){
    return <button className={`tag-button text-white px-5 py-2 btn mx-3 my-3 border border-white  ${classprop ? 'btn-danger' : 'btn-outline-danger'}`} onClick={function(){handleSetTag(name)} }>{name.toUpperCase()}</button>
  }

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.imageName);
  };

  const handelRotationRight = () => {
    const totalLength = GalleryData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = GalleryData[0].imageName;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = GalleryData.filter((item) => {
      return GalleryData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].imageName;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = GalleryData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = GalleryData[totalLength - 1].imageName;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = GalleryData.filter((item) => {
      return GalleryData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].imageName;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <>
    <div className='nft'>
      <div className='tags my-4 py-4 text-center '>        
          <TagButton classprop={tag ==='all' ? true : false} onClick={TagButton} name='all' handleSetTag={setTag} />
          <TagButton classprop={tag ==='angel' ? true : false} onClick={TagButton} name='angel' handleSetTag={setTag} />
          <TagButton classprop={tag ==='devil' ? true : false} onClick={TagButton} name='devil' handleSetTag={setTag} />
          <TagButton classprop={tag ==='war' ? true : false} onClick={TagButton} name='war' handleSetTag={setTag} />
      </div>
    </div>

    <div className="services container">
      <div className="row gx-4 gy-4">
        {filteredImages.map((item, index) => (
            <div key={index} className="Col-lg-4 col-md-4  col-10 col-xxl-4 mx-auto" >
                <figure>
                  <img className="img-fluid" src={item.imageName} alt={item.text} onClick={() => handleClick(item, index)}/>
                </figure>  
            </div>
        ))}
      </div>       



      <div>{clickedImg && (<Modal 
      
      clickedImg={clickedImg} 
      handelRotationRight={handelRotationRight} 
      setClickedImg={setClickedImg} 
      handelRotationLeft={handelRotationLeft}

      />)}
      </div>
    </div>




    </>
  );
}

export default Gallery;