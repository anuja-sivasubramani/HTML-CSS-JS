var product=document.querySelector(".products")
var search=document.getElementById("p-search")
var productlist=product.querySelectorAll("div")

search.addEventListener("keyup",function()
{
    var entered = event.target.value.toUpperCase()
    for (var i = 0; i < productlist.length; i++) {
        if (productlist[i].textContent.toUpperCase().indexOf(entered) < 0) {
            productlist[i].style.display = "none"
        }
        else {
            productlist[i].style.display = "block"
        }
    }
})