import './addToCartBtn.css';
import { useEffect, useState, useContext } from 'react';
import { FaCartShopping, FaPlus } from "react-icons/fa6";
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../../context/AuthContext';

/*======================================*/
/*======================================*/
/*======================================*/

const AddToCartBtn = ({ data: { pId }, handleAddTocart }) => {

  const { existUser } = useContext(AuthContext);

  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const [isSpinnerShow, setIsSpinnerShow] = useState(false);

  const [newTextBtn, setNewTextBtn] = useState(false);

  useEffect(() => {

    let timer;

    if (isBtnClicked) {

      setIsSpinnerShow(true);

      timer = setTimeout(() => {

        setNewTextBtn(true);

      }, 500);

    }

    return () => clearTimeout(timer);

  }, [isBtnClicked, newTextBtn])

  /*
  this function will make the operation inside [add to cart] button ,
  like the [spinner and icon + in cart] that ill appear in btn whe click
  */
  const handleClickOperation = () => {
    if (existUser) {
      setIsBtnClicked(true);
    }
  }

  const handleAll = () => {

    handleClickOperation();

    /*
    make restrict to add porduct in case the user dosent register yet 
    in case there is no user register, no product will added,
    and the [operation] won't happening in [add to cart btn] like [spinner with icon + in cart]
    therefore when user try to add to cart WITHOUT REGISTER the register modal will show 
    */
    handleAddTocart(pId);

  }

  return (
    <div className='add-to-cart-button'>
      <button onClick={handleAll} className='my-atcBtn' id={pId}>
        {!isBtnClicked && <span><FaPlus />add to cart</span>}
        {isBtnClicked & isSpinnerShow & !newTextBtn ? <Spinner animation="border" /> : ""}
        {isBtnClicked & isSpinnerShow & newTextBtn ? <span><FaCartShopping /> in cart</span> : ""}
      </button>
    </div>
  )
}

export default AddToCartBtn;