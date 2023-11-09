
let products=productsDb
let productId=localStorage.getItem("productId")
let itemDetails=document.querySelector(".item-details")
let productDetails=products.find(item=>item.id==productId);

itemDetails.innerHTML=`
             <img src=${productDetails.img} alt="img" />
             <h2 style=margin-top:10px>${productDetails.title}</h2>
            <p>${productDetails.desc}</p>
            <p>${productDetails.size}</p><br>
            <button style=padding:10px;cursor:pointer;background:#333;color:white;border:0 onclick="editPro(${productDetails.id})">Edit</button>
            <button style=padding:10px;cursor:pointer;background:#333;color:white;border:0 onclick="removeItem(${productDetails.id})">Delete</button>
      `


function editPro(id) {
    localStorage.setItem("editId",id)
    window.location="editproduct.html"
setTimeout(()=>window.location="index.html",2000)
 
}

function removeItem(id) {
    let products=JSON.parse(localStorage.getItem("products"))||productsDb;
    let productfiltered=products.filter(item=>item.id!=id)
    console.log(productfiltered);
localStorage.setItem("products",JSON.stringify(productfiltered))
setTimeout(()=>window.location="index.html",2000)
}

