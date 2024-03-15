import * as shop_manager from "./shop-manager"

let filter = shop_manager.createFilterOptions();

function set_tiles(total_area)
{
 let tiles_group = [];

 return tiles_group;
}

function load_shop(total_area) //total_area = rows * (col * 4)
{
 let advertised_products_area = Math.floor((total_area / 4) * 0.1); //2x2
 let other_products = total_area - advertised_products_area; //1x1
 let tiles_group = set_tiles(total_area);

 
}

load_shop(4*15);