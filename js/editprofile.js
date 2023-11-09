let get_user=localStorage.getItem("user");
let get_email=localStorage.getItem("email");


let btn=document.getElementById("editprofile-form");
let userInpu=document.getElementById("changename");
let emailInp=document.getElementById("changeemail");
let productFile=document.getElementById("product-file")

let productImg;

userInpu.value=get_user;
emailInp.value=get_email;



btn.addEventListener("submit",editProfile)
productFile.addEventListener("change",updateImg)

function editProfile(e) {
    e.preventDefault()
    localStorage.setItem("user",userInpu.value)
    localStorage.setItem("email",emailInp.value)
    
    let profile={u:userInpu.value,e:emailInp.value,i:productImg}
    localStorage.setItem("profile",JSON.stringify(profile))
    window.location="profile.html"
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