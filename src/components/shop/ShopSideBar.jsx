import { useEffect } from "react";
import ShopSideBarSmall from "./ShopSideBarSmall";

/*======================================*/
/*======================================*/
/*======================================*/

const ShopSideBar = (props) => {

    const {
        updateFilter,
        categoryList,
        categoryQuery,
        brandList,
        brandQuery,
        priceQuery,
        min,
        max,
        showSmallSideBar,
        handleCloseShowSmallSideBar
    } = props;

    useEffect(() => {

        // //by default make the products sorting by it id
        // setProducts([...products.sort((a, b) => { return a.pId - b.pId })]);

        // // by default show all products when open shop page
        // setPrice(max)

    }, [max]);


    // get the percentage value,in order to fill the bg color of input range slider daynamicly based percentage
    let percentage = (priceQuery - min) * 100 / (max - min);

    const sliderStyle = {

        // make the background size daynamic based on input value
        backgroundSize: percentage + '%'

    };

    return (
        <>
            <div className="right">
                <form action="">
                    <div className="form-cat-filters">
                        <div className="cat-filter-box">
                            <h3 className='underline-heading'>Categories</h3>
                            {/* the main input that contain ALL CATEGORIES */}
                            <div className="cat-filter-single">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="categories"
                                    id='all'
                                    value='all'
                                    onChange={(e) =>
                                        updateFilter("category", e.target.value)
                                    }
                                    defaultChecked={
                                        categoryQuery === 'all'
                                            ? true
                                            : false}
                                />
                                <label
                                    htmlFor="all"
                                    className={categoryQuery === "all" ? "main-cat-label" : ""}
                                >
                                    All Categories
                                </label>
                            </div>

                            {/* draw the others inputs dynamically */}
                            {
                                categoryList.map((inp, idx) => (
                                    <div className="cat-filter-single" key={idx}>
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="categories"
                                            id={inp}
                                            value={inp}
                                            onChange={(e) =>
                                                updateFilter("category", e.target.value)
                                            }
                                            defaultChecked={
                                                categoryQuery === inp
                                                    ? true
                                                    : false}
                                        />
                                        <label
                                            htmlFor={inp}
                                            className={categoryQuery === inp ? "main-cat-label" : ""}
                                        >
                                            {inp}
                                        </label>
                                    </div>
                                ))}
                        </div>
                        {/* end cat filter box */}

                        {/* ===================================== */}

                        <div className="brands-filter-box">
                            <h3 className='underline-heading'>Brands</h3>
                            {/* the main input that contain ALL BRAND */}
                            <div className="cat-filter-single">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="brands"
                                    id='allBrand'
                                    value='all'
                                    onChange={(e) =>
                                        updateFilter("brand", e.target.value)
                                    }
                                    defaultChecked={
                                        brandQuery === 'all'
                                            ? true
                                            : false}
                                />
                                <label
                                    htmlFor="allBrand"
                                    className={brandQuery === "all" ? "main-cat-label" : ""}
                                >
                                    All Brands
                                </label>
                            </div>

                            {/* draw the others inputs dynamically */}
                            {
                                brandList.map((inp, idx) => (
                                    <div className="cat-filter-single" key={idx}>
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="brands"
                                            id={inp}
                                            value={inp}
                                            onChange={(e) =>
                                                updateFilter("brand", e.target.value)
                                            }
                                            defaultChecked={
                                                brandQuery === inp
                                                    ? true
                                                    : false}
                                        />
                                        <label
                                            htmlFor={inp}
                                            className={brandQuery === inp ? "main-cat-label" : ""}
                                        >
                                            {inp}
                                        </label>
                                    </div>
                                ))}
                        </div>
                        {/* end brands filter*/}

                        {/* ===================================== */}

                        <div className="brands-filter-box">
                            <h3 className='underline-heading'>Price</h3>
                            <input
                                type="range"
                                value={priceQuery == 0 ? max : priceQuery}
                                onChange={(e) => updateFilter("price", e.target.value)}
                                min={min}
                                max={max}
                                step="40"
                                style={sliderStyle}
                            />
                            <div className="range-price-value">
                                <span>{min}$</span>
                                <span>{priceQuery == 0 ? max : priceQuery}$</span>
                                <span>{max}$</span>
                            </div>
                        </div>
                        {/* end price filter bod*/}

                    </div>
                </form>
            </div>

            {/* this samll sidebar it will show when resize the window */}
            <ShopSideBarSmall
                showSmallSideBar={showSmallSideBar}
                handleCloseShowSmallSideBar={handleCloseShowSmallSideBar}
                updateFilter={updateFilter}
                categoryList={categoryList}
                categoryQuery={categoryQuery}
                brandList={brandList}
                brandQuery={brandQuery}
                priceQuery={priceQuery}
                min={min}
                max={max}
                sliderStyle={sliderStyle}
            />
        </>
    )
}

export default ShopSideBar;