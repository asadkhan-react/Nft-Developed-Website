import {FaArrowCircleRight , FaArrowCircleLeft } from 'react-icons/fa';

const Modal = ({
    clickedImg,
    setClickedImg,
    handelRotationRight,
    handelRotationLeft
  }) => {
    const handleClick = (e) => {
      if (e.target.classList.contains("dismiss")) {
        setClickedImg(null);
      }
    };
  
    return (
      <>
        <div className="overlay h-100 bg-dark bg-opacity-50 fixed-top d-flex align-items-center dismiss" onClick={handleClick}>
          <img className='img-fluid mx-auto w-50 h-50' src={clickedImg} alt="bigger pic" />
          <span className="btn bg-danger mt-5 mx-5 text-danger position-fixed top-0 end-0 d-flex dismiss" onClick={handleClick}>
            <i class="bg-white fa fa-close dismiss"></i>
          </span>
          <div onClick={handelRotationLeft} className="overlay-arrows_left">
            <div><FaArrowCircleLeft className='fs-1 btn bg-danger  position-fixed start-0  mx-5 px-0 text-white light-left-arrow'/></div>
          </div>
          <div onClick={handelRotationRight} className="overlay-arrows_right">
            <div><FaArrowCircleRight className='fs-1 btn bg-danger  position-fixed end-0 mx-5 px-0 text-white light-right-arrow'/></div>
          </div>
        </div>
      </>
    );
  };
  
  export default Modal;