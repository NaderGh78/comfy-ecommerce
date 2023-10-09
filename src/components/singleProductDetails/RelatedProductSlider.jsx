import Container from "../../components/helpers/container/Container";
import SingleProductUi from "../../components/shared/SingleProductUi";

/*======================================*/
/*======================================*/
/*======================================*/

const RelatedProductSlider = (props) => {

    const { relatedProductCategory, Slider, settings, isMobile } = props;

    return (
        <div className="related-products">
            <h2 className='text-center mb-4'>Related Products</h2>
            <Container>
                <div className="related-products-slider text-center">
                    {/* 
                    here we make a condition if the related product number [greater than 4] prodcuts show the slider  
                    if the related product number is less than 4 [maping them] and put it in custom div in order 
                    to take some different sytle
                    in responsive we show the slider as well
                    */}
                    {relatedProductCategory.length >= 4 || isMobile ?
                        <>
                            <Slider {...settings}>
                                {relatedProductCategory.map((data) => (
                                    <SingleProductUi data={data} key={data.pId} />
                                ))}
                            </Slider>
                        </> :
                        <>
                            <div className='my-single d-flex justify-content-center gap-3'>
                                {relatedProductCategory.map((data) => (
                                    <SingleProductUi data={data} key={data.pId} />
                                ))}
                            </div>
                        </>
                    }
                </div>
            </Container>
        </div>
    )
}

export default RelatedProductSlider;