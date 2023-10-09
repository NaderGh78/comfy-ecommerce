import { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { AuthContext } from "../../../allPagesPaths";

/*======================================*/
/*======================================*/
/*======================================*/

const FormLogin = ({ loginIconClicked, handleChangeIconLoginPass, setCurrentTab }) => {

    const [loginFormData, setLoginFormData] = useState({ login_email: "", login_pass: "" });

    const { setExitstUser, setIsLoginSubmit } = useContext(AuthContext);

    const [loginErrors, setLoginErrors] = useState({});

    const userEmailRef = useRef();

    const userPassRef = useRef();

    // get the email and pass from localstorge,in case there is a key [user] in localstroge
    let getEmail = localStorage.getItem('user') !== null && (JSON.parse(localStorage.getItem("user"))).r_email;

    let getPass = localStorage.getItem('user') !== null && (JSON.parse(localStorage.getItem("user"))).r_pass;

    // handle login submit
    const handleLoginSubmit = (e) => {

        e.preventDefault();

        const validationLoginErrors = {}

        /*=================================*/

        // email validate
        if (!loginFormData.login_email.trim()) {
            validationLoginErrors.login_email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(loginFormData.login_email)) {
            validationLoginErrors.login_email = "email is not valid"
        }

        /*=================================*/

        // password validate
        if (!loginFormData.login_pass.trim()) {
            validationLoginErrors.login_pass = "Password is required"
        } else if (loginFormData.login_pass.length < 8) {
            validationLoginErrors.login_pass = "Password must be at least 8 characters long"
        } else if (!/(?=[A-Za-z0-9@$!%*?&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&+!=])(?=.{8,}).*$/g.test(loginFormData.login_pass)) {
            validationLoginErrors.login_pass = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol from (@$!%*?&) ."
        }

        /*=================================*/

        setLoginErrors(validationLoginErrors);

        // if no error 
        if (Object.keys(validationLoginErrors).length === 0) {

            // when clicke login btn
            setIsLoginSubmit(true);

            if (userEmailRef.current.value === getEmail && userPassRef.current.value === getPass) {
                setExitstUser(true);
            }

            setTimeout(() => { setIsLoginSubmit(false) }, 1700);

        }
    }

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({
            ...loginFormData, [name]: value
        })
    }

    return (
        <>
            <form action="" onSubmit={handleLoginSubmit} noValidate>
                <div className="form-group">
                    <label className="mb-1" htmlFor='loginEmail'>Email<span className="text-danger"> *</span></label>
                    <input
                        type="email"
                        className="form-control"
                        value={loginFormData.login_email}
                        name="login_email"
                        id="loginEmail"
                        placeholder="please enter your email address"
                        onChange={handleLoginChange}
                        ref={userEmailRef}
                    />
                    {loginErrors.login_email && <p className="text-danger show-error">{loginErrors.login_email}</p>}
                </div>

                <div className="form-group mt-2">
                    <label className="mb-1" htmlFor='loginPass'>Password<span className="text-danger"> *</span></label>
                    <div className="position-relative">
                        <input
                            type={!loginIconClicked ? "password" : "text"}
                            className="form-control"
                            value={loginFormData.login_pass}
                            name="login_pass"
                            id="loginPass"
                            placeholder="please enter a strong password"
                            onChange={handleLoginChange}
                            ref={userPassRef}
                        />
                        {/* in order to switch icon and change the type of input from password to text  */}
                        <span
                            className="span-icon"
                            onClick={handleChangeIconLoginPass}
                        >
                            {
                                !loginIconClicked
                                    ?
                                    <FaEyeSlash />
                                    :
                                    <FaEye />
                            }
                        </span>

                    </div>
                    {loginErrors.login_pass && <p className="text-danger show-error">{loginErrors.login_pass}</p>}
                </div>
                <button className='bg-dark text-white w-100 border-0 py-2 mt-4 rounded-1'>Login</button>
            </form>
            <div className="login-form-bottom">
                <span>or</span>
                <Link onClick={() => setCurrentTab(2)}>Create New Account</Link>
            </div>
        </>
    )
}

export default FormLogin;