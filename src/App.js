// use HashRouter NOT BrouwserRouter,coz the project upload on github
import { Routes, Route, useLocation } from "react-router-dom";
import { useContext } from "react";
import {
  HomePage,
  Shop,
  About,
  Contact,
  Faq,
  Account,
  OrderAcoordion,
  FormAccount,
  FormUpdatePass,
  Search,
  ViewCart,
  Checkout,
  CheckoutInformation,
  CheckoutShipping,
  OrderConfirmed,
  SingleProductDetails,
  NotFound,
  TopMenu,
  FooterSection,
  ScrollTop,
  OpenModalContext,
  AuthContext,
  ConfirmModalContext,
  ModalRegister,
  RequirAuth,
  CartModal,
  ConfirmDeleteMsg,
  ScrollToTopWhenNavigatePage,
  AlertMsg
} from "./allPagesPaths";

/*======================================*/
/*======================================*/
/*======================================*/

function App() {

  const { pathname } = useLocation();

  // here we make array of the paths, that will remove the [header and footer] from it pages
  const hideHeaderAndFooterForPaths = ['/checkout/information', '/checkout/shipping', '/order-confirmed'];

  const { showCartModal } = useContext(OpenModalContext);

  const { isRegisterSubmit, existUser, isLoginSubmit, x } = useContext(AuthContext);

  const { showConfirmDelete } = useContext(ConfirmModalContext);

  return (
    <div className="App">

      {/* show the [TopMenu] just in case if the hideHeaderAndFooterForPaths NOT include the pathname */}

      {!hideHeaderAndFooterForPaths.includes(pathname) && <TopMenu />}

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/faq" element={<Faq />} />

        {/* nested route to make the tabs and to protect the route */}
        <Route path="/account/*" element={<RequirAuth><Account /></RequirAuth>} >
          <Route path="myOrder" element={<OrderAcoordion />} />
          <Route path="accountInfo" element={<FormAccount />} />
          <Route path="changePassword" element={<FormUpdatePass />} />
        </Route>

        <Route path="/search" element={<Search />} />

        <Route path="/viewCart" element={<RequirAuth><ViewCart /></RequirAuth>} />

        {/* nested route to make the tabs */}
        <Route path="/checkout/*" element={<RequirAuth><Checkout /></RequirAuth>} >
          <Route path="information" element={<CheckoutInformation />} />
          <Route path="shipping" element={<CheckoutShipping />} />
        </Route>
        <Route path="/order-confirmed" element={<OrderConfirmed />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/product-details/:id" element={<SingleProductDetails />} />

      </Routes>

      {/* if not exist user show register modal */}
      {!existUser && <ModalRegister />}

      {/* show the right list product modal in case showCartModal is true */}
      {showCartModal && <CartModal />}

      {/* 
      here the showConfirmDelete is an obj as we in [carcontext page] 
      here we make condition to show the confirm delete mesg , 
      just in case the [show] propety that inside the [showConfirmDelete] is true 
      */}
      {showConfirmDelete.show && <ConfirmDeleteMsg />}

      {/* show an alert success msg when registration is done */}
      {isRegisterSubmit && <AlertMsg contentMsg="Register submitted successfully!" />}

      {/* 
        1 - in case the login btn clicked , but email and password fields NOOOT MATCHING ,
          show [Email or Password not correct.Please try again.]

        2 - in case the login btn clicked and the field ARE MATHCHING ,show [Login successfully!]
        */}

      {isLoginSubmit && existUser ? <AlertMsg contentMsg="Login successfully!" /> : ""}

      {isLoginSubmit && !existUser ? <AlertMsg contentMsg="Email or Password not correct.Please try again." /> : ""}

      {/* show success msg when user fill the contact form successfuly */}
      {x && <AlertMsg contentMsg="Thanks for contacting us.we'll get back to you as soon as possible." />}

      {/* scroll to top in same page  */}
      <ScrollTop />

      {/* scroll to top when NAVIGATEEEEEEE between the pages */}
      <ScrollToTopWhenNavigatePage />

      {/* show the [FooterSection] just in case if the hideHeaderAndFooterForPaths NOT include the pathname */}
      {!hideHeaderAndFooterForPaths.includes(pathname) && <FooterSection />}

    </div>
  );
}

export default App;
