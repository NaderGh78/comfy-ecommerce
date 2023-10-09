import { createContext, useState, useContext } from "react";
import { OpenModalContext } from "./OpenModalContext";
import { CartContext } from "./CartContext";

/*======================================*/
/*======================================*/
/*======================================*/

export const ConfirmModalContext = createContext();

export const ConfirmModalProvider = ({ children }) => {

    const { setShowCartModal } = useContext(OpenModalContext);

    const { cart, setCart } = useContext(CartContext);

    //  this for is the [confirm order btn clicked or not]
    const [isConfirmOrderBtnClicked, setIsConfirmBtnOrderClicked] = useState(false);

    //  this to show the spinner inside the [confirm order btn]
    const [isConfirmSpinnerShow, setIsConfirmSpinnerShow] = useState(false);

    // this is in order to make operation inside button like [spinner] in single product details page
    const [isBtnProductDetailsClicked, setIsBtnProductDetailsClicked] = useState(false);

    const [isProductDetailsSpinnerShow, setsProductDetailsSpinnerShow] = useState(false);

    const [newDiv, setNewDiv] = useState(false);

    // this when we click on [minus btn] that in single product details page 
    const [isMinusClicked, setIsMinusClicked] = useState(false);

    const [showConfirmDelete, setShowConfirmDelete] = useState({
        show: false,
        id: null,
        all: false,
        confirmText: "",
        justCloseConfirm: false,
        deleteThisProduct: false
    });

    /*=======================================*/
    /*=======================================*/

    const handleCloseConfirmDelete = () => {

        setShowConfirmDelete({
            show: false,
            id: null,
            all: false,
            confirmText: "",
            justCloseConfirm: false,
            deleteThisProduct: false
        })

        setIsConfirmBtnOrderClicked(false);

    };

    // This will show the [Cofirmation delete modal],when click on EVERRRRY product we need to remove it
    const handleClickDelte = (id) => {

        /*
        find the element that we clicked ,and get the name of the product that will show in [confirmation delete modal] ,
        like [Are you sure you want to remove [bla bla] product]  
        */
        const findName = cart.find(ele => ele.pId == id);

        // after we get the name of product , update the confirmText with it
        const txt = <>Are you sure you want to delete <span className='text-danger'>{findName.pName}</span> from cart?</>

        setShowConfirmDelete({
            show: true,//open the confirmation modal
            id,
            all: false,//this will use it when we need to REMOVE ALL PRODUCTS ,when click on [empty all cart] btn
            confirmText: txt,
            justCloseConfirm: false,
            deleteThisProduct: false
        });

    };

    // this func is when click on [Empty Shopping Cart] btn
    const handleClickDelteAll = () => {

        setShowConfirmDelete({
            show: true,
            id: null,
            all: true,
            confirmText: "Are you sure you want to remove all items from your cart?",
            justCloseConfirm: false,
            deleteThisProduct: false
        });

    }

    const handleJustClose = () => {

        setShowConfirmDelete({
            show: true,
            id: null,
            all: false,
            confirmText: "Are you sure you want to purchase?",
            justCloseConfirm: true,
            deleteThisProduct: false
        });

    };

    // this in order to close the confirm ,when we need to remove a product from [single product details page] 
    const handleJustCloseWhenRemoveFromSingleDetails = (id) => {

        setShowConfirmDelete({
            show: true,
            id,
            all: false,
            confirmText: "Are you sure you want to delete from cart?",
            justCloseConfirm: false,
            deleteThisProduct: true
        });

    };

    const handleDeleteTrue = () => {

        /*
        this mean we click on every product to remove 
        cos here the id is exist 
        */
        if (showConfirmDelete.show && showConfirmDelete.id) {

            let filteredData = cart.filter((ele) => ele.pId !== showConfirmDelete.id);

            // update arr
            setCart(filteredData);

            // back showConfirmDelete to initial value , when success remove product
            setShowConfirmDelete({
                show: false,
                id: null,
                all: false,
                confirmText: "",
                justCloseConfirm: false,
                deleteThisProduct: false
            });

        }

        if (showConfirmDelete.show && showConfirmDelete.all) {

            setCart([]);

            setShowConfirmDelete({
                show: false,
                id: null,
                all: false,
                confirmText: "",
                justCloseConfirm: false,
                deleteThisProduct: false
            });

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        }

        if (showConfirmDelete.show && showConfirmDelete.justCloseConfirm) {

            setShowConfirmDelete({
                show: false,
                id: null,
                all: false,
                confirmText: "",
                justCloseConfirm: false,
                deleteThisProduct: false
            });

            setIsConfirmBtnOrderClicked(true);

        }

        if (showConfirmDelete.show && showConfirmDelete.deleteThisProduct && showConfirmDelete.id) {

            let filteredData = cart.filter((ele) => ele.pId !== showConfirmDelete.id);

            // update arr
            setCart(filteredData);

            setShowConfirmDelete({
                show: false,
                id: null,
                all: false,
                confirmText: "",
                justCloseConfirm: false,
                deleteThisProduct: false
            });

        }

    };

    /*******************************************/
    /*******************************************/

    return (
        <ConfirmModalContext.Provider value={{
            isConfirmOrderBtnClicked, setIsConfirmBtnOrderClicked,
            isConfirmSpinnerShow, setIsConfirmSpinnerShow,
            handleCloseConfirmDelete,
            handleClickDelte,
            handleDeleteTrue,
            handleClickDelteAll,
            handleJustClose,
            showConfirmDelete,
            isBtnProductDetailsClicked,
            setIsBtnProductDetailsClicked,
            isProductDetailsSpinnerShow,
            setsProductDetailsSpinnerShow,
            newDiv,
            setNewDiv,
            handleJustCloseWhenRemoveFromSingleDetails,
            isMinusClicked, setIsMinusClicked
        }}>
            {children}
        </ConfirmModalContext.Provider>
    )
}