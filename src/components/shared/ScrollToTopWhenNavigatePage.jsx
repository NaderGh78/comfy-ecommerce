import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*======================================*/
/*======================================*/
/*======================================*/

const ScrollToTopWhenNavigatePage = () => {

  /*
  Extracts pathname and search property(key) from an object
  we put the [search property(key)] in case scroll to top 
  of page, when navigate the [pagination]
  */
  const { pathname, search } = useLocation();

  // Automatically scrolls to top whenever [pathname or search changes]
  useEffect(() => {

    window.scrollTo(0, 0);

  }, [pathname, search]);

}

export default ScrollToTopWhenNavigatePage