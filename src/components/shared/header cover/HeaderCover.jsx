import './headerCover.css';
import { Link } from 'react-router-dom';

/*======================================*/
/*======================================*/
/*======================================*/

const HeaderCover = (props) => {
  const { headingContent } = props;
  return (
    <div className='header-cover'>
      <h2>{headingContent}</h2>
      <p><Link to="/" className='my_link'>Home</Link> / {headingContent}</p>
    </div>
  )
}

export default HeaderCover;