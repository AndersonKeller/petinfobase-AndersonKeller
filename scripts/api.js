/* Desenvolva seu código aqui */
import toast from "./toast.js";
import { getLocalStorage } from "./localStorage.js";

const baseUrl = "http://localhost:3333/"
export async function loginAPI(data){
    
   try{
    const response = await fetch(`${baseUrl}login`,{
        method: "POST",
         headers:{
             
             "Content-Type": "application/json",
         },
         body:JSON.stringify(data)   
     })
     if(response.ok){
        const responseJson = await  response.json();
        toast("Sucesso!", "Login feito com sucesso")
        localStorage.setItem("user",JSON.stringify(responseJson))
         
         setTimeout(() => {
            window.location.replace("../home/index.html")
        }, 4000)
        
     }else{

     }
   }catch{

   }
}

export async function registerAPI(data){
    const response = await fetch(`${baseUrl}users/create`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const responseJson = await response.json();
    if (response.ok) {
        toast("Sua conta foi criada com sucesso!","Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login:")

        setTimeout(() => {
            window.location.replace("../login/index.html")
        }, 4000)
    } else {
        toast("Erro!", "Algo deu errado")
    }

    console.log(responseJson)
    return response;
}

export async function gettAllPost(){
    const user = await getLocalStorage();
    try {
        const response = await fetch(baseUrl + "posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            }
        })

        const responseJson = await response.json()
        //console.log(responseJson)
        return responseJson;
    } catch(err) {
        console.log(err)
    }

}

const post = {
    
        title: "Castração Solidária",
        content: "Estou promovendo um evento com parceria de algumas petShops e clinicas veterinárias da região de Porto Alegre e faremos a castração gratuita dos 100 primeiros pets que estiver no parque da redenção no dia 10/10/2022"
      }

//createPost(post)
export async function createPost(data){
    const user = await getLocalStorage();
    const response = await fetch(`${baseUrl}posts/create`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.token}`
        },
        body: JSON.stringify(data)
    })
    const responseJson = await response.json();
    console.log(responseJson)
    return response;
}
