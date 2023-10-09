import './cartModal.css';
import { useContext } from 'react';
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import SingleProductInCart from '../SingleProductInCart';
import { CartContext, OpenModalContext } from '../../../../allPagesPaths';

/*======================================*/
/*======================================*/
/*======================================*/

const CartModal = () => {

    const { setShowCartModal, handleCloseShowCartModal } = useContext(OpenModalContext);

    const { cart, fixedTotal } = useContext(CartContext);

    return (
        <div className='cart-modal'>
            <div className="cart-modal-box">
                <Modal
                    show={setShowCartModal}
                    onHide={handleCloseShowCartModal}
                    className='cart-modal-Modal'
                    backdrop="static"
                >
                    <div className="top-heading-title d-flex align-items-center justify-content-between text-white p-3 bg-dark">
                        <h3 className='mb-0'>Filters</h3>
                        <span onClick={handleCloseShowCartModal}>
                            <FaXmark />
                        </span>
                    </div>
                    <Modal.Body>
                        {cart.length ?
                            <>
                                <div className="cart-products-content">
                                    {cart.map((el, i) => (
                                        <SingleProductInCart data={el} key={i} />
                                    ))}
                                </div>
                                {/* cart poroducts content end */}
                                <div className="cart-box-footer">
                                    <div className="total-price">
                                        <h4 className='mb-0'>Total Price</h4>
                                        <span>${fixedTotal}</span>
                                    </div>
                                    <Link
                                        to="/checkout/information"
                                        onClick={() => setShowCartModal(false)}
                                        className='checkout'
                                    >Checkout</Link>
                                    <Link
                                        to="/viewCart"
                                        onClick={() => setShowCartModal(false)}
                                    >View cart</Link>
                                </div>
                                {/* cart box footer end */}
                            </>
                            :
                            <>
                                <div className='cart-is-empty'>
                                    <h6>Your cart is empty.</h6>
                                    <Link
                                        to="/shop"
                                        onClick={() => setShowCartModal(false)}
                                    >Return to Shop</Link>
                                </div>
                            </>
                        }
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default CartModal;