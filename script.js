let password = document.getElementById("password")



function genfunction(){
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWX"
let passwordlength = 8;
let password=""
for(let i =0;i<passwordlength;i++){
    let randomNumber= Math.floor(Math.random()*chars.length)
    password+=chars.substring(randomNumber,randomNumber+1)
}
document.getElementById("password").value=password;
}
function copyPassword() {
    password.select();
    password.setSelectionRange(0,10)
    document.execCommand("copy")
    }
    