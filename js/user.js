let  links=document.getElementById("links")
let  user_info=document.getElementById("user_info")
let  userElement=document.getElementById("user")


let user=localStorage.getItem("user");

(function getUser(){
    if (user) {
        links.remove(); user_info.style.display="flex";userElement.innerText=user
    }else{
       user_info.style.display="none"
    }
})();


let sign_out=document.getElementById("sign_out")
sign_out.addEventListener("click",userOut)

function userOut() {
    setTimeout(()=>{window.location="login.html"},2000)
};