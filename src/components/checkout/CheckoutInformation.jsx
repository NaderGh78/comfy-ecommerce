import { Link } from "react-router-dom";
import { LiaAngleLeftSolid } from "react-icons/lia";

/*======================================*/
/*======================================*/
/*======================================*/

const CheckoutInformation = () => {
    return (
        <div className="checkout-information-box">
            <form action="">
                <h6>Contact</h6>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingPhone" placeholder="Phone" />
                    <label htmlFor="floatingPhone">Phone</label>
                </div>

                <h6>Shipping address</h6>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingFname" placeholder="Full Name" />
                    <label htmlFor="floatingFname">Full Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingAppart" placeholder="apartment" />
                    <label htmlFor="floatingAppart">apartment</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingBulding" placeholder="building" />
                    <label htmlFor="floatingBulding">building</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingStreet" placeholder="street" />
                    <label htmlFor="floatingBulding">street</label>
                </div>

                <div className="input-flex-box d-flex gap-5 mt-4">
                    <div className="form-floating">
                        <select className="form-select" id="country">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label htmlFor='country'>Country</label>
                    </div>
                    {/* ========================== */}
                    <div className="form-floating">
                        <select className="form-select" id="Governorate">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label htmlFor='Governorate'>Governorate</label>
                    </div>
                </div>
                <div className="input-flex-box d-flex gap-5 mt-4">
                    <div className="form-floating">
                        <select className="form-select" id="city">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label htmlFor='city'>City</label>
                    </div>
                    {/* ========================== */}

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="postalCode" placeholder="Postal Code" />
                        <label htmlFor="postalCode">Postal Code</label>
                    </div>
                </div>

                <div className="form-check mt-2">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        save this information for next time
                    </label>
                </div>

                <div className="bottom-content d-flex align-items-center justify-content-between my-5">
                    <Link to="/viewCart"><LiaAngleLeftSolid />return to Cart</Link>
                    <Link to="/checkout/shipping" className="bg-dark text-white">Continue to Shipping</Link>
                </div>
            </form>
        </div>
    )
}

export default CheckoutInformation;