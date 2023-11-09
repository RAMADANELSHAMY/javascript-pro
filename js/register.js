let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let register_btn=document.getElementById("register_btn")



register_btn.addEventListener("click",register)
let addU=JSON.parse(localStorage.getItem("username"))||[]
let addP=JSON.parse(localStorage.getItem("username"))||[]
function register(e) {
    e.preventDefault()
    if (username.value==""&&email.value==""&&password.value=="") {
        alert("Please fill data")
    }

    else{
        addU.push(username.value)
        addP.push(username.value)
        localStorage.setItem("username",JSON.stringify(addU))
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",JSON.stringify(addP))
        setTimeout(()=>window.location="login.html",2000)
    }
}