import './contact.css';
import HeaderCover from '../../components/shared/header cover/HeaderCover';
import { FaLocationDot, FaHeadphones, FaRegEnvelope, FaRegClock } from "react-icons/fa6";
import FormContact from '../../components/contact/FormContact';

/*======================================*/
/*======================================*/
/*======================================*/

const Contact = () => {
  return (
    <div className='contact-main'>
      <HeaderCover headingContent="Contact" />
      <div className="contact-main-box">
        <div className="touch-info">
          <div className="left">
            <h3 className='underline-heading'>Get In Touch</h3>
            <FormContact />
          </div>
          {/* end left */}
          <div className="right">
            <h3 className='underline-heading'>Contact Info</h3>
            <div className="info-box">
              <div className="info-single">
                <FaLocationDot />
                <div className='box-flex'>
                  <h4 className='mb-0'>Address</h4>
                  <p className='mb-0'>london , manchester street.</p>
                </div>
              </div>
              {/* info single end */}
              <div className="info-single">
                <FaHeadphones />
                <div className='box-flex'>
                  <h4 className='mb-0'>Phone</h4>
                  <p className='mb-0'>1234567890</p>
                </div>
              </div>
              {/* info single end */}
              <div className="info-single">
                <FaRegEnvelope />
                <div className='box-flex'>
                  <h4 className='mb-0'>Email</h4>
                  <p className='mb-0'>nader.ghanawi78@gmail.com</p>
                </div>
              </div>
              {/* info single end */}
              <div className="info-single">
                <FaRegClock />
                <div className='box-flex'>
                  <h4 className='mb-0'>Opening Hours</h4>
                  <p className='mb-0'>Sun-Sat: 8.00am - 9.00.pm</p>
                </div>
              </div>
              {/* info single end */}
            </div>
          </div>
        </div>
        <div className="map-section">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52992.23057524535!2d35.46308258172096!3d33.88928269489302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut!5e0!3m2!1sen!2slb!4v1692833239899!5m2!1sen!2slb" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact;