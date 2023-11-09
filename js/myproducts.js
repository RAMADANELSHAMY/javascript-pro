
function drawMyProductsUi(allProducts=[]) {
    let myproducts=allProducts.filter(i=>i.isMe=="Y")
    if (myproducts.length!==0) {
        let productsUi=myproducts.map(item=>{
        return (
            `   
        <div class="product-item">
            <div class="product-item-img style="background:solid rgb(214, 159, 159)"">
            <img src="${item.img}" alt="img" srcset="" />
        </div>

        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <span>size:${item.size}</span>
            <div class="product-item-actions">
            <button style="background: rgb(214, 159, 159)" class="add-to-cart" onclick="removeItem(${item.id})">Remove Item </button>
            <button  style="background: rgb(214, 159, 159)"class="add-to-cart" onclick="editPro(${item.id})">Edit Item </button>
        </div>
        </div>
        </div>
            `
        )})
document.querySelector(".products").innerHTML=productsUi.join("")
    }
    else{ document.querySelector(".products").innerHTML="there is no items"};
}drawMyProductsUi(JSON.parse(localStorage.getItem("products")))

function editPro(id) {
    localStorage.setItem("editId",id)
    window.location="editproduct.html"
}
function removeItem(id) {
    let products=JSON.parse(localStorage.getItem("products"));
    let product=products.filter(item=>item.isMe=="Y")
    let productfiltered=product.filter(item=>item.id!==id)
    

let findPro=product.find(item=>item.id==id)
products=products.filter(i=>i.id!==findPro.id)

localStorage.setItem("products",JSON.stringify(products))
 drawMyProductsUi(productfiltered)

}
