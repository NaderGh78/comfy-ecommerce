import './homepage.css';
import HeaderSection from '../../components/home/header/headerSection/HeaderSection';
import TopTrending from '../../../src/components/home/topTrending/TopTrending';
import BrandCategory from '../../components/home/brandCategory/BrandCategory';
import HomeCategory from '../../components/home/homeCategory/HomeCategory';
import HomeServices from '../../components/home/homeServices/HomeServices';
import BrandSlider from '../../components/shared/brandSlider/brandSlider/BrandSlider';
import InstaPosts from '../../components/shared/instaPosts/instaPosts/InstaPosts';

/*======================================*/
/*======================================*/
/*======================================*/

const HomePage = () => {
    return (
        <div className='homepage'>
            <HeaderSection />
            <TopTrending />
            <BrandCategory />
            <HomeCategory />
            <HomeServices />
            <BrandSlider />
            <InstaPosts />
        </div>
    )
}

export default HomePage;