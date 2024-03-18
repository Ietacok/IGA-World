import * as shop_manager_local from "./shop-manager.js"

let filter = shop_manager_local.createFilterOptions();

function set_tiles(total_area)
{
 let tiles_group = [];
 let shop = document.querySelector("#shop-list");
 for (let x = 0;x < Math.floor(total_area*0.25);x++)
 {
  let row = document.createElement("tr");
  for (let y = 0;y < 4;y++)
  {
   let product = shop_manager_local.createProductItem();
   row.appendChild(product);
   tiles_group.push(product);
  }

  shop.appendChild(row);
 }
 return tiles_group;
}

function load_shop(total_area) 
{
 let products = total_area; //1x1
 let tiles_group = set_tiles(total_area);

 
 
}

load_shop(4*15);
