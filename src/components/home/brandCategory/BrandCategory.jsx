import './brandCategory.css';
import Container from '../../../components/helpers/container/Container';
import { Link } from 'react-router-dom';
import Freindly from "../../../assets/images/brandcategory/eco-freindly.jpg";
import Outdoor from "../../../assets/images/brandcategory/outdoor.jpg";
import { LiaArrowRightSolid } from "react-icons/lia";

/*======================================*/
/*======================================*/
/*======================================*/

const BrandCategory = () => {
    return (
        <div className='brand-category'>
            <Container>
                <div className="brand-category-box">
                    <div className="left">
                        <img src={Freindly} alt="" />
                        <div className="box-desc">
                            <strong>MID-SEASON</strong>
                            <h3>Eco-Friendly</h3>
                            <Link
                                to={"/shop?category=all&brand=all&sortBy=default&price=0&page=1"}
                                className='shop-now'
                            >
                                Shop Now <LiaArrowRightSolid />
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <img src={Outdoor} alt="" />
                        <div className="box-desc">
                            <strong>TOP TRENDING</strong>
                            <h3>Outdoor</h3>
                            <Link
                                to={"/shop?category=all&brand=all&sortBy=default&price=0&page=1"}
                                className='shop-now'
                            >
                                Shop Now <LiaArrowRightSolid />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BrandCategory;