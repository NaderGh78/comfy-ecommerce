import './style.css';
import React, { useState } from 'react';
import { FaCircleChevronUp } from "react-icons/fa6";

/*===================================*/
/*===================================*/
/*===================================*/

const ScrollTop = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {

        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    /*===================================*/
    /*===================================*/
    /*===================================*/

    return (
        <div className='scroll-top'>
            <span
                onClick={scrollToTop}
                style={{ display: visible ? 'flex' : 'none' }}
            >
                <FaCircleChevronUp />
            </span>
        </div>
    )
}

export default ScrollTop;