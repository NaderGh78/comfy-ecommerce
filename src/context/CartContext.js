import { createContext, useState, useEffect, useContext } from "react";
import { AllProductsItems } from "../config/data";
import { OpenModalContext } from "./OpenModalContext";
import { AuthContext } from "./AuthContext";

/*======================================*/
/*======================================*/
/*======================================*/

/*
this context is for the table cart to do the following :
- draw the [cart] in table 
- increase and decrease the product number
- make the (+ -) button diseabled or not based on [in stock] of every product 
*/
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const { setShowCartModal, setShowRegisterModal } = useContext(OpenModalContext);

    const { existUser } = useContext(AuthContext);

    // make localstorge as variable
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("products") || '[]');

    const [cart, setCart] = useState(cartFromLocalStorage);

    const [addProducts, setAddProducts] = useState(AllProductsItems);

    const [isDiseable, setIsDesable] = useState(false);

    const [isBtnEmptyCart, setIsBtnEmptyCart] = useState(false);

    /*******************************************/
    /*******************************************/

    // add to cart main func
    const handleAddTocart = (id) => {

        // find product
        const product = addProducts.find((p) => p.pId === id);

        const checkProduct = cart.find((p) => p.pId === id);

        product.pInLocalStorage = true;

        //check product if already added or not in order to show alert msg
        if (checkProduct) {

            setShowCartModal(true)

            return;

        }
        /*
            first check if there is user register or not , if yes add to cart with some delay
            we delay add the product to cart ,that because
            when we click on [add to cart] btn , there is a spinner run for a few time and show 
            text with icon [icon + in cart],this operation take 600 milsecond,
            therfore we make delay in order to add the product to cart after FINISH [spinner and then (icon + in cart)]
        */
        if (existUser) {

            setTimeout(() => {

                setCart((prev) => {

                    return [...prev, product];

                });

            }, 600);

        } else {

            // here if DONT have user register ,show the registration modal
            setShowRegisterModal(true);

        }

    };

    /*******************************************/
    /*******************************************/

    // handle increase
    const handleIncreaseCounter = (id) => {

        setCart((prev) => {

            return prev.map((p) => {

                if (p.pId === id) {

                    return { ...p, pQty: p.pQty + 1 };

                }

                return p;

            });

        });

    };

    /*******************************************/
    /*******************************************/

    // decrease the number of product , when decrease the counter
    const handleDecreaseCounter = (id) => {

        setCart((prev) => {

            return prev.map((p) => {

                if (p.pId === id) {

                    // if the p.pQty equal 1 stay it as 1 oterwise if it will be[2,3,4,5,6,...] decrease by one
                    return { ...p, pQty: p.pQty === 1 ? 1 : p.pQty - 1 };

                }

                return p;

            });

        });

    }

    /*******************************************/
    /*******************************************/

    // get all total price for all chosen products 
    const total = cart.reduce((prev, product) => {

        const netPriceAfterSale = (product.pPrice - (product.pPrice * (product.pSalePrice / 100))).toFixed(2);

        if (product.pSalePrice) {

            return prev + netPriceAfterSale * product.pQty;

        } else {

            return prev + product.pPrice * product.pQty;

        }

    }, 0);

    const fixedTotal = Number(total.toFixed(2));

    /*******************************************/
    /*******************************************/

    useEffect(() => {

        // by default make the is disable true , in order to show the [minus btn] disable when load page
        setIsDesable(true);

        //save the cart in localstorage
        localStorage.setItem("products", JSON.stringify(cart));

    }, [cart])

    /*******************************************/
    /*******************************************/

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            handleAddTocart,
            isDiseable,
            setIsDesable,
            isBtnEmptyCart,
            setIsBtnEmptyCart,
            handleIncreaseCounter,
            handleDecreaseCounter,
            fixedTotal
        }}>
            {children}
        </CartContext.Provider>
    )
} 