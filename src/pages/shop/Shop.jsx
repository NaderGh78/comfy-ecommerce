import './shop.css';
import Container from '../../components/helpers/container/Container';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeaderCover from '../../components/shared/header cover/HeaderCover';
import AllShopProducts from "../../components/shop/allShopProducts";
import ShopSideBar from '../../components/shop/ShopSideBar';
import { AllProductsItems } from "../../config/data";
import SingleProductUi from '../../components/shared/SingleProductUi';

/*======================================*/
/*======================================*/
/*======================================*/

const Shop = () => {

  const [products, setProducts] = useState(AllProductsItems);

  const [searchParams, setSearchParams] = useSearchParams();

  // this for the open close the sidebar in small devices
  const [showSmallSideBar, setShowSmallSideBar] = useState(false);

  const min = Math.min(...products.map(item => item.pPrice));

  const max = Math.max(...products.map(item => item.pPrice));

  /*=========================*/

  const brandList = [...new Set(products.map(item => item.pBrand))];

  const categoryList = [...new Set(products.map(item => item.pCategory))];

  /*=========================*/

  // show the smaller sidebar in SMALL SCREEN
  const handleShowSmallSideBar = () => {

    setShowSmallSideBar(true);

  }

  // close the smaller sidebar in SMALL SCREEN
  const handleCloseShowSmallSideBar = () => {

    setShowSmallSideBar(false);

  }

  /*=========================*/

  // this is for useSerchParams in order to set key for every element when clicked or onchange
  const updateFilter = (key, value) => {

    searchParams.set(key, value);

    setSearchParams(searchParams);

  }

  const categoryQuery = searchParams.get("category");

  const brandQuery = searchParams.get("brand");

  const selectQuery = searchParams.get("sortBy");

  const priceQuery = searchParams.get("price");

  const paginationQuery = searchParams.get("page");

  // const params = Object.fromEntries([...searchParams]);

  /*==========================================================================*/
  /*=====================  FTILTERD ALL PRODUCTS START  ======================*/
  /*==========================================================================*/

  const params = {
    category: searchParams.get("category"),
    brand: searchParams.get("brand"),
    sortBy: searchParams.get("sortBy"),
    price: searchParams.get("price")
  };

  const isDefaultParams =
    params.category === 'all'
    && params.brand === 'all'
    && params.sortBy === 'default'
    && params.price === '0';


  const params1 = {};

  for (var key in params) {

    key !== "sortBy"
      ? (params1[`p${key.charAt(0).toUpperCase() + key.slice(1)}`] =
        params[key])
      : (params1[key] = params[key]);
  }

  // filteredProductsArray
  const filteredProductsArray = isDefaultParams ? products : AllProductsItems.filter((product) => {

    var isMatch = [];

    for (var key in params1) {

      if (key !== "sortBy" && key !== 'pPrice') {

        if ((params1[key] === product[key] || params1[key] === 'all')) {

          isMatch.push(true);

        } else {

          isMatch.push(false);

        }

      }

      if (key === 'pPrice') {

        if ((parseFloat(product["pPrice"]) <= parseFloat(params1[key])) || params1.pPrice === '0') {

          isMatch.push(true);

        } else {

          isMatch.push(false);

        }

      }

    }

    if (isMatch.every((value) => value === true)) {

      return product;

    } else {

      return null;

    }

  });
  // end filteredProductsArray

  // sortProducts
  const sortProducts = (params, filteredProductsArray) => {

    const sortParameter = params["sortBy"];

    if (sortParameter === "default") {

      return filteredProductsArray.sort(function (a, b) {

        let aId = parseFloat(a.pId);

        let bId = parseFloat(b.pId);

        return 0;

      });

    }

    if (sortParameter === "lowToHigh") {

      return filteredProductsArray.sort(function (a, b) {

        let aPrice = parseFloat(a.pPrice);

        let bPrice = parseFloat(b.pPrice);

        return aPrice > bPrice ? 1 : -1;

      });

    }

    if (sortParameter === "highToLow") {

      return filteredProductsArray.sort(function (a, b) {

        let aPrice = parseFloat(a.pPrice);

        let bPrice = parseFloat(b.pPrice);

        return bPrice > aPrice ? 1 : -1;

      });

    }

  };
  // end sortProducts

  const arrayToRender = "sortBy" in params
    ? sortProducts(params1, filteredProductsArray)
    : filteredProductsArray;
  /*=========================*/

  const [currentPage, setCurrentPage] = useState(1);

  const [activePagination, setActivePagination] = useState(1);

  const PRODUCT_PER_PAGE = 6;

  const pages = Math.ceil(arrayToRender.length / PRODUCT_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;

  const finishIndex = currentPage * PRODUCT_PER_PAGE;

  const orderedProducts = arrayToRender.slice(startIndex, finishIndex);

  // draw all filterd products
  const renderedProducts = orderedProducts?.map((d, i) => {
    return (
      <SingleProductUi data={d} key={i} />
    );
  });

  /*==========================================================================*/
  /*=====================  FTILTERD ALL PRODUCTS END  ======================*/
  /*==========================================================================*/

  return (
    <div className='shop'>
      <HeaderCover headingContent="Shop" />
      <Container>
        <div className="shop-box d-flex gap-4">
          <AllShopProducts
            products={products}
            params={params}
            updateFilter={updateFilter}
            priceQuery={priceQuery}
            min={min}
            selectQuery={selectQuery}
            handleShowSmallSideBar={handleShowSmallSideBar}
            paginationQuery={paginationQuery}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            activePagination={activePagination}
            setActivePagination={setActivePagination}
            pages={pages}
            orderedProducts={orderedProducts}
            filteredProductsArray={filteredProductsArray}
            renderedProducts={renderedProducts}
          />

          <ShopSideBar
            updateFilter={updateFilter}
            categoryList={categoryList}
            categoryQuery={categoryQuery}
            brandList={brandList}
            brandQuery={brandQuery}
            priceQuery={priceQuery}
            min={min}
            max={max}
            showSmallSideBar={showSmallSideBar}
            handleCloseShowSmallSideBar={handleCloseShowSmallSideBar}
          />

        </div>
        {/* end shop box */}
      </Container>
    </div>
  )
}

export default Shop;