import { Link } from 'react-router-dom';
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

    return (
        <div className='bottom-search'>
            <div className="search">
                <ul className='ul-custom'>
                    <li>
                        <Link to={existUser && "/account/myOrder"} className='my_link'>
                            <FaUser onClick={() => setShowRegisterModal(true)} />
                        </Link>
                    </li>
                    <li><Link to="/shop" className='my_link'><FaShop /></Link></li>
                    <li><Link to="/search" className='my_link'><FaMagnifyingGlass /></Link></li>
                    <li>
                        <Link className='my_link icon-badge'>
                            <FaCartShopping
                                onClick={
                                    () => existUser
                                        ?
                                        setShowCartModal(true)
                                        :
                                        setShowRegisterModal(true)
                                } />
                            <span>{cart.length}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BottomSearch;