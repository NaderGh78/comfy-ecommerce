import { Link } from 'react-router-dom';
import './notFound.css';

/*======================================*/
/*======================================*/
/*======================================*/

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className="not-found-box">
        <h1>404</h1>
        <div>
          <h4>page not found</h4>
          <p>we couldn't find what you were looking for.</p>
        </div>
        <p>Please contact the owner of the site that linked you to the original URL and let them know their link is broken,or <Link to="/">go to home page.</Link></p>

      </div>
    </div>
  )
}

export default NotFound;