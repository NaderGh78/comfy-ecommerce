import { createContext, useEffect, useState } from "react";

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    // this in order to change it when submit form , in order to display an alert success msg for a while and hidden after 1 second   
    const [isRegisterSubmit, setIsRegisterSubmit] = useState(false);

    const [isLoginSubmit, setIsLoginSubmit] = useState(false);

    const [isContactFormSubmit, setIsContactFormSubmit] = useState(false);

    // save the existuser in localstorage 
    const [existUser, setExitstUser] = useState(JSON.parse(localStorage.getItem("exist")) || false);

    // save the user data in localstorage
    const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("user")) ||
        { r_username: "", r_email: "", r_pass: "", r_Cpass: "" });

    const [x, setX] = useState(false);

    useEffect(() => {

        localStorage.setItem('user', JSON.stringify(formData));

        localStorage.setItem('exist', JSON.stringify(existUser));

    }, [formData, existUser])

    const logout = (e) => {
        setExitstUser(false);
    }

    return (
        <AuthContext.Provider value={{
            formData,
            setFormData,
            isRegisterSubmit,
            setIsRegisterSubmit,
            existUser,
            setExitstUser,
            isLoginSubmit,
            setIsLoginSubmit,
            isContactFormSubmit,
            setIsContactFormSubmit,
            x,
            setX,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}