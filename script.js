var signup=document.getElementById("signup");
var div5=document.getElementById("div5");
var div6=document.getElementById("div6");
var btn5=document.getElementById("btn5");
var btn6=document.getElementById("btn6");

var inp1=document.getElementById("inp1");
var inp2=document.getElementById("inp2");
var inp3=document.getElementById("inp3");
var inp4=document.getElementById("inp4");
var inp5=document.getElementById("inp5");

let username=localStorage.getItem("username");
let password=localStorage.getItem("password");
signup.onclick=function(){
    div6.style.visibility="visible";
}
btn5.onclick=function(e){
    e.preventDefault();
    if((username && username.trim()==inp1.value)&&(password && password.trim()==inp2.value)){
       setTimeout(()=>{
        window.location="index2.html"
       })
    }
    else{
        alert("انت نصاب ياض");
    }
}
btn6.onclick=function(v){
    v.preventDefault();
    div6.style.visibility="hidden";
    div5.style.visibility="visible";
    signup.style.visibility="hidden";
    localStorage.setItem("username" ,inp3.value)
    localStorage.setItem("phone" ,inp4.value)
    localStorage.setItem("password" ,inp5.value)
}