import { useContext, useRef } from 'react';
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import { OpenModalContext } from '../../context/OpenModalContext';
import Carousel from 'react-bootstrap/Carousel';

/*======================================*/
/*======================================*/
/*======================================*/

const FullScreenProductSlider = ({ data }) => {

    const { pImgArray } = data;

    const { handleCloseSlider } = useContext(OpenModalContext);

    const closeProductSlider = useRef();

    return (
        <div className='full-screen-product-slider' ref={closeProductSlider}>
            {/* close the page */}
            <span className='escape' onClick={handleCloseSlider}>
                <FaDownLeftAndUpRightToCenter />
            </span>
            <Carousel data-bs-theme="dark" className='pr-slider' fade data-bs-interval="5">
                {pImgArray.map((el, i) => (
                    <Carousel.Item key={i}>
                        <img
                            className="d-block"
                            src={el}
                            alt=""
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default FullScreenProductSlider;