import './account.css';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { OpenModalContext } from '../../context/OpenModalContext';

/*======================================*/
/*======================================*/
/*======================================*/

const Account = () => {

  // this is my varible for testing
  const therIsProduct = true;

  const location = useLocation();

  const navigate = useNavigate();

  /*
  this variable in order to redirect the user to home page in case user logout succecfuly
  and prevent the user to back to account page again when logout 
  */
  const redirectPath = location.state?.path || "/";

  // get the name of path in page in oreder to put the active class on link that matching
  const getLinkPath = location.pathname.split("/")[2];

  const { logout } = useContext(AuthContext);

  const { setShowRegisterModal } = useContext(OpenModalContext);

  let getUserEmail = localStorage.getItem('user') !== null && (JSON.parse(localStorage.getItem("user"))).r_email;

  let getUserName = localStorage.getItem('user') !== null && (JSON.parse(localStorage.getItem("user"))).r_username;

  const handleLogout = (e) => {

    logout()

    setShowRegisterModal(false);

    navigate(redirectPath, { replace: true });

  }

  return (
    <div className='account-main'>
      <div className="account-main-box">
        <div className="account-user-info">
          <div>
            <h2>Account</h2>
            <p><span className='text-capitalize'>{getUserName}</span> ,<span>{getUserEmail}</span></p>
          </div>
          <button onClick={handleLogout}>logout</button>
        </div>
        <div className="account-tabs">
          <div>
            <ul className="account-link-lists list-unstyled m-0 d-flex">
              <li>
                <Link
                  to="/account/myOrder"
                  className={getLinkPath === "myOrder" ? "active" : ""}
                >
                  My Order
                </Link>
              </li>
              <li>
                <Link
                  to="/account/accountInfo"
                  className={getLinkPath === "accountInfo" ? "active" : ""}
                >
                  Account info
                </Link>
              </li>
              <li>
                <Link
                  to="/account/changePassword"
                  className={getLinkPath === "changePassword" ? "active" : ""}
                >
                  Change password
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
        {/* end account tabs */}
      </div>
    </div>
  )
}

export default Account;