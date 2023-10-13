import PathConstants from "./pathConstants";
import {
    HomePage,
    Shop,
    About,
    Contact,
    Faq,
    Search,
    SingleProductDetails,
    ViewCart,
    Account,
    OrderAcoordion,
    FormAccount,
    FormUpdatePass,
    Checkout,
    CheckoutInformation,
    CheckoutShipping,
    OrderConfirmed,
    RequirAuth,
} from "../allPagesPaths";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const routes = [
    { path: PathConstants.HOME, element: <HomePage /> },
    { path: PathConstants.SHOP, element: <Shop /> },
    { path: PathConstants.ABOUT, element: <About /> },
    { path: PathConstants.CONTACT, element: <Contact /> },
    { path: PathConstants.FAQ, element: <Faq /> },
    { path: PathConstants.SEARCH, element: <Search /> },
    { path: PathConstants.SINGLEPRODUCT, element: <SingleProductDetails /> },
    { path: PathConstants.VIEWCART, element: <ViewCart /> },
    { path: PathConstants.ORDERCONFIRMED, element: <OrderConfirmed /> },
    {
        path: PathConstants.ACCOUNT, element: <RequirAuth><Account /></RequirAuth>,
        children: [
            { path: PathConstants.ACCOUNTORDER, element: <OrderAcoordion /> },
            { path: PathConstants.ACCOUNTINFO, element: <FormAccount /> },
            { path: PathConstants.ACCOUNTCHANGEPASS, element: <FormUpdatePass /> },
        ]
    },
    {
        path: PathConstants.CHECKOUT, element: <RequirAuth><Checkout /></RequirAuth>,
        children: [
            { path: PathConstants.CHECKOUTINFORMATION, element: <CheckoutInformation /> },
            { path: PathConstants.CHECKOUTSHIPPING, element: <CheckoutShipping /> }
        ]
    }
]

export default routes;
