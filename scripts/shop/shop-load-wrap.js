
import * as shop_manager from "./shop-manager.js"

let filter = shop_manager.createFilterOptions();

function set_tiles(total_area)
{
 let tiles_group = [];
 let shop = document.querySelector("#shop-list");
 console.log(total_area);
 for (let x = 0;x < Math.floor(total_area*0.25);x++)
 {
  let row = document.createElement("tr");
  for (let y = 0;y < 4;y++)
  {
   let product = shop_manager.createProductItem();
   row.appendChild(product);
   tiles_group.push(product);
  }

  shop.appendChild(row);
 }
 return tiles_group;
}

function load_shop(total_area) //total_area = rows * (col * 4)
{
 let advertised_products_area = Math.floor((total_area / 4) * 0.1); //2x2
 let other_products = total_area - advertised_products_area; //1x1
 let tiles_group = set_tiles(total_area);

 
}

load_shop(4*15);
