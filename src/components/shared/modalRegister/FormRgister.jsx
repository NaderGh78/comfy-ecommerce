import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { AuthContext } from "../../../allPagesPaths";
import { v4 } from "uuid";

/*======================================*/
/*======================================*/
/*======================================*/

const FormRgister = (props) => {

    const { formData, setFormData, setIsRegisterSubmit } = useContext(AuthContext);

    const [errors, setErrors] = useState({});

    const handleRegisterSubmit = (e) => {

        e.preventDefault();

        const validationErrors = {}

        // username validate
        if (!formData.r_username.trim()) {
            validationErrors.r_username = "Full name is required"
        } else if (formData.r_username.length < 3) {
            validationErrors.r_username = "Full name must be at least 3 characters"
        } else if (!/^[A-Za-z\s]*$/.test(formData.r_username)) {
            validationErrors.r_username = "Full name should be letters and space"
        }

        /*=================================*/

        // email validate
        if (!formData.r_email.trim()) {
            validationErrors.r_email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.r_email)) {
            validationErrors.r_email = "email is not valid"
        }

        /*=================================*/

        // password validate
        if (!formData.r_pass.trim()) {
            validationErrors.r_pass = "Password is required"
        } else if (formData.r_pass.length < 8) {
            validationErrors.r_pass = "Password must be at least 8 characters long"
        } else if (!/(?=[A-Za-z0-9@$!%*?&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&+!=])(?=.{8,}).*$/g.test(formData.r_pass)) {
            validationErrors.r_pass = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol from (@$!%*?&) ."
        }

        /*=================================*/

        // confirm password validate
        if (!formData.r_Cpass.trim()) {
            validationErrors.r_Cpass = "Confirm Password is required"
        } else if (formData.r_Cpass !== formData.r_pass) {
            validationErrors.r_Cpass = "password not matched"
        }

        /*=================================*/

        setErrors(validationErrors);
        // if no error 
        if (Object.keys(validationErrors).length === 0) {

            /*
            when submit the form succefuly ,make the [isRegisterSubmit] true in order to use it in form parent [ModalRegister]
            in ordre to display an alert success msg when submit is already succefuly
            */
            setIsRegisterSubmit(true);

            /*
            this a trick in order to back the [isRegisterSubmit] to false after 1 second ,
            this will make the alert that show after success submit , show for 1 second and then hidden
            */
            setTimeout(() => { setIsRegisterSubmit(false) }, 1000);

            // this in order to back to the first tabs,when submit succefuly after 1200 milseconds
            setTimeout(() => { props.setCurrentTab(1) }, 1200);

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    return (
        <>
            <form action="" onSubmit={handleRegisterSubmit} noValidate>
                <div className="form-group">
                    <label className="mb-1" htmlFor='registerName'>Full Name<span className="text-danger"> *</span></label>
                    <input
                        type="text"
                        className="form-control"
                        value={formData.r_username}
                        name="r_username"
                        id="registerName"
                        placeholder="please enter your fullName"
                        onChange={handleChange}
                    />
                    {errors.r_username && <p className="text-danger show-error">{errors.r_username}</p>}
                </div>
                <div className="form-group mt-2">
                    <label className="mb-1" htmlFor='registerEmail'>Email<span className="text-danger"> *</span></label>
                    <input
                        type="email"
                        className="form-control"
                        value={formData.r_email}
                        name="r_email"
                        id="registerEmail"
                        placeholder="please enter a valid email address"
                        onChange={handleChange}
                    />
                    {errors.r_email && <p className="text-danger show-error">{errors.r_email}</p>}
                </div>
                <div className="form-group mt-2">
                    <label className="mb-1" htmlFor='registerPass'>Password<span className="text-danger"> *</span></label>
                    <div className="position-relative">
                        <input
                            type={!props.RegisterIconClicked ? "password" : "text"}
                            className="form-control"
                            value={formData.r_pass}
                            name="r_pass"
                            id="registerPass"
                            placeholder="please enter a strong password"
                            onChange={handleChange}
                        />
                        <span
                            className="span-icon"
                            onClick={props.handleChangeIconRegisterPass}
                        >
                            {
                                !props.RegisterIconClicked
                                    ?
                                    <FaEyeSlash />
                                    : <FaEye />
                            }
                        </span>
                    </div>
                    {errors.r_pass && <p className="text-danger show-error">{errors.r_pass}</p>}
                </div>
                <div className="form-group mt-2">
                    <label className="mb-1" htmlFor='registerconPass'>Confirm Password<span className="text-danger"> *</span></label>
                    <input
                        type="password"
                        className="form-control"
                        value={formData.r_Cpass}
                        name="r_Cpass"
                        id="registerconPass"
                        placeholder="please confirm your password"
                        onChange={handleChange}
                    />
                    {errors.r_Cpass && <p className="text-danger show-error">{errors.r_Cpass}</p>}
                </div>
                <button className='bg-dark text-white w-100 border-0 py-2 mt-4 rounded-1'>Create New Account</button>
            </form>
            <div className="login-form-bottom">
                <span>or</span>
                <Link onClick={() => props.setCurrentTab(1)}>Login</Link>
            </div>
        </>
    )
}

export default FormRgister;