import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*======================================*/
/*======================================*/
/*======================================*/

const ScrollToTopWhenNavigatePage = () => {

  /*
  we get the [pathname] in order to scroll to top page when the route change
  and we get the [page from URLSearchParams] , 
  in order to scrol to top when navigate the pagination as well
  */

  const { pathname, search } = useLocation();

  const params = new URLSearchParams(search);

  const getPage = params.get('page');

  //Automatically scrolls to top whenever [pathname or getPage changes]
  useEffect(() => {

    window.scrollTo(0, 0);

  }, [pathname, getPage]);

}

export default ScrollToTopWhenNavigatePage