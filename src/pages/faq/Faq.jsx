import './faq.css';
import Container from '../../components/helpers/container/Container';
import { HashLink } from 'react-router-hash-link';
import HeaderCover from '../../components/shared/header cover/HeaderCover';
import { faqData } from "../../config/faqData";
import SingleFaqItem from '../../components/faq/SingleFaqItem';

/*======================================*/
/*======================================*/
/*======================================*/

const Faq = () => {

    return (
        <div className='faq-section'>
            <HeaderCover headingContent="Faq" />
            <Container>
                <div className="faq-section-box">
                    <div className="faq-q">
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                        <p>FAQ pages continue to be a priority area for SEO and digital marketing professionals. An FAQ page is one of the simplest ways to improve your site and help site visitors and users. Your FAQ section should be seen as a constantly expanding source of value provided to your audience.</p>
                        <ul className='ul-custom'>
                            {/* 
                            here we use Hashlink , cos we use Hashrouter instead of borwserrouter,
                            cos the project on github, to upoload any project on github
                            should use Hashrouter not borwserrouter,
                            Hashlink it will avoid the conflict between the route with hash
                            */}
                            <li><HashLink to="#faqpara3">large items</HashLink></li>
                            <li><HashLink to="#faqpara5">assembled</HashLink></li>
                            <li><HashLink to="#faqpara6">limitation</HashLink></li>
                            <li><HashLink to="#faqpara7">priority</HashLink></li>
                            <li><HashLink to="#faqpara8">idea</HashLink></li>
                            <li><HashLink to="#faqpara9">environmental issues</HashLink></li>
                        </ul>
                    </div>
                    {/* end faq question */}
                    <div className="faq-a">
                        {faqData.map(d => (<SingleFaqItem data={d} key={d.faqId} />))}
                    </div>
                    {/* end faq answer */}
                </div>
            </Container>
        </div>
    )
}

export default Faq;