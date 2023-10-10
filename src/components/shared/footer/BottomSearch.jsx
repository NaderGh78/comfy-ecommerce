import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { FaUser, FaShop, FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { AuthContext, CartContext, OpenModalContext } from '../../../allPagesPaths';

/*======================================*/
/*======================================*/
/*======================================*/

const BottomSearch = () => {

    const { cart } = useContext(CartContext);

    const { setShowCartModal, setShowRegisterModal } = useContext(OpenModalContext);

    const { existUser } = useContext(AuthContext);

    const { pathname } = useLocation();

    /*
    in samll screen when the bottom search menu show , 
    and the user not registre yet ,in shop page when user want to make register and he in show page
    it will show the modal register,but when it show the modal register it will show just 
    the [/shop] route,cos we made a lot of query like [/shop?category=all&brand=all&sortBy=default&price=0&page=1]
    here we check,if the user want to registe and he is in shop page ,show to register modal and STAAYYYYYYYYYYYY IN 
    [/shop?category=all&brand=all&sortBy=default&price=0&page=1]
    */
    const myPath = pathname.split("/")[1];

    return (
        <div className='bottom-search'>
            <div className="search">
                <ul className='ul-custom'>
                    <li>
                        {/* 
                        if exist user go to my order that in account page ,
                        coz the account page will open in case there is an user exist 
                        */}
                        <Link
                            to={
                                existUser
                                    ? "/account/myOrder"
                                    : myPath === "shop"
                                        ? "/shop?category=all&brand=all&sortBy=default&price=0&page=1"
                                        : null
                            }
                            className='my_link'
                        >
                            <FaUser onClick={() => setShowRegisterModal(true)} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/shop?category=all&brand=all&sortBy=default&price=0&page=1"}
                            className='my_link'
                        >
                            <FaShop />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/search"
                            className='my_link'
                        >
                            <FaMagnifyingGlass />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={myPath === "shop" && "/shop?category=all&brand=all&sortBy=default&price=0&page=1"}
                            className='my_link icon-badge'
                        >
                            {/* 
                             - cart shoping icon ,when click on it show the right modal 
                             that contain all product that user already chosen in case [EXIST USER]

                             - in case [DONT EXIST USER] open the registration modal
                            */}
                            <FaCartShopping
                                onClick={
                                    () => existUser
                                        ?
                                        setShowCartModal(true)
                                        :
                                        setShowRegisterModal(true)
                                } />
                            {/* the length of products that user already chosen */}
                            <span>{cart.length}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BottomSearch;