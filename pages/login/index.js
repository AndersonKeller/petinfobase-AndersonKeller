/* Desenvolva seu código aqui */
import { loginAPI } from "../../scripts/api.js";


function loginData(){
    const form = document.querySelector("form");
    const user ={}
    form.addEventListener("submit",async (e)=>{
        e.preventDefault();
        const elements = [...form.elements];
        elements.forEach((e)=>{
           if(e.tagName == "INPUT" && e.value != ""){
            //console.log(e.value)
            user[e.id] = e.value;
            //console.log(user)
            disableButton()
           }
           //loginAPI(user)
        })
       // loginAPI(user)
        await loginAPI(user)
        //return user;
    });
   
}
loginData()
function toglePage(){
    const btnTogle = document.querySelector(".btn-register");
    btnTogle.addEventListener("click",()=>{
        setTimeout(()=>{
            window.location.replace("../register/index.html")
        },1000);
    })
}
toglePage()
function disableButton(){
    const btnLogin = document.querySelector(".btn-form");
    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#password");

    if(inputEmail.value == "" && inputPassword.value ==""){
        btnLogin.setAttribute("disabled",true)
    }
    else{
        btnLogin.removeAttribute("disabled")
    }
}
