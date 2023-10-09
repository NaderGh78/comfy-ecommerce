import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { ConfirmModalContext } from "../../context/ConfirmModalContext";
import { FaRegCircleLeft, FaRegTrashCan, FaXmark, FaSquareMinus, FaSquarePlus } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const TableViewCart = () => {

    const { cart, isBtnEmptyCart, handleIncreaseCounter, handleDecreaseCounter, fixedTotal } = useContext(CartContext);

    const { handleClickDelte, handleClickDelteAll } = useContext(ConfirmModalContext);

    return (
        /*
        here we check if exist products in cart arry and HAVE LENGTH that mean this 
        array have element inside it ,
        the second condition is check if the [Empty Shopping Cart] is clicked or not by the state [isBtnEmptyCart],
         [isBtnEmptyCart] initialy still [false] coz we dont click on it yet.
         when there are product in cart array and have elements inside it and the [Empty Shopping Cart] dont cliked yet 
         show the table with products that get it with [cart] array,
         otherwise SHOW the div that contain the [Your cart is empty.]
        */
        cart.length && !isBtnEmptyCart ? <div className="table-box">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="fisrt-th">PRODUCT</th>
                        <th scope="col" className='text-center'>PRICE</th>
                        <th scope="col" className='text-center'>STOCK</th>
                        <th scope="col" className='text-center'>QUANTITY</th>
                        <th scope="col" className='text-center'>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map((val, key) => {

                        //get the net price if the product has SALE
                        const netPriceAfterSale = (val.pPrice - (val.pPrice * (val.pSalePrice / 100))).toFixed(2);

                        return (
                            <tr key={key}>
                                <td>
                                    <div className="single-view-cart d-flex align-items-center gap-3">
                                        <span onClick={() => handleClickDelte(val.pId)}><FaXmark /></span>
                                        <img src={val.pHoverImage} alt="" />
                                        <div className="desc">
                                            <Link to="" className='text-decoration-none'>{val.pName}</Link>
                                            <p>Color : <span style={{ backgroundColor: val.pcolor }}></span> </p>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-center fw-bold'>
                                    {
                                        val.pSalePrice ?
                                            <>
                                                <span>${netPriceAfterSale}</span>
                                                <span className="lineTrough">${val.pPrice}</span>
                                            </>
                                            :
                                            <span>${val.pPrice}</span>
                                    }
                                </td>
                                <td className='text-center'>{val.pInStock}</td>
                                <td className='text-center'>
                                    <div className='product-counter d-flex align-items-center justify-content-center gap-2'>
                                        {/* 
                                          here if user click on minus btn untill to 1
                                          make the minus btn disable
                                        */}
                                        <button
                                            className="counter-btn"
                                            onClick={() => handleDecreaseCounter(val.pId)}
                                            disabled={
                                                val.pQty === 1 ? true
                                                    :
                                                    ""
                                            }
                                        >
                                            <FaSquareMinus />
                                        </button>
                                        <span>{val.pQty}</span>
                                        {/* 
                                            here we check if the the pquantiy greater than the stock of this product
                                            prevent user to click again to increase more product
                                        */}
                                        <button
                                            className="counter-btn"
                                            onClick={() => handleIncreaseCounter(val.pId)}
                                            disabled={
                                                val.pQty >= Number(val.pInStock)
                                                    ?
                                                    true :
                                                    ""
                                            }
                                        >
                                            <FaSquarePlus />
                                        </button>
                                    </div>
                                </td>
                                <td className='text-center fw-bold'>
                                    {/* 
                                    if the product HAS SALE, [multiply the product quantity with NET PRICE AFTER SALE] ,
                                    if the product HASNT SALE , [multiply the product quantity with ORIGINAL PRODUCT PRICE]

                                    NOTE : WE MAKE THE PRICE WITH 2 NBR AFTER THE POINT
                                     */}
                                    <span>
                                        ${
                                            (val.pSalePrice ? val.pQty * netPriceAfterSale : val.pQty * val.pPrice).toFixed(2)
                                        }
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan="7">
                            <div className='my-flex-div row justify-content-between align-items-center mx-0 py-2'>
                                <div className="col-lg-4 col-sm-4">
                                    <Link
                                        to="/shop"
                                        className='continue-shop text-decoration-none d-flex align-items-center gap-2 bg-dark text-white'
                                    >
                                        <FaRegCircleLeft /> Continue Shopping
                                    </Link>
                                </div>
                                <div className="col-lg-5 col-sm-4">
                                    <button
                                        className='empty-btn text-decoration-none d-flex align-items-center gap-2 bg-dark text-white'
                                        onClick={handleClickDelteAll}
                                    >
                                        <FaRegTrashCan /> Empty Shopping Cart
                                    </button>
                                </div>
                                <div
                                    className="col-lg-3 col-sm-4 text-lg-center text-md-start"
                                >
                                    TOTAL PRICE:  <span className='fw-bold' style={{ color: "#c7ab62" }}>${fixedTotal}</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='text-center'>
                <Link
                    to="/checkout/information"
                    className='table-checkout d-inline-block text-center text-decoration-none bg-dark text-white px-3 py-2 mt-4 w-50'
                >Checkout</Link>
            </div>
        </div>
            :
            <>
                <div className='table-empty text-center'>
                    <h6 className='mb-4'>Your cart is empty.</h6>
                    <Link to="/shop" className='text-decoration-none bg-dark text-white px-3 py-2 mt-4'>CONTINUE SHOPPING</Link>
                </div>
            </>
    )
}

export default TableViewCart;