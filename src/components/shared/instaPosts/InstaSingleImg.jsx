import { FaInstagram } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const InstaSingleImg = ({ data: { instaImg } }) => { 
  return (
    <div className="insta-single-post">
      <img src={instaImg} alt="" />
      <div className="overlay">
        <FaInstagram />
      </div>
    </div>
  )
}

export default InstaSingleImg;