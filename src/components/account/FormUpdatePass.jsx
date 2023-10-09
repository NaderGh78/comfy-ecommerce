import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const FormUpdatePass = () => {

    // in order to toggle [show/hide password] icon
    const [currIconPassClicked, setCurrIconPassClicked] = useState(false);
    const [newIconPassClicked, setNewIconPassClicked] = useState(false);

    // excute the toggle [show/hide password] icon
    const handleChangeCurrIconPass = () => {
        setCurrIconPassClicked(!currIconPassClicked);
    }

    const handleChangeNewIconPass = () => {
        setNewIconPassClicked(!newIconPassClicked);
    }

    return (
        <div className="tab-single">
            <h2 className='tab-title'>Update your password</h2>
            <div className="order-history">
                <div className='form-update-pass'>
                    <form action="">
                        <div className="form-group mt-2">
                            <label className="mb-1" htmlFor='curr-update-pass'>Current Password</label>
                            <div className="position-relative">
                                <input
                                    // if currIconPassClicked false, change the type of input form[text to password]
                                    type={!currIconPassClicked ? "password" : "text"}
                                    className="form-control"
                                    id="curr-update-pass"
                                    placeholder="Please enter your current password"
                                />
                                <span
                                    className="span-icon"
                                    onClick={handleChangeCurrIconPass}
                                >
                                    {
                                        // here we change the icon form [eye to close eye] icon,based on currIconPassClicked
                                        !currIconPassClicked ?
                                            <FaEyeSlash />
                                            :
                                            <FaEye />
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="form-group mt-4">
                            <label className="mb-1" htmlFor='new-update-pass'>New password</label>
                            <div className="position-relative">
                                <input
                                    type={!newIconPassClicked ? "password" : "text"}
                                    className="form-control"
                                    id="new-update-pass"
                                    placeholder="Please enter new password"
                                />
                                <span
                                    className="span-icon"
                                    onClick={handleChangeNewIconPass}
                                >
                                    {
                                        !newIconPassClicked ?
                                            <FaEyeSlash />
                                            :
                                            <FaEye />
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="form-group mt-4">
                            <label className="mb-1" htmlFor='conf-update-pass'>Confirm Password</label>
                            <div className="position-relative">
                                <input
                                    type={!newIconPassClicked ? "password" : "text"}
                                    className="form-control"
                                    id="conf-update-pass"
                                    placeholder="Please confirm your password"
                                />
                            </div>
                        </div>
                        <button className="update-btn mt-5">Update Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormUpdatePass;