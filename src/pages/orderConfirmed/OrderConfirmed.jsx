import './orderConfirmed.css';
import { Link } from 'react-router-dom';
import confirmedImg from "../../assets/images/confirmed-img.png";
/*======================================*/
/*======================================*/
/*======================================*/

function OrderConfirmed() {

    // get the name from localstorage 
    let getUserName = localStorage.getItem('user') !== null && (JSON.parse(localStorage.getItem("user"))).r_username;

    // get the first name by split getUserName in loclastorage
    let firstName = getUserName.split(" ")[0];

    return (
        <div className='order-confirmed-box'>
            <div className="top">
                <div className="confirmed-img">
                    <img src={confirmedImg} alt="" />
                </div>
                <p>Hi <span className='text-capitalize'>{firstName}</span></p>
                <h2>Thank you for your order!</h2>
                <span className='d-inline-block rounded-2 py-2 px-3 text-white bg-warning mt-4'>Order No: 6500dda18d1</span>
            </div>
            {/* end top */}

            <div className="middle d-flex align-items-center justify-content-center">
                <div>
                    <h6>Date</h6>
                    <p>2023-09-12</p>
                </div>
                <div>
                    <h6>Billing Address</h6>
                    <p>Baabda, Beirut gov, Lebanon</p>
                </div>
                <div>
                    <h6>Payment Method</h6>
                    <p>Cash</p>
                </div>
            </div>
            {/* end middle */}

            <div className="bottom d-flex justify-content-evenly align-items-center pb-4">
                <Link to="/account/myOrder" className='text-decoration-none bg-dark text-white py-2 px-3 rounded-2'>Go to order information</Link>
                <Link to="/shop" className='text-decoration-none bg-dark text-white py-2 px-3 rounded-2'>Continue shopping</Link>
            </div>
            {/* end bottom */}
        </div>
    )
}

export default OrderConfirmed;