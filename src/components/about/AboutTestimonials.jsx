import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";

/*======================================*/
/*======================================*/
/*======================================*/

const AboutTestimonials = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade: true,
        dots: true,
        autoplaySpeed: 1700,
        nextArrow: (
            <div>
                <div className="next-slick-arrow"> <LiaAngleRightSolid /> </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow"> <LiaAngleLeftSolid /> </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="about-testimonials-box">
            <Slider {...settings}>
                <div className="single-testimonial">
                    <h2>WHAT THEY'RE SAYING</h2>
                    <p>
                        "I recently purchased a sectional sofa from Comfy, and I couldn't be happier with my experience. The process of ordering online was so easy and stress-free, and the customer service team was incredibly helpful when I had some questions about delivery. When the sofa arrived, I was blown away by how comfortable it was. The cushions were so plush and cozy, and the fabric was soft to the touch. It's now become my favorite spot to relax and unwind at the end of the day. I highly recommend Comfy to anyone looking for stylish and comfortable furniture"
                    </p>
                    <div className="testimonials-info">
                        <h5>jon Doe</h5>
                        <span>Analyst</span>
                    </div>
                </div>
                {/* end single testimonial*/}

                <div className="single-testimonial">
                    <h2>WHAT THEY'RE SAYING</h2>
                    <p>
                        "I recently purchased a sectional sofa from Comfy, and I couldn't be happier with my experience. The process of ordering online was so easy and stress-free, and the customer service team was incredibly helpful when I had some questions about delivery."
                    </p>
                    <div className="testimonials-info">
                        <h5>Samir Ahmad</h5>
                        <span>Lawyer</span>
                    </div>
                </div>
                {/* end single testimonial*/}
            </Slider>
        </div>
    )
}

export default AboutTestimonials;