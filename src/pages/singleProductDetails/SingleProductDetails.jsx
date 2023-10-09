import './singleProductDetails.css';
import Container from "../../../src/components/helpers/container/Container";
import '../../../src/components/helpers/slickSliderStyle.css';
import { useState, useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";
import { AllProductsItems } from "../../config/data";
import InstaPosts from '../../components/shared/instaPosts/instaPosts/InstaPosts';
import BrandSlider from '../../../src/components/shared/brandSlider/brandSlider/BrandSlider';
import FullScreenProductSlider from '../../components/singleProductDetails/FullScreenProductSlider';
import { OpenModalContext } from "../../context/OpenModalContext";
import ZoomProductImg from '../../components/singleProductDetails/ZoomProductImg';
import ProductDetailsRight from '../../components/singleProductDetails/ProductDetailsRight';
import RelatedProductSlider from '../../components/singleProductDetails/RelatedProductSlider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/*======================================*/
/*======================================*/
/*======================================*/

const SingleProductDetails = () => {

    // this in order to display the overlay that will contain the imag slider for EVRY SINGLE PRODUCT
    const { openProductSlider } = useContext(OpenModalContext);

    // here we create array of refs to put it inside the img ,in order to accecss the first img and clicked it
    const itemsEls = useRef(new Array());

    const { id } = useParams();

    // find the single product details based on compare the id with param id
    const getSingleProductToDrawDetails = AllProductsItems.find(el => el.pId === Number(id));

    // get all related product category
    const relatedProductCategory = AllProductsItems.filter(ele => ele.pCategory === getSingleProductToDrawDetails.pCategory);

    //get the net price after sale
    const netPriceAfterSale = (getSingleProductToDrawDetails.pPrice - (getSingleProductToDrawDetails.pPrice
        * (getSingleProductToDrawDetails.pSalePrice / 100))).toFixed(2);

    // get current src img , initialy show the first imag as BIG MASTER IMG
    const [currentImageURL, setcurrentImageURL] = useState(getSingleProductToDrawDetails.pImgArray[0]);

    // when the checkbox checked [in order to make the buy btn disable or not based if we check the checbox input]
    const [isCheck, setIsCheck] = useState(false);

    // get the active classname ,initialy the first element get the active classname
    const [active, setActive] = useState(0);

    // check is screen for mobile or not
    const [isMobile, setIsMobile] = useState(false);
    /*==================================================*/

    const handleCheck = () => {
        /*
        in case WE DONT check the checkbox input and the product HASNT any product in stock
        stay the [isCheck] as false
        */
        if (!isCheck && getSingleProductToDrawDetails.pInStock == 1) {

            setIsCheck(false);

        } else {

            setIsCheck(!isCheck);

        }

    }

    /*==================================================*/

    useEffect(() => {
        /*
        get the first img based on it [ref index] and make it click by initialy
        and changed it everytime the [id param] will changed
        */
        itemsEls.current[0].click();

        // change the [isCheck] as well when the [id] CHANGED
        setIsCheck(false);

    }, [id])

    /*==================================================*/

    useEffect(() => {

        if (window.innerWidth < 575.98) {

            setIsMobile(true);

        } else {

            setIsMobile(false);

        }

    }, []);

    /*==================================================*/

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1700,
        nextArrow: (
            <div>
                <div className="next-slick-arrow"> <LiaAngleRightSolid /> </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow"> <LiaAngleLeftSolid /> </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className='single-product-details'>
            <div className="single-product-details-box my-5">
                <Container>
                    <div className="first d-flex">
                        <ZoomProductImg
                            getSingleProductToDrawDetails={getSingleProductToDrawDetails}
                            currentImageURL={currentImageURL}
                            setcurrentImageURL={setcurrentImageURL}
                            active={active}
                            setActive={setActive}
                            itemsEls={itemsEls}
                            id={id}
                            isMobile={isMobile}
                        />

                        {/* show the overlay that contain the slider imgs for every single produc,based on openProductSlider  */}
                        {openProductSlider && <FullScreenProductSlider data={getSingleProductToDrawDetails} />}
                        <ProductDetailsRight
                            getSingleProductToDrawDetails={getSingleProductToDrawDetails}
                            netPriceAfterSale={netPriceAfterSale}
                            handleCheck={handleCheck}
                            isCheck={isCheck}
                            id={id}
                        />
                    </div>
                    {/* end first */}
                </Container>
                <div className="main-desc text-center">
                    <div className='py-3 my-5'>
                        <h5 className='mb-0'>Description</h5>
                    </div>
                    <p className="desc mt-3 mb-4 color-secondary-gray pb-3">
                        {getSingleProductToDrawDetails.pShortDesc}
                    </p>
                </div>

                <RelatedProductSlider
                    relatedProductCategory={relatedProductCategory}
                    Slider={Slider}
                    settings={settings}
                    isMobile={isMobile}
                />
            </div>
            {/* end single-product-details-box */}
            <BrandSlider />
            <InstaPosts />
        </div>
    )
}

export default SingleProductDetails;