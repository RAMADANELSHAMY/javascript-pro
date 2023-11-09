let productName = document.getElementById("product-name")
let productDesc = document.getElementById("product-desc")
let productSelect = document.getElementById("product-size")
let form = document.getElementById("product-create-form")
let productFile = document.getElementById("product-file")
let productImg;
productSelect.addEventListener("change", getSize)
form.addEventListener("submit", productSub)
productFile.addEventListener("change", uploadImg)
let productSize;
function getSize(e) {
  productSize = e.target.value
}

function productSub(e) {
  e.preventDefault();
  let allProducts = JSON.parse(localStorage.getItem("products")) || productsDb
  let nameValue = productName.value
  let descValue = productDesc.value
  if (nameValue && descValue && productSize) {
    let obj = {
      id: allProducts.length + 1,
      qty: 1,
      size: productSize,
      title: nameValue,
      desc: descValue,
      img: productImg,
      isMe: "Y"
    }

    allProducts = [...allProducts, obj]
    localStorage.setItem("products", JSON.stringify(allProducts))
    productName.value = ""
    productDesc.value = ""
    productSelect.value = ""
    setTimeout(() => window.location = "index.html", 2000)
  } else { alert("Enter data...") }
}

function uploadImg() {
  let file = productFile.files[0];
  let types = ["image/png", "image/jpeg"]
  if (types.indexOf(file.type) == -1) {
    alert("Not supported");
    productFile.value = ""
    return;
  };

  if (file.size > 2 * 1024 * 1024) {
    alert("Image should not exceed 2MG");
    productFile.value = ""
    return;
  }
  getImgBase64(file)
}

function getImgBase64(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    productImg = reader.result;
  }
  reader.onerror = function () { alert("Error") }

}



