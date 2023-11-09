if (localStorage.getItem("dir")) {
    if (localStorage.getItem("dir")=="rtl") {
        dirFun("rtl")
    }else{
        dirFun("ltr")
    }}

let products=productsDb;
let drawCartProductsUi=function (products=[]) {
    let productsUi=products.map(item=>{
        return (
            `   
        <div class="product-item" style="border:${item.isMe=="Y"&&"2px solid rgb(214, 159, 159)"}">
            <div class="product-item-img">
            <img src="${item.img}" alt="img" srcset="" />
        </div>
        <div class="product-item-desc">
            <h2 onclick="saveItemData(${item.id})">${item.title}</h2>
            <p>${item.desc}</p>
            <span>size:${item.size}</span>
            <div class="product-item-actions">
            <button style="background:${item.isMe=="Y"&&"rgb(214, 159, 159)"}" class="add-to-cart" onclick="addedToCart(${item.id})">Add to cart</button>
            <i class="fa-solid fa-heart"  style="color:${item.isMe=="Y"&&"rgb(214, 159, 159)"}"  onclick="addedToFav(${item.id})"></i>
        </div>
        </div>
        </div>
            `
        )})
    document.querySelector(".products").innerHTML=productsUi.join("")}
drawCartProductsUi(localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):products)

let badge=document.querySelector("#user_info .badge")
let carts_products=document.querySelector(".carts-products div")
let addedItem=JSON.parse(localStorage.getItem("productsInCart"))||[];

if (addedItem.length) {
    addedItem.map(item=>{
        carts_products.innerHTML +=`<p>${item.title}   "${item.qty}"</p>`
    }
    )
    badge.style.display="inline-block";
    badge.innerHTML=addedItem.length
}else{badge.style.display="none";}
    
function addedToCart(id) {
    let products=JSON.parse(localStorage.getItem("products"))||productsDb;
    if (user) {
    let product=products.find((item)=>item.id==id)
    let isProInCart=addedItem.some(i=>i.id==product.id)
    console.log(isProInCart);
    if (isProInCart) {
      addedItem= addedItem.map(p=>{
        if (p.id===product.id) p.qty+=1;
         return p;
       })
    }else{ addedItem.push(product)}
    localStorage.setItem("productsInCart",JSON.stringify(addedItem))
    carts_products.innerHTML=""
    addedItem.forEach(item=>{
        carts_products.innerHTML +=`<p>${item.title}   "${item.qty}"</p>`
    })

    badge.style.display="inline-block";
    let cart_length=document.querySelectorAll(".carts-products div p")
    badge.innerHTML=cart_length.length
   }else{
    setTimeout(()=>window.location="register.html",2000)
}}
    
let shopping_cart=document.querySelector(".shopping-cart")
let carts_productsEl=document.querySelector(".carts-products ")

shopping_cart.onclick=function(){
  if (carts_products.innerHTML!="") {
        if (carts_productsEl.style.display=="block") {
            carts_productsEl.style.display="none"
         }
   else   {
            carts_productsEl.style.display="block"
}}}

let eye=document.querySelector(".view span")
let viewed=JSON.parse(localStorage.getItem("view"))||[]
if (viewed.length) {
    eye.innerHTML=viewed.length
}
function saveItemData(id) {
    localStorage.setItem("productId",id)
    let products=JSON.parse(localStorage.getItem("products"))||productsDb
    let filtered=products.find(i=>i.id==id)
    viewed=[...viewed,filtered]
    eye.innerHTML=viewed.length
    localStorage.setItem("view",JSON.stringify(viewed))
    
    window.location="cartdetails.html"
}


let searchInp=document.getElementById("search")

searchInp.addEventListener("keyup",function (e) {
        search(e.target.value,products)
         if(e.target.value.trim()==""){
        drawCartProductsUi(products)
         }
});

function search(title,myArr) {
let arr=myArr.filter(item=>item.title.toLowerCase().indexOf(title.toLowerCase())!==-1)
console.log(arr);
        drawCartProductsUi(arr)
}

function getUnique(arr,filterType){
    let unique=arr
    .map(i=>i[filterType])
    .map((item,i,final)=>final.indexOf(item)===i &&i)
    .filter(i=>arr[i])
    .map(i=>arr[i])
    return unique
}

let fav=JSON.parse(localStorage.getItem("productsInFav"))||[]
    
    if (fav.length) {
    document.querySelector(".favo").style.display="inline-block"
    }
    function addedToFav(id) {
    let products=JSON.parse(localStorage.getItem("products"))||productsDb

    if (user) {
    let choosenItem=products.find((item)=>item.id==id)
    fav=[...fav,choosenItem]
    let uniquepro= getUnique(fav,"id")
    localStorage.setItem("productsInFav",JSON.stringify(uniquepro))
    document.querySelector(".favo").style.display="inline-block"
      }else{
        setTimeout(()=>window.location="register.html",2000)
    }}


  

let sizeFilter=document.getElementById("size-filter")
sizeFilter.addEventListener("change",getFilter)

function getFilter(e) {
    let val=e.target.value;
    let filteredsize=JSON.parse(localStorage.getItem("products"))||products;
    if (val=="all") {
        drawCartProductsUi(filteredsize);
    }else{
        let product=products.filter(i=>i.size==val);
        drawCartProductsUi(product);
    }}




let  dirAr=document.querySelectorAll(".dir")[0];
let  dirEn=document.querySelectorAll(".dir")[1];
dirAr.addEventListener("click",()=>dirFun("rtl"))
dirEn.addEventListener("click",()=>dirFun("ltr"))
function dirFun(dir){document.documentElement.setAttribute("dir",dir)
localStorage.setItem("dir",dir)}






