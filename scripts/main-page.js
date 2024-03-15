let scripts = [
    "/client-effects/main-page.js",
    "/scripts/shop/shop-load-wrap.js"
];

function onload()
{
 let len = scripts.length;
 for (let i = 0;i < len;i++)
 {
  let script = document.createElement("script");
  script.setAttribute("src",`./scripts${scripts[i]}`);
  document.head.appendChild(script);
 }
}

document.addEventListener("DOMContentLoaded",onload);