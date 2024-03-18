<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<body>
    
    <link rel="stylesheet" href="styles/page/main-pg.css">

    <script src="scripts/main-page.js"></script>


    <title>Główna strona</title>
</head>
<body>
    <template id="item">
        <td>
            <div class="content">
                <div class="image-holder">
                    <img class="product-image" src="./img/logo/logo_wersja2.png" alt="">
                </div>
                <div class="product-description">
                    
                </div>
            </div>
        </td>
    </template>
    <template id="main">
        <script src="scripts/client-effects/main-page.js"></script>
        <script type="module" src="scripts/shop/shop-load-wraper.js"></script>
        <script src="scripts/shop/shop-manager.js"></script>
    </template>
  <div id="baner-section">
    <div id="baner">
        <div id="nav">
            <button id="menu">Menu</button>
            <ul id="nav-lista">
                <li>Home</li>
                <li>IGA World</li>
                <li></li>
            </ul>
        </div>
        <h1 id="nazwa">IGA World</h1>
        <img id="img-logo" src="img/logo/logo_wersja2.png" alt="Nasze logo">
    </div>
  </div>
  <div id="content">
     <div id="info">
       
     </div>
     <div id="shop">
        <table id="shop-list">
          
        </table>
     </div>
    </div>
</body>
</html>