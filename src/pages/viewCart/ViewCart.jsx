import './viewCart.css';
import HeaderCover from '../../components/shared/header cover/HeaderCover';
import TableViewCart from '../../components/viewCart/TableViewCart';

/*======================================*/
/*======================================*/
/*======================================*/

const ViewCart = () => {

    return (
        <div className='view-cart'>
            <HeaderCover headingContent="Cart" />
            <div className="view-cart-box">
                <TableViewCart />
            </div>
        </div>
    )
}

export default ViewCart;