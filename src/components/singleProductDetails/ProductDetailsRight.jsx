import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { CartContext } from "../../context/CartContext";
import { ConfirmModalContext } from "../../context/ConfirmModalContext";
import { AuthContext } from "../../context/AuthContext";
import { OpenModalContext } from "../../context/OpenModalContext";

/*======================================*/
/*======================================*/
/*======================================*/


const ProductDetailsRight = (props) => {

    // this will remove the the product from [single product details],and close the confirm delte msg
    const { handleJustCloseWhenRemoveFromSingleDetails } = useContext(ConfirmModalContext);

    const { setShowCartModal, setShowRegisterModal } = useContext(OpenModalContext);

    const { existUser } = useContext(AuthContext);

    const { cart, handleDecreaseCounter, handleIncreaseCounter, handleAddTocart } = useContext(CartContext);

    const { getSingleProductToDrawDetails, netPriceAfterSale, handleCheck, isCheck, id, pId } = props;


    // set the active that will show when we click on color element in product details
    const [activeColor, setActiveColor] = useState(0);

    // this is in order to make operation inside button like [spinner]
    const [isBtnProductDetailsClicked, setIsBtnProductDetailsClicked] = useState(false);

    const [isProductDetailsSpinnerShow, setsProductDetailsSpinnerShow] = useState(false);


    // this is in order to make operation inside [buy it now] button like [spinner]
    const [isBuyBtnClicked, setIsBuyBtnClicked] = useState(false);

    const [showBuyBtnSpinner, setShowBuyBtnSpinner] = useState(false);

    const navigate = useNavigate();

    /*
    check if the product found in [cart] in order to display the [+ and -] btn
    if return true , that mean the user already add to cart,
    and when user need to see the details of product , the [+ and -] btn 
    it will show in order to user know its already added
    */
    const isFound = cart.some(element => {

        if (element.pId === getSingleProductToDrawDetails.pId) {

            return true;
        }

        return false;

    });

    // this useEffect when click on [add to cart btn that in single product details]
    useEffect(() => {

        let timer;

        if (isBtnProductDetailsClicked) {

            setsProductDetailsSpinnerShow(true);

            timer = setTimeout(() => {

                setsProductDetailsSpinnerShow(false);

                setIsBtnProductDetailsClicked(false);

            }, 800);

        }

        return () => clearTimeout(timer);

    }, [isBtnProductDetailsClicked, id])


    // this useEffect when click on [buy it now btn in single product details]
    useEffect(() => {

        let timer;

        if (isBuyBtnClicked) {

            setShowBuyBtnSpinner(true);

            timer = setTimeout(() => {

                navigate("/checkout/information");

            }, 600);

        }

        return () => clearTimeout(timer);

    }, [isBuyBtnClicked])


    // this func in order to do someting
    const handleBuyBtnClicked = () => {

        // only when exist user regiter,do the following
        if (existUser) {

            /*
            1 - when exist user and need to buy the product from [single product details]
            run the spinner that in [add to cart btn] and that in [buy it now]
            by make the [add to cart btn] clicked and the spinnner show in same time 

            2 - after the operation like [spinner inside btn] excute ,add the product to cart

            3 - close the cart modal , cause it will navigate to the [checkout/information] page 
            */
            setIsBuyBtnClicked(true);

            setsProductDetailsSpinnerShow(true);

            setShowBuyBtnSpinner(true);

            handleAddTocart(getSingleProductToDrawDetails.pId);

            // dont show the cart modal when navigate to checkout page
            setShowCartModal(false);

        } else {

            // open the register modal in case not user exist
            setShowRegisterModal(true);

        }

    }

    // this in order to excute the operation inside btn like [spinner]
    const handleClickOperationInProductDetails = () => {

        // excute it , only when exist user regiser
        if (existUser) {

            setIsBtnProductDetailsClicked(true);

        }

    }

    /*
    handle all func that will [add to cart and make the operation]
    inside the [add to cart] that inside [single prodcut details]
    */
    const handleClickAllAll = () => {

        handleClickOperationInProductDetails();

        handleAddTocart(getSingleProductToDrawDetails.pId);

    }

    /*
    here find the single product that has [same id with product id in cart]
    coz we will get the new value of [quantity] when user add product from [single product details]

    BUUUUUUUUT first of find the [product] we SHOULD MAKE SURE that the user already ADEDDDDDDDDDDD 
    the product to cart,cos it will show undifind without add the product to cart 
    */
    let hh = isFound && cart.find(el => el.pId === getSingleProductToDrawDetails.pId);

    return (
        <div className="right">
            <div className="breadcrumb">
                <ul className='list-unstyled p-0 m-0 d-flex align-items-center gap-2'>
                    <li><Link to="/" className='text-decoration-none text-dark'>Home &nbsp;/</Link></li>
                    <li><h6 className='mb-0'>{getSingleProductToDrawDetails.pName}</h6></li>
                </ul>
            </div>
            <h3>{getSingleProductToDrawDetails.pName}</h3>

            {/* if the product has sale , show the value of the sale like [Discount: ($9%)] */}
            {getSingleProductToDrawDetails.pSalePrice ?
                <>
                    <p className='my-p'>Discount: ({`$${getSingleProductToDrawDetails.pSalePrice}%`})</p>
                </>
                :
                ""
            }

            {/* if the product has sale show the main price with new price , otherwise display the main price */}
            {getSingleProductToDrawDetails.pSalePrice ?
                <>
                    <span className='fw-semibold my-color'>${netPriceAfterSale}</span>
                    <span className="lineTrough">${getSingleProductToDrawDetails.pPrice}</span>
                </>
                :
                <span className='fw-semibold'>${getSingleProductToDrawDetails.pPrice}</span>
            }

            {/* get the desc length 290 char */}
            <p className="desc color-secondary-gray py-3">
                {getSingleProductToDrawDetails.pShortDesc.length > 290 ?
                    getSingleProductToDrawDetails.pShortDesc.slice(0, 290) + "..." :
                    getSingleProductToDrawDetails.pShortDesc
                }
            </p>

            {/* 
            show [Out Of Stock] text , if (product in stock) equal zero that mean out of stock ,
            otherwise put the number of product in stock
            */}
            <h6>
                <span className='fw-semibold'>Stock : </span>{getSingleProductToDrawDetails.pInStock == 0 ?
                    <>
                        <span className='text-danger'>Out Of Stock</span>
                    </>
                    :
                    getSingleProductToDrawDetails.pInStock
                }
            </h6>

            {/* draw the colors of every product with active class that reprsent the round circle arroun the span color */}
            <div className="d-flex align-items-center gap-3 my-4 colors-box">
                <h3 className="h6 mb-0 fw-semibold">Colors:</h3>
                <div className="d-flex align-items-center gap-2">
                    {getSingleProductToDrawDetails.pColorsArray?.map((obj, i) => (
                        <span
                            className={activeColor === i ? "active d-inline-block" : " d-inline-block"}
                            style={{ backgroundColor: obj }}
                            key={i}
                            onClick={() => setActiveColor(i)}
                        ></span>
                    ))}
                </div>
            </div>

            {/* if the product INSIDE cart,show the [minus and plus btn] when user go to single product details  */}
            {
                isFound ?
                    <>
                        <div className="cart-counter text-center mb-4">
                            <button className="counter-btn" onClick={
                                () => {
                                    handleDecreaseCounter(hh.pId);
                                    /*
                                    here we will remove the product when user in [single product details] 
                                    just excute, when user click on [minus btn] and in CASE the [prodcut quantity] equal 1 
                                    */
                                    hh.pQty === 1 && handleJustCloseWhenRemoveFromSingleDetails(hh.pId)
                                }
                            }>
                                <FaSquareMinus />
                            </button>
                            {/* if the quantiy less than 10 add zero to the quantity */}
                            <span>
                                {hh.pQty < 10 ? "0" + hh.pQty : hh.pQty}
                            </span>
                            {/* 
                            here we check if the [the prodcut quantity] greater than the stock of this product
                            prevent user to click again to increase more product
                        */}
                            <button
                                className="counter-btn"
                                disabled={hh.pQty >= Number(hh.pInStock) ? true : ""}
                                onClick={() => {
                                    handleIncreaseCounter(hh.pId)
                                }
                                }>
                                <FaSquarePlus />
                            </button>
                        </div>
                    </>
                    :
                    <>
                        {!isProductDetailsSpinnerShow ?
                            <>
                                <button
                                    className="btn bg-dark text-white text-capitalize px-5 rounded-2 mx-auto mb-4 d-flex align-items-center justify-content-center"
                                    /*make the [add to cart btn] disable ,in case the product is outofstock */
                                    disabled={getSingleProductToDrawDetails.outOfStock ? true : false}
                                    onClick={handleClickAllAll}
                                >
                                    Add to cart
                                </button>
                            </>
                            :
                            <>
                                <button className="btn bg-dark text-white text-capitalize px-5 rounded-2 mx-auto mb-4 d-flex align-items-center justify-content-center">
                                    <div className="spinner-border spinner-border-sm" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </button>
                            </>
                        }

                    </>

            }

            <div className="terms-conditions">
                <form action="#" className='mt-4'>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="terms-and-conditions"
                            id="flexCheckDefault"
                            // checkd the checkbox when the [isCheck] is true
                            checked={isCheck && true}
                            onChange={handleCheck}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            I agree with the <Link to="/faq" className='text-dark'>terms and conditions</Link>
                        </label>
                    </div>
                </form>

                {!showBuyBtnSpinner ?
                    <>
                        <button
                            type="button"
                            className="btn btn-dark rounded-1 btn-lg btn-block w-100 text-uppercase d-flex align-itemes-center justify-content-center"
                            /*make the [buy it now btn] disable ,in case the product is outofstock */
                            disabled={!isCheck || getSingleProductToDrawDetails.outOfStock ? true : false}
                            onClick={handleBuyBtnClicked}
                        >buy it now</button>
                    </>
                    :
                    <>
                        <button className="btn bg-dark btn-lg text-white text-capitalize px-5 rounded-2 d-flex align-itemes-center justify-content-center mx-auto mb-4 w-100">
                            <div className="spinner-border spinner-border-sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </button>
                    </>

                }

                <ul className='list-unstyled p-0 m-0 mt-3'>
                    <li className='mb-2'>
                        <span>Vendor:</span>
                        <span className='text-capitalize'>{getSingleProductToDrawDetails.pBrand}</span>
                    </li>
                    <li className='mb-2'>
                        <span>SKU:</span>
                        <span className='text-capitalize'>N/A</span>
                    </li>
                    <li className='mb-2'>
                        <span>Category:</span>
                        <span className='text-capitalize'>{getSingleProductToDrawDetails.pCategory}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductDetailsRight;