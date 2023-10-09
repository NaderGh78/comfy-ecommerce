import './about.css';
import Container from '../../components/helpers/container/Container';
import HeaderCover from '../../components/shared/header cover/HeaderCover';
import AboutBg from "../../assets/images/about-bg.jpg";
import AboutTestimonials from '../../components/about/AboutTestimonials';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

/*======================================*/
/*======================================*/
/*======================================*/

const About = () => {
    return (
        <div className='about-page'>
            <HeaderCover headingContent="About" />
            <Container>
                <div className="about-page-box">
                    <div className="left">
                        <img src={AboutBg} alt="" />
                    </div>
                    <div className="right">
                        <Tabs
                            defaultActiveKey="History"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="History" title="History">
                                <p>
                                    Our company was founded <b>in 2019</b> by a group of young designers who were passionate about creating modern, affordable furniture. They started out with a small line of minimalist furniture, including tables, chairs, and sofas, that quickly gained popularity among design enthusiasts.
                                </p>
                                <p>
                                    <b>in 2020</b>, we launched an online store and began shipping our furniture all over the world. We also expanded our product line to include home decor items, such as wall art and lighting, which helped to attract a wider audience.
                                </p>
                                <p>
                                    <b>Today</b>, our company continues to grow and thrive, thanks to our commitment to innovation, affordability, and sustainability. We remain dedicated to providing our customers with beautiful, functional furniture that enhances their homes and lives, while also making a positive impact on the environment.
                                </p>
                            </Tab>
                            {/* history tabs end */}

                            <Tab eventKey="Mission" title="Mission">
                                <p>
                                    Our mission is to combine beautiful design with high-quality craftsmanship, while also minimizing our impact on the environment. To achieve this, we embrace the following core values:
                                </p>
                                <p>
                                    <b>innovation:</b> We are constantly pushing the boundaries of design and manufacturing, using technology and creativity to create furniture that is both functional and beautiful.
                                </p>
                                <p>
                                    <b>Affordability:</b> We believe that high-quality, stylish furniture should be accessible to everyone. That's why we strive to keep our prices affordable, without compromising on quality or design.
                                </p>
                                <p>
                                    <b>Customer Focus:</b> We prioritize the needs and preferences of our customers, and strive to create furniture that is tailored to their unique style and needs.
                                </p>
                            </Tab>
                            {/* mission tabs end */}

                            <Tab eventKey="Design" title="Design">
                                <p>
                                    At our company, we believe that great design should be both beautiful and functional. Our approach to furniture design is centered around the following principles:
                                </p>
                                <p>
                                    <b>Simplicity:</b> We believe that furniture should be simple and uncluttered, with clean lines and minimal ornamentation. We strive to create furniture that is both timeless and contemporary, so that it can fit seamlessly into any home or office environment.
                                </p>
                                <p>
                                    <b>Functionality:</b> We design furniture with the user in mind, prioritizing functionality and comfort. We believe that furniture should not only look great, but also serve a purpose and make people's lives easier and more comfortable.
                                </p>
                                <p>
                                    <b>Customization:</b> We understand that every person's taste and style is unique, and we offer customization options to allow our customers to create furniture that truly reflects their individual preferences and needs.
                                </p>
                            </Tab>
                            {/* design tabs end */}
                        </Tabs>
                    </div>
                </div>
                <AboutTestimonials />
            </Container>
        </div>
    )
}

export default About;