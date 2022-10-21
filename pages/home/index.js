import { gettAllPost } from "../../scripts/api.js";
import { createPost } from "../../scripts/api.js";
import { createModalWrapper, createModal } from "../../scripts/modal.js";

//createModalWrapper()
//createModal()

function createPostButton(){

}

async function renderPost(){
    const listPost = await gettAllPost()
    console.log(listPost)
    const ul = document.querySelector(".ul-feed");

    listPost.forEach((post)=>{
        //seta o avatar no header da home no header 
        const userAvatar = document.querySelector(".user-img");
         userAvatar.src = `${post.user.avatar}`

        console.log(post)
        const li = document.createElement("li");
        li.classList.add("li-feed");
        const divHeader = document.createElement("div");
        divHeader.classList.add("header-li");

        const divInfos = document.createElement("div");
        divInfos.classList.add("div-infos");
        const imgUser = document.createElement("img");
        imgUser.src = `${post.user.avatar}`;
        const h2Name = document.createElement("h2");
        h2Name.classList.add("user-name")
        h2Name.innerText = `${post.user.username}`;
        const pDate = document.createElement("p");
        pDate.classList.add("date-text");
        pDate.innerText = `${post.createdAt}`;
        divInfos.append(imgUser,h2Name,pDate);

        const divBtns = document.createElement("div");
        divBtns.classList.add("div-btns");
        const btnEditar = document.createElement("button");
        btnEditar.classList.add("btn-editar");
        btnEditar.innerText = "Editar";
        const btnExcluir = document.createElement("button");
        btnExcluir.classList.add("btn-excluir");
        btnExcluir.innerText = "Excluir";
        divBtns.append(btnEditar,btnExcluir);

        divHeader.append(divInfos,divBtns);

        const divBody = document.createElement("div");
        divBody.classList.add("body-li");
        const h2Title = document.createElement("h2");
        h2Title.classList.add("post-title");
        h2Title.innerText = `${post.title}`;
        const pContent = document.createElement("p");
        pContent.classList.add("post-content");
        pContent.innerText = `${post.content}`;
        const linkContent = document.createElement("a");
        linkContent.innerText = "Acessar publicação"
        divBody.append(h2Title,pContent,linkContent);

        li.append(divHeader,divBody);
        ul.appendChild(li)
    })

}
renderPost()