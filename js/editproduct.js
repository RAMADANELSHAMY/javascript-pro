let products=JSON.parse(localStorage.getItem("products"))||productsDb;
let getPro=products.find(i=>i.id==JSON.parse(localStorage.getItem("editId")))
let productName=document.getElementById("product-name")
let productDesc=document.getElementById("product-desc")
let productSelect=document.getElementById("product-size")
let form=document.getElementById("product-update-form")
let productFile=document.getElementById("product-file")
let productSize;
let productImg;


productName.value=getPro.title;
productDesc.value=getPro.desc;
productSelect.value=getPro.size;




productSelect.addEventListener("change",getSize)
form.addEventListener("submit",productSub)
productFile.addEventListener("change",updateImg)
function getSize(e) {
   productSize=e.target.value
}

function productSub(e) {
    e.preventDefault();
    getPro.title=productName.value
    getPro.dec=productDesc.value
    getPro.size=productSize
    getPro.img=productImg

    localStorage.setItem("products",JSON.stringify(products))
    productName.value=""
    productDesc.value=""
    productSelect.value=""
    productFile.value=""
    setTimeout(()=>window.location="index.html",2000)
}

function updateImg() {
  let file=productFile.files[0];
  let types=["image/png","image/jpeg"]
  if (types.indexOf(file.type)==-1) {
    alert("Not supported");
    productFile.value=""
    return;
  };

  if (file.size>2*1024*1024) {
    alert("Image should not exceed 2MG");
    productFile.value=""
    return;
  }
getImgBase64(file)
}

function getImgBase64(file) {
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=function(){productImg=reader.result}
    reader.onerror=function(){alert("Error")}
}


