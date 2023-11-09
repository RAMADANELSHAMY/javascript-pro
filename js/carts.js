    
let noProducts=document.querySelector(".noproducts")

function drawCartProductsUi() {
    let products=JSON.parse(localStorage.getItem("productsInCart"))||[]
    if (JSON.parse(localStorage.getItem("productsInCart")).length==0)
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
            <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove from cart</button>
        </div>
        </div>
        </div>
            `
        )})
document.querySelector(".products").innerHTML=productsUi.join("")
}drawCartProductsUi()

function removeFromCart(id) {
    let product=JSON.parse(localStorage.getItem("productsInCart"))
    if (product) {
    let products=product.filter(item=>item.id!=id)
    localStorage.setItem("productsInCart",JSON.stringify(products))
    drawCartProductsUi()
 
     }  

}
