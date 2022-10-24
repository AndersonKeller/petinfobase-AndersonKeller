import { registerAPI } from "../../scripts/api.js";

function registerData(){
    const form = document.querySelector("form");
    const user = {}
    form.addEventListener("submit",async (e)=>{
        e.preventDefault();
        const elements = [...form.elements];
        elements.forEach((e)=>{
            if(e.tagName == "INPUT" && e.value != ""){
                user[e.id] = e.value;
            }
        })
        await registerAPI(user)
    })
}
registerData()

function toglePages(){
    const btnTogle = document.querySelector(".btn-back-login");
    btnTogle.addEventListener("click",()=>{
        setTimeout(()=>{
            window.location.replace("../login/index.html");
        },1000)
    })
    const btnCancel = document.querySelector(".btn-cancel");
    btnCancel.addEventListener("click",()=>{
        setTimeout(()=>{
            window.location.replace("../login/index.html");
        },1000)
    })
}
toglePages()

function disableButton(){
    const btnLogin = document.querySelector(".btn-form");
    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#password");
    const inputUserName = document.querySelector("#username");
    const inputAvatar = document.querySelector("#avatar")

    if(inputEmail.value == "" && inputPassword.value =="" && inputUserName.value =="" && inputAvatar.value == ""){
        btnLogin.setAttribute("disabled",true);
    }
}
disableButton()