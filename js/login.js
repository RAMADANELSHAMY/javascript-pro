let username=document.getElementById("username")
let password=document.getElementById("password")
let login_btn=document.getElementById("login_btn")

let user=localStorage.getItem("username")
let pass=localStorage.getItem("password")


login_btn.addEventListener("click",login)
    
function login(e) {
    e.preventDefault()
let u=JSON.parse(user).indexOf(username.value)
let p=JSON.parse(user).indexOf(username.value)
    if ((user&&u!=-1)&&(pass &&p!=-1)) {
        localStorage.setItem("user",username.value)
        setTimeout(()=>window.location="index.html",2000)   
    }
    else{
        alert("password OR username is Wrong")
    }
}