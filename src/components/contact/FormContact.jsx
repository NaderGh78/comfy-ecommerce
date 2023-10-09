import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";

/*======================================*/
/*======================================*/
/*======================================*/

const FormContact = () => {

    const { setIsContactFormSubmit, x, setX } = useContext(AuthContext);

    const [contactFormData, setContactFrormData] = useState({ contact_username: "", contact_email: "", contact_msg: "" });

    const [errors, setErrors] = useState({});

    // contact form btn spiner
    const [isSubmitBtnClicked, setIsSubmitBtnClicked] = useState(false);

    const [isSubmitSpinnerShow, setIsSubmitSpinnerShow] = useState(false);

    useEffect(() => {

        let timer;

        if (isSubmitBtnClicked) {

            setIsSubmitSpinnerShow(true);

            timer = setTimeout(() => {

                setIsSubmitSpinnerShow(false);

                setX(true);

                // remove the success submit msg after 2300 milsecods , after update it to false
                setTimeout(() => { setX(false) }, 4000);

            }, 1700);

        }

        return () => clearTimeout(timer);

    }, [isSubmitBtnClicked])

    const handleContactFrom = (e) => {

        e.preventDefault();

        const contactFormValidationsErrors = {}

        // username validate
        if (!contactFormData.contact_username.trim()) {
            contactFormValidationsErrors.contact_username = "Name is required"
        } else if (contactFormData.contact_username.length < 3) {
            contactFormValidationsErrors.contact_username = "Name must be at least 3 characters"
        } else if (!/^[A-Za-z\s]*$/.test(contactFormData.contact_username)) {
            contactFormValidationsErrors.contact_username = "Name should be letters and space"
        }

        /*=================================*/

        // email validate
        if (!contactFormData.contact_email.trim()) {
            contactFormValidationsErrors.contact_email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(contactFormData.contact_email)) {
            contactFormValidationsErrors.contact_email = "Email is not valid"
        }

        /*=================================*/

        // username validate
        if (!contactFormData.contact_msg.trim()) {
            contactFormValidationsErrors.contact_msg = "Message is required"
        } else if (contactFormData.contact_msg.length < 20) {
            contactFormValidationsErrors.contact_msg = "Message must be at least 20 characters"
        }

        setErrors(contactFormValidationsErrors);

        if (Object.keys(contactFormValidationsErrors).length === 0) {

            // empty all input value after success submit
            setContactFrormData({
                contact_username: "",
                contact_email: "",
                contact_msg: ""
            })

            setIsSubmitBtnClicked(true);

            setIsContactFormSubmit(true);

        }
    } //end submit    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactFrormData({
            ...contactFormData, [name]: value
        })
    }

    return (
        <div className="contact-form">
            <form action="" onSubmit={handleContactFrom}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="contact_username"
                        value={contactFormData.contact_username}
                        placeholder="Name"
                        onChange={handleChange}
                    />
                </div>
                {errors.contact_username && <p className="text-danger show-error">{errors.contact_username}</p>}
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        name="contact_email"
                        value={contactFormData.contact_email}
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </div>
                {errors.contact_email && <p className="text-danger show-error">{errors.contact_email}</p>}
                <div className="form-group">
                    <textarea
                        name="contact_msg"
                        value={contactFormData.contact_msg}
                        cols="30"
                        rows="5"
                        placeholder='Message'
                        onChange={handleChange}
                    ></textarea>
                </div>
                {errors.contact_msg && <p className="text-danger show-error">{errors.contact_msg}</p>}
                <button className='bg-dark text-white w-100 border-0 py-2 mt-4 rounded-1'>
                    {!isSubmitBtnClicked && "Send Message"}
                    {isSubmitBtnClicked & isSubmitSpinnerShow ? <><Spinner animation="border" /><span>Sending...</span></> : ""}
                    {isSubmitBtnClicked & !isSubmitSpinnerShow ? "Send Message" : ""}
                </button>
            </form>
        </div>
    )
}

export default FormContact;