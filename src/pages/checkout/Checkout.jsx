import './checkout.css';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import LogoCheckout from "../../assets/images/main-logo.png";

/*======================================*/
/*======================================*/
/*======================================*/

function Checkout() {

    const { cart, fixedTotal } = useContext(CartContext);

    return (
        <div className='checkout-box'>
            <Link to="/" className="logoChekout">
                <img src={LogoCheckout} alt="" />
            </Link>
            <div className="checkout-content d-flex mt-5">
                <div className='left'>
                    <div className="checkout-tabs">
                        <ul className="account-link-lists list-unstyled m-0 d-flex mb-5">
                            <li><Link to="/viewCart" className='text-decoration-none'>Cart /&nbsp;</Link></li>
                            <li><Link to="/checkout/information" className='text-decoration-none'>information /&nbsp; </Link></li>
                            <li><Link className='text-decoration-none'>shipping</Link></li>
                        </ul>
                    </div>
                    <Outlet />
                </div>
                {/*left end */}

                <div className="right">
                    <div className="top">
                        {cart?.map((ele, i) => (
                            <div className="checkout-products-show d-flex gap-2 mb-3" key={i}>
                                <div className="pr-img">
                                    <img src={ele.pHoverImage} alt="" />
                                    <span>{ele.pQty}</span>
                                </div>
                                <div className="pr-name">
                                    <h6>{ele.pName}</h6>
                                    <span style={{ backgroundColor: ele.pcolor }}></span>
                                </div>
                                {/* 
                               if the product have SALE calculate the sale of main price and put it beside the main price
                               otherwise put the main price ONLY
                               */}
                                <div className='pr-price'>
                                    {ele.pSalePrice ?
                                        <><span className='d-block'>
                                            ${(ele.pPrice - (ele.pPrice * (ele.pSalePrice / 100))).toFixed(2)}
                                        </span>
                                            <span className="lineTrough">${ele.pPrice}</span>
                                        </>
                                        :
                                        <span>${ele.pPrice}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="middle">
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                            <h6>Subtotal</h6>
                            <span>${fixedTotal}</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-3'>
                            <h6>Shipping</h6>
                            <span>free shipping</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className='d-flex align-items-center justify-content-between mt-3'>
                            <h6>Subtotal</h6>
                            <span>USD ${fixedTotal}</span>
                        </div>
                    </div>
                </div>
                {/* right end */}
            </div>
            {/* checkout content end */}
        </div>
    )
}

export default Checkout;