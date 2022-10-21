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