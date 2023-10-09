const FormAccount = () => {

    // get user email and username from localstorage
    let getUserEmail = localStorage.getItem('user') !== null && (JSON.parse(localStorage.getItem("user"))).r_email;
    let getUserName = localStorage.getItem('user') !== null && (JSON.parse(localStorage.getItem("user"))).r_username;

    return (
        <div className="tab-single">
            <h2 className='tab-title'>Account Information</h2>
            <div className="order-history">
                <div className="form-account">
                    <form action="">
                        <div className="form-group mb-4">
                            <label className="mb-1" htmlFor='accName'>Full Name</label>
                            <input type="text" className="form-control" placeholder="Name" id="accName" defaultValue={getUserName} />
                        </div>
                        {/* ========================== */}
                        <div className="form-group mb-4">
                            <label className="mb-1" htmlFor='accEmail'>Email</label>
                            <input type="email" className="form-control" placeholder="Email" id="accEmail" defaultValue={getUserEmail} />
                        </div>
                        {/* ========================== */}
                        <div className="form-group mb-4">
                            <label className="mb-1" htmlFor='accPhone'>Phone Number</label>
                            <input type="text" className="form-control" placeholder="Please enter your phone number" id="accPhone" />
                        </div>
                        {/* ========================== */}
                        <div className="form-group mb-4">
                            <label className="mb-1" htmlFor='accGover'>Governorate</label>
                            <select className="form-select" defaultValue={'selected'} id="accGover">
                                <option value="selected">Select a governorate</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        {/* ========================== */}
                        <div className="form-group mb-4">
                            <label className="mb-1" htmlFor='accCity'>City</label>
                            <select className="form-select" defaultValue={'selected'} id="accCity">
                                <option value="selected">Select a city</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        {/* ========================== */}
                        <div className="form-group mb-4">
                            <label className="mb-1" htmlFor='accStreet'>Street</label>
                            <input type="text" className="form-control" placeholder="Please enter your street address" id="accStreet" />
                        </div>
                        {/* ========================== */}
                        <div className="form-group mb-4">
                            <label className="mb-1" htmlFor='accBuilding'>Building</label>
                            <input type="number" className="form-control" placeholder="Please enter your building number" id="accBuilding" />
                        </div>
                        {/* ========================== */}
                        <div className="form-group mb-4">
                            <label className="mb-1" htmlFor='accAppart'>Apartment</label>
                            <input type="text" className="form-control" placeholder="Please enter your apartment" id="accAppart" />
                        </div>
                        {/* ========================== */}
                        <div className="form-group mb-4">
                            <label className="mb-1" htmlFor='accPostal'>Postal Code</label>
                            <input type="text" className="form-control" placeholder="Please enter your postal code" id="accPostal" />
                        </div>
                        <button className="update-btn">Update Account</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default FormAccount;