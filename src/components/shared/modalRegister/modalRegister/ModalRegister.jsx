import './modalRegister.css';
import { useContext, useState } from 'react';
import FormRgister from '../../modalRegister/FormRgister';
import FormLogin from '../../modalRegister/FormLogin';
import { OpenModalContext } from '../../../../allPagesPaths';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

/*======================================*/
/*======================================*/
/*======================================*/

const ModalRegister = () => {

    const { showRegisterModal, handleShowRegisterModal, handleCloseRegisterModal } = useContext(OpenModalContext);

    // thiis for the tab login input 
    const [loginIconClicked, setLoginIconClicked] = useState(false);

    // thiis for the tab register input 
    const [RegisterIconClicked, setRegisterIconClicked] = useState(false);

    // in order to swith betweeen tabs,initialy show the tab 1
    const [currentTab, setCurrentTab] = useState(1);

    const handleChangeIconLoginPass = () => {
        setLoginIconClicked(!loginIconClicked);
    }

    const handleChangeIconRegisterPass = () => {
        setRegisterIconClicked(!RegisterIconClicked);
    }

    // thsi function it will close the register modal, and when clsoe the modal back to first tab when click close btn
    const handleClick = () => {
        // back to initial tab , in case close the modal
        setCurrentTab(1);

        // close the modal
        handleCloseRegisterModal();
    }

    return (
        <div className='modal-register'>
            {/* backdrop="static" in order to prevent to close the modal when click on body modal  */}
            <Modal
                show={showRegisterModal}
                onHide={handleShowRegisterModal}
                scrollable={true}
                centered
                className='modal-register-box'
                backdrop="static"
            >
                {/* when clsoe the modal back to first tab when click close btn */}
                <Modal.Header closeButton onClick={handleClick}>
                </Modal.Header>
                <Modal.Body>
                    {/* in order to switch between tabs */}
                    <Tabs
                        defaultActiveKey={1}
                        activeKey={currentTab}
                        onSelect={(key) => setCurrentTab(key)}
                        id="uncontrolled-tab-example"
                    >
                        <Tab eventKey={1} title="LOGIN">
                            <FormLogin
                                loginIconClicked={loginIconClicked}
                                handleChangeIconLoginPass={handleChangeIconLoginPass}
                                setCurrentTab={setCurrentTab}
                            />
                        </Tab>
                        <Tab eventKey={2} title="REGISTER">
                            <FormRgister
                                RegisterIconClicked={RegisterIconClicked}
                                handleChangeIconRegisterPass={handleChangeIconRegisterPass}
                                setCurrentTab={setCurrentTab}
                            />
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalRegister;