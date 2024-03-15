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

export function getProducts(Filter_Options,AdvertisedCount,OtherProductsCount)
{
 let products = [];
 let count = (AdvertisedCount+OtherProductsCount);
 while (count != 0)
 {
    let pr = getProduct();

    let random_number = (Math.random() * count);

    if (random_number <= AdvertisedCount)
    {
        pr.Scale.x = 2;
        pr.Scale.y = 2;
        AdvertisedCount--;
        count--;
    }

    products.push(pr);
 }
 return products;
}