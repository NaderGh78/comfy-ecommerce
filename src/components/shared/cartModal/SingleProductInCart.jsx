import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSquareMinus, FaSquarePlus, FaRegTrashCan } from "react-icons/fa6";
import { CartContext, OpenModalContext } from "../../../allPagesPaths";
import { ConfirmModalContext } from "../../../context/ConfirmModalContext"; 

/*======================================*/
/*======================================*/
/*======================================*/

const SingleProductInCart = ({ data: { pId, pName, pHoverImage, pPrice, pSalePrice, pInStock, pcolor, pQty } }) => {

    const { cart,
        setCart,
        handleAddTocart,
        isDiseable,
        setIsDesable,
        isBtnEmptyCart,
        setIsBtnEmptyCart,
        handleIncreaseCounter,
        handleDecreaseCounter,

        handleDelteAllItems,
        isBodyHidden,
        setIsBodyHidden,
        total,

        showConfirmDelete,
        setShowConfirmDelete,
        handleShowConfirmDelete,
        handleCloseConfirmDelete,

        handleDelte } = useContext(CartContext);

    const { showCartModal, setShowCartModal, handleCloseShowCartModal, setShowRegisterModal } = useContext(OpenModalContext);
    const { handleClickDelte, } = useContext(ConfirmModalContext);

    const netPriceAfterSale = (pPrice - (pPrice * (pSalePrice / 100))).toFixed(2);








    return (
        <div className="cart-single-product">
            <div className="left">
                <img src={pHoverImage} alt="" />
            </div>
            <div className="right">
                <h3><Link to={`/product-details/${pId}`} className='my_link' onClick={handleCloseShowCartModal}>{pName}</Link></h3>
                <div className="top-content">
                    <h4 className='mb-0 d-flex align-items-center'>color : <span style={{ backgroundColor: pcolor }}></span></h4>
                    <div className="cart-counter">
                        {/* 
                            here if user click on minus btn untill to 1
                            make the minus btn disable
                        */}
                        <button className="counter-btn" disabled={pQty === 1 ? true : ""} onClick={() => handleDecreaseCounter(pId)}>
                            <FaSquareMinus />
                        </button>
                        <span>{pQty}</span>
                        {/* 
                            here we check if the the pquantiy greater than the stock of this product
                            prevent user to click again to increase more product
                        */}
                        <button className="counter-btn" disabled={pQty >= Number(pInStock) ? true : ""} onClick={() => handleIncreaseCounter(pId)}>
                            <FaSquarePlus />
                        </button>
                    </div>
                </div>
                <div className="middle-content">
                    <div>
                        {pSalePrice ? <><span>${netPriceAfterSale}</span><span className="lineTrough">${pPrice}</span></> : <span>${pPrice}</span>}
                    </div>

                    <h4 className='mb-0'>stock : <span>{pInStock}</span></h4>
                </div>
                <FaRegTrashCan onClick={() => handleClickDelte(pId)} style={{ cursor: "pointer" }} />
            </div>
        </div>
    )
}

export default SingleProductInCart;