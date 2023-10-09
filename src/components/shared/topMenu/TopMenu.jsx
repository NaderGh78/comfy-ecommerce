import './topMenu.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, FaMagnifyingGlass, FaCartShopping, FaUnlock } from "react-icons/fa6";
import { OpenModalContext } from "../../../context/OpenModalContext";
import { AuthContext } from '../../../context/AuthContext';
import { CartContext } from '../../../context/CartContext';
import Logo from "../../../assets/images/main-logo.png";

/*======================================*/
/*======================================*/
/*======================================*/

const TopMenu = () => {

  const { setShowCartModal, setShowRegisterModal } = useContext(OpenModalContext);

  const { existUser } = useContext(AuthContext);

  const { cart } = useContext(CartContext);

  // in order to make active class when navigate pages
  const [url, setUrl] = useState(null);

  // in order to close the menu and go smoothly when click on link inside it
  const [expanded, setExpanded] = useState(false);

  const location = useLocation("/");

  // give active class for link depend on location,and change the overflow of body depend is cart modal show or not
  useEffect(() => {

    setUrl(location.pathname);

  }, [location]);

  return (
    <div className='topmenu'>
      {/* make at the top of page with fixed-top*/}
      <Navbar expand="lg" className="bg-body-tertiary bg-white fixed-top" expanded={expanded}>
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}><img src={Logo} width="30"
            height="30" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* make the ul in center of navbar with mx-auto*/}
            <Nav className="mx-auto">

              <Nav.Link
                as={Link}
                to={"/"}
                className={url === "/" ? "active" : ""}
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                // to={"/shop?category=all&brand=all&sortBy=Default&price=0"}
                to={"/shop?category=all&brand=all&sortBy=default&price=0&page=1"}
                className={url === "/shop" ? "active" : ""}
                onClick={() => setExpanded(false)}
              >
                Shop
              </Nav.Link>

              <Nav.Link
                as={Link}
                to={"/about"} className={url === "/about" ? "active" : ""}
                onClick={() => setExpanded(false)}
              >
                About
              </Nav.Link>

              <Nav.Link
                as={Link}
                to={"/contact"} className={url === "/contact" ? "active" : ""}
                onClick={() => setExpanded(false)}
              >
                Contact
              </Nav.Link>

              <Nav.Link
                as={Link}
                to={"/faq"}
                className={url === "/faq" ? "active" : ""}
                onClick={() => setExpanded(false)}
              >
                FAQ
              </Nav.Link>

            </Nav>
            {/* end first nav */}

            <Nav className='hide-on-resize gap-2'>
              <Nav.Link
                as={Link}
                to={existUser && "/account/myOrder"}
                className='register-login'
              >
                {
                  // if there is user show icon otherwise show register div 
                  !existUser
                  &&
                  <div>
                    <FaUnlock />
                    <p onClick={() => setShowRegisterModal(true)}>Login / Register</p>
                  </div>
                }
                {existUser && <FaUser />}
              </Nav.Link>

              <Nav.Link as={Link} to={"/search"}><FaMagnifyingGlass /></Nav.Link>

              <Nav.Link href="" className='icon-badge'>
                <FaCartShopping
                  onClick={
                    () => existUser
                      ?
                      setShowCartModal(true)
                      :
                      setShowRegisterModal(true)
                  }
                />
                <span>{existUser ? cart.length : "0"}</span>
              </Nav.Link>

            </Nav>
            {/* end second nav */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopMenu;