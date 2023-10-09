import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConfirmModalContext } from "../../context/ConfirmModalContext";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { Spinner } from 'react-bootstrap';

/*======================================*/
/*======================================*/
/*======================================*/

const CheckoutShipping = () => {

  const navigate = useNavigate();

  const {
    isConfirmOrderBtnClicked,
    isConfirmSpinnerShow, setIsConfirmBtnOrderClicked,
    setIsConfirmSpinnerShow,
    handleJustClose } = useContext(ConfirmModalContext);

  useEffect(() => {

    let timer;

    /*
    when click on [confirm order btn] that in chekout page ,there are an operation show
    like [run the spinner],and it will redirect to confirm order PAGE  
    */

    if (isConfirmOrderBtnClicked) {

      // run the spinner inside [confirm order btn] that in chekout page
      setIsConfirmSpinnerShow(true);

      timer = setTimeout(() => {

        navigate("/order-confirmed")

        // after 1 second cancel the clicked
        setIsConfirmBtnOrderClicked(false)

      }, 1000);

    }

    // cleanup
    return () => clearTimeout(timer);

  }, [isConfirmOrderBtnClicked, isConfirmSpinnerShow])

  return (
    <div className="checkout-shipping-box">
      <div className="top">
        <div className="d-flex align-items-center justify-content-between">
          <h6>Contact</h6>
          <span>+201234567891</span>
          <Link to="/checkout/information">change</Link>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <h6 className="col-3">Ship to</h6>
          <p className="col-6">first app on the left of the elevator ,london manchester city beside of pharmacy</p>
          <Link to="/checkout/information" className="col-3 text-end">change</Link>
        </div>
      </div>
      <div className="middle mt-5">
        <h6>Shipping method</h6>
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0">standard</p>
          <span>$15</span>
        </div>
      </div>
      <div className="bottom-content d-flex align-items-center justify-content-between my-5">
        <Link to="/checkout/information"><LiaAngleLeftSolid />return to information</Link>
        <Link className="bg-dark text-white my-confirmed-link" onClick={handleJustClose}>
          {!isConfirmOrderBtnClicked && "Confirm order"}
          {isConfirmOrderBtnClicked && !isConfirmSpinnerShow && "Confirm order"}
          {isConfirmOrderBtnClicked && isConfirmSpinnerShow && <>Confirm order <Spinner animation="border" /></>}
        </Link>
      </div>
      <small className="text-secondary mt-2">All Rights Reserved to comfy team</small>
    </div>
  )
}

export default CheckoutShipping;