let noProducts=document.querySelector(".noproducts")
function drawFavProductsUi() {
    let products=JSON.parse(localStorage.getItem("productsInFav"))||[]
    if (JSON.parse(localStorage.getItem("productsInFav")).length==0)
     noProducts.innerHTML="there is no item";
    let productsUi=products.map(item=>{
        return (
            `   
        <div class="product-item">
            <div class="product-item-img">
            <img src="${item.img}" alt="img" srcset="" />
        </div>

        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <span>size:${item.size}</span>
            <div class="product-item-actions">
            <button class="add-to-cart" onclick="removeFromFav(${item.id})">Remove from favorites</button>
            </div>
            </div>
            </div>
            `
            )})
document.querySelector(".products").innerHTML=productsUi.join("")
}drawFavProductsUi()

function removeFromFav(id) {
    if (localStorage.getItem("productsInFav")) {
    let products=JSON.parse(localStorage.getItem("productsInFav")).filter(item=>item.id!=id)
    localStorage.setItem("productsInFav",JSON.stringify(products))
    drawFavProductsUi()
     }   
}
