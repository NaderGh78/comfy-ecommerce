import './confirmDeleteMsg.css';
import { useContext } from 'react';
import { ConfirmModalContext } from '../../../context/ConfirmModalContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/*======================================*/
/*======================================*/
/*======================================*/

const ConfirmDeleteMsg = () => {

    const {
        showConfirmDelete,
        handleCloseConfirmDelete,
        handleDeleteTrue } = useContext(ConfirmModalContext);

    return (
        <div className='confirm-delete-msg'>
            <Modal
                show={showConfirmDelete}
                onHide={handleCloseConfirmDelete}
                animation={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered backdrop="static"
                className='confirm-delete-msg-modal'
            >
                <Modal.Header closeButton className='border-bottom-0'>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    {/* 
                    here the text that will show in [confrim modal] based in every func what will do like 
                    - in case we need to delete product one by one, show [Are you sure you want to delete bla bla from cart?]
                    - in case we need to delete alllllllll products from cart in same time , show 
                    [Are you sure you want to remove all items from your cart?]

                    - in case we need to [confirm the order] in checkout JUST CLOSE THE MODAL ,show [Are you sure you want to purchase?]
                    */}
                    {showConfirmDelete.confirmText}
                </Modal.Body>
                <Modal.Footer className='border-top-0 justify-content-center gap-3'>
                    {/* 
                     here we make ONE FUNCTION for all operation as the following:
                     1- it will show the confirm modadl
                     2- it will show the [confirm modadl] when we need to delete product [one by one]
                     3- it will show the [confirm modadl] when we need to delete ALLLL product [empty all cart]
                     4- it will show the [confirm modadl] when we need to [confirm THE order in checkout page],
                     this it will do [JUST CLOSE THE MODAL] 
                    */}
                    <Button variant="dark" onClick={handleDeleteTrue}>
                        Confirm
                    </Button>
                    <Button variant="dark" onClick={handleCloseConfirmDelete}>
                        cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ConfirmDeleteMsg;