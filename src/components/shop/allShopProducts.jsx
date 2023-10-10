import { LiaAngleDownSolid } from "react-icons/lia";
import { FaFilter } from "react-icons/fa6";
import Pagination from "./Pagination";

/*======================================*/
/*======================================*/
/*======================================*/

const AllShopProducts = ({
    updateFilter,
    selectQuery,
    handleShowSmallSideBar,
    paginationQuery,
    currentPage,
    setCurrentPage,
    activePagination,
    setActivePagination,
    renderedProducts,
    pages
}) => {



    return (
        <div className="left">
            <div className="top-part">
                {
                    renderedProducts?.length > 0
                    &&
                    <>
                        {/* show the number of page when exist pagination */}
                        <p className="pages-number mb-0">
                            Showing page <span>{currentPage}</span> of <span>{pages}</span> pages
                        </p>
                    </>
                }

                {/* this btn will show the sidebar section in small devices */}
                <button className="show-sidebar" onClick={handleShowSmallSideBar}><FaFilter /> Filters</button>
                {
                    renderedProducts?.length > 0 &&
                    <div className="select-box">
                        <select
                            name=""
                            id="start"
                            onChange={(e) => updateFilter("sortBy", e.target.value)}
                            defaultValue={
                                selectQuery === "highToLow"
                                    ? "highToLow"
                                    : selectQuery === "lowToHigh"
                                        ? "lowToHigh"
                                        : "default"
                            }
                        >
                            <option value="default" >Default</option>
                            <option value="lowToHigh">Price, Low to High</option>
                            <option value="highToLow" >Price, High to Low</option>
                        </select>
                        <LiaAngleDownSolid />
                    </div>
                }

            </div>
            <div className="all-shop-products-box">
                {
                    /*
                    if the filteredproduct array contains some products , 
                    show the products with pagination ,otherwise show no product match msg

                    NOTE: put the pagination NOT in parent comp , in order to keep the style
                    */
                    renderedProducts?.length > 0 ?
                        <>
                            {renderedProducts}

                            <Pagination
                                pages={pages}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                updateFilter={updateFilter}
                                paginationQuery={paginationQuery}
                                activePagination={activePagination}
                                setActivePagination={setActivePagination}
                            />
                        </>
                        :
                        <><h5 className="w-100 text-center">Sorry, no matching products</h5></>
                }


            </div>
        </div>
    )
}

export default AllShopProducts;