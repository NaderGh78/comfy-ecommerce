import { createContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

/*======================================*/
/*======================================*/
/*======================================*/

export const OpenModalContext = createContext();

export const OpenModalContextProvider = ({ children }) => {

    // search params  
    const [searchParams, setSearchParams] = useSearchParams();

    const categoryQuery = searchParams.get("category");

    const brandQuery = searchParams.get("brand");

    const selectQuery = searchParams.get("sortBy");

    const priceQuery = searchParams.get("price");

    /*-------------------------------*/

    // for cart modal
    const [showCartModal, setShowCartModal] = useState(false);

    const handleShowCartModal = () => {
        setShowCartModal(true);
    }

    const handleCloseShowCartModal = () => {
        setShowCartModal(false);
    }

    /*-------------------------------*/

    // for register modal
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    //  these functios to close and show the [modal that contain the register],it will show depend if there is an user or not
    const handleShowRegisterModal = () => {
        setShowRegisterModal(true);
    }

    const handleCloseRegisterModal = () => {
        setShowRegisterModal(false);
    }

    /*-------------------------------*/

    // this for slider product details
    const [openProductSlider, setOpenProductSlider] = useState(false);

    // this will open the slider that in every product details
    const handleOpenSlider = () => {
        setOpenProductSlider(true);
    }

    const handleCloseSlider = () => {
        setOpenProductSlider(false);
    }

    // when the slider of img of every prodcut open,,,,, hide the body
    useEffect(() => {

        if (document) {

            document.body.style.overflow = openProductSlider ? "hidden" : "auto";

        }

    }, [openProductSlider])

    /*-------------------------------*/

    return (
        <OpenModalContext.Provider value={{
            showCartModal,
            setShowCartModal,
            handleShowCartModal,
            handleCloseShowCartModal,
            showRegisterModal,
            setShowRegisterModal,
            handleShowRegisterModal,
            handleCloseRegisterModal,
            openProductSlider,
            setOpenProductSlider,
            handleOpenSlider,
            handleCloseSlider,
            searchParams,
            setSearchParams,
            categoryQuery,
            selectQuery,
            brandQuery,
            priceQuery
        }}
        >
            {children}
        </OpenModalContext.Provider>
    )
}