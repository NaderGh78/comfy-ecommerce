import Modal from 'react-bootstrap/Modal';
import { FaXmark } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const ShopSideBarSmall = (props) => {

  const {
    showSmallSideBar,
    handleCloseShowSmallSideBar,
    updateFilter,
    categoryList,
    categoryQuery,
    brandList,
    brandQuery,
    priceQuery,
    min,
    max,
    sliderStyle
  } = props

  return (
    <>
      <div className="shop-sidebar-small">
        <Modal
          show={showSmallSideBar}
          onHide={handleCloseShowSmallSideBar}
          className='small-sidebar-modal'
          backdrop="static"
        >
          <div className="top-heading-title d-flex align-items-center justify-content-between text-white p-3 bg-dark">
            <h3 className='mb-0'>Filters</h3>
            <span onClick={handleCloseShowSmallSideBar}>
              <FaXmark />
            </span>
          </div>
          <Modal.Body>
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
                        checked={
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
                      categoryList.map((inpEl, idx) => (
                        <div className="cat-filter-single" key={idx}>
                          <input
                            type="radio"
                            className="form-check-input"
                            name="categories"
                            id={inpEl}
                            value={inpEl}
                            onChange={(e) =>
                              updateFilter("category", e.target.value)
                            }
                            checked={
                              categoryQuery === inpEl
                                ? true
                                : false}
                          />
                          <label
                            htmlFor={inpEl}
                            className={categoryQuery === inpEl ? "main-cat-label" : ""}
                          >
                            {inpEl}
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
                        checked={
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
                      brandList.map((inpEl, idx) => (
                        <div className="cat-filter-single" key={idx}>
                          <input
                            type="radio"
                            className="form-check-input"
                            name="brand"
                            id={inpEl}
                            value={inpEl}
                            onChange={(e) =>
                              updateFilter("brand", e.target.value)
                            }
                            checked={
                              brandQuery === inpEl
                                ? true
                                : false}
                          />
                          <label
                            htmlFor={inpEl}
                            className={brandQuery === inpEl ? "main-cat-label" : ""}
                          >
                            {inpEl}
                          </label>
                        </div>
                      ))}
                  </div>
                  {/* end brands filter box*/}

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
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default ShopSideBarSmall;