import './alertMsg.css';
import { useRef } from 'react';
import { FaXmark } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const AlertMsg = (props) => {

    const { contentMsg } = props;
    const alerCloseRef = useRef();

    // close the alert msg by click on x
    const handleCloseAlert = () => {
        alerCloseRef.current.style.display = "none"
    }

    return (
        <div className='alert-msg-box' ref={alerCloseRef}>
            <div className="alert-msg">
                <div className="title">
                    <h6 className='mb-0'>Comfy</h6>
                    <span><FaXmark onClick={handleCloseAlert} /></span>
                </div>
                <div className="alert-msg-body">
                    <p className='mb-0'>{contentMsg}</p>
                </div>
            </div>
        </div>
    )
}

export default AlertMsg;