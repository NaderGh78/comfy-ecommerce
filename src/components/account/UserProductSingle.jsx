/*
this is the list of sindgle product of producsts that [user] already chose its,the data will display inside the acccount page 
inside [view oreder accordion]
*/
const UserProductSingle = ({ data: { pName, pInitialImage, pBrand, pPrice, pSalePrice, pQty, pcolor } }) => {

    // make a variable that wil calculate daynmicly the sale price from main price 
    const netPriceAfterSale = (pPrice - (pPrice * (pSalePrice / 100))).toFixed(2);

    return (
        <div className="user-product-single d-flex justify-content-between">
            <div className="left d-flex gap-4">
                <img src={pInitialImage} alt="" />
                <div>
                    <h5 className='text-capitalize'>{pName}</h5>
                    <p className='text-capitalize'>
                        {pBrand} <span className='pr-color' style={{ backgroundColor: pcolor }}></span>
                    </p>
                    <p>Qty <span>{pQty}</span></p>
                </div>
            </div>
            <div className="right">
                {/* 
                cos here its the [final step] to order the products , 
                and the user should see the final products with discount sale
                no need to display the main price for user , cos already [the main price and the price with discount price]
                exist in checkout page
                */}
                <span className='price-boxed'>${netPriceAfterSale}</span>
            </div>
        </div>
    )
}

export default UserProductSingle;