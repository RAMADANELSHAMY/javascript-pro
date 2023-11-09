
let profile=localStorage.getItem("profile")&&JSON.parse(localStorage.getItem("profile"));
let username=localStorage.getItem("profile")&&JSON.parse(localStorage.getItem("profile")).u||localStorage.getItem("user");
let email=localStorage.getItem("profile")&&JSON.parse(localStorage.getItem("profile")).e||localStorage.getItem("email");

if (profile) {
let imgDom=document.querySelector(".profile-img")
imgDom.setAttribute("src",profile.i);
}

let proLength=localStorage.getItem("products")&&JSON.parse(localStorage.getItem("products"));
let myproLenght=localStorage.getItem("products")&&proLength.filter(i=>i.isMe=="Y");

let proDom=document.getElementById("products-length");
let userDom=document.getElementById("username");
let emailDom=document.getElementById("email");


if (proLength) {
    proDom.textContent=`Products length: ${myproLenght.length}`;
}
userDom.innerHTML=username;
emailDom.innerHTML=email;

let profileLogout=document.getElementById("profile-logout")

profileLogout.onclick=function(){
    setTimeout(() => {
        window.location="login.html"
    }, 2000);
}
