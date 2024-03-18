function getProduct()
{
 return {
    Image: document.createElement("img"),
    Description: "Some product",
    Scale: {
        x: 1,
        y: 1
    }
 }   
}

export function createFilterOptions()
{
 return {
    type: "default",
    price_min: 0,
    price_max: -1,
    min_rating: 4,
    sort_by: "views",
 }
}

export function getProducts(Filter_Options,ProductsCount)
{
 let products = [];
 let count = ProductsCount;
 while (count != 0)
 {
    let pr = getProduct();
    products.push(pr);
    count--;
 }
 return products;
}

export function createProductItem()
{
 return document.querySelector("#item").content.cloneNode(true);  
}

