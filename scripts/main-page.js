function onload()
{
  let main_page = document.querySelector("#main").content.cloneNode(true);
  document.head.appendChild(main_page);
}

document.addEventListener("DOMContentLoaded",onload);