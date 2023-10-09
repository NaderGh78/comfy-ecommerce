import './search.css';
import Container from '../../components/helpers/container/Container';
import { useState } from 'react';
import HeaderCover from '../../components/shared/header cover/HeaderCover';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SingleProductUi from '../../components/shared/SingleProductUi';
import { AllProductsItems } from "../../config/data";

/*======================================*/
/*======================================*/
/*======================================*/

const Search = () => {

    const [validated, setValidated] = useState(false);

    const [searchVal, setSearchVal] = useState("");

    const [products, setProducts] = useState([]);

    const [noResult, setNoResult] = useState(false);

    const handleSearchClick = (e) => {

        e.preventDefault();

        let filterBySearch;

        // in input value not empty make the filter search product by product name
        if (searchVal !== "") {

            //if the input not 
            filterBySearch = AllProductsItems.filter((item) => {

                if (item.pName.toLowerCase().includes(searchVal.toLowerCase())) { return item; }

            })

            // if no length ,mean not matching , therfore show the no found reslut msg
            if (!filterBySearch.length) {

                setNoResult(true);

            } else {

                setNoResult(false);

            }

        }

        // fill by new filterd array 
        setProducts(filterBySearch);

    }

    // in order to show the error msg for bootstrp input,in case empty and submit the form
    const handleSubmit = (event) => {

        const form = event.currentTarget;

        if (form.checkValidity() === false) {

            event.preventDefault();

            event.stopPropagation();

        }

        setValidated(true);
    };

    const handleChange = (e) => {
        setSearchVal(e.target.value.trim())
    }

    return (
        <div className='search-section'>
            <HeaderCover headingContent="Search" />
            <div className="search-form-box">
                <Form noValidate validated={validated} onSubmit={handleSearchClick} className='d-flex'>
                    <Form.Group md="4" controlId="validationCustom01">
                        <Form.Control
                            type="text"
                            onChange={handleChange}
                            placeholder='Search by Products Name'
                            required />
                        <Form.Control.Feedback type="invalid">
                            Search value is required
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" className='bg-dark' onClick={handleSubmit}>Search</Button>
                </Form>
            </div>
            {/* end search form box */}

            <div className="search-products">
                <Container>
                    {products?.length > 0 && <h3>Total Results: {products.length}</h3>}
                    <div className="search-products-box">
                        {products && products.map(d => (
                            <SingleProductUi data={d} key={d.pId} />
                        ))}
                        {/* if no result,show the mesg */}
                        {noResult && <h2 className='no_result_search'>Sorry, can't find matching products</h2>}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Search;