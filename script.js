const acrylics= document.getElementById("acrylics");
const password= document.getElementById("password");
const form= document.getElementById("userForm");
const errorElement=document.getElementById("error");
const popUp=document.getElementById("artPop");

acrylics.onmouseover="show()";
function show(){
    document.getElementById("a").style.visibility="visible";
}

/*form.addEventListener("submit",(e)=>{
let messages=[];
    if(userName===""|| userName==null){
        //messages.push("enter a user name");
        alert("enter a username niglet");
    }
    if(password===""|| password==null){
        messages.push("enter a password");
    }
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText=messages.join(" and ");
    }
    
})*/