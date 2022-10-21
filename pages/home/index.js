import { gettAllPost } from "../../scripts/api.js";
import { createPost } from "../../scripts/api.js";
import { createPostForm, deletePostForm, updatePostForm } from "../../scripts/forms.js";
import { createModalWrapper, createModal } from "../../scripts/modal.js";

//createModalWrapper()
//createModal()

function createPostButton(){
    const btnCreate = document.querySelector(".btn-new-post");
    btnCreate.addEventListener("click",()=>{
        createModalWrapper()
        const createInput = createPostForm()
        createModal(createInput);
        const btnCancel = document.querySelector(".btn-cancel");
        btnCancel.addEventListener("click",()=>{
            const wrapper = document.querySelector(".modal-wrapper");
            wrapper.remove()
        })
    })
}
createPostButton()

export async function renderPost(){
    const listPost = await gettAllPost()
    console.log(listPost)
    const ul = document.querySelector(".ul-feed");
    ul.innerHTML = ""
    listPost.forEach((post)=>{
        //seta o avatar no header da home no header 
        const userAvatar = document.querySelector(".user-img");
         userAvatar.src = `${post.user.avatar}`

        console.log(post)
        const li = document.createElement("li");
        li.classList.add("li-feed");
        li.id = `${post.id}`
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
        btnEditar.addEventListener("click",()=>{
            const editInput = updatePostForm(post);
            createModalWrapper()
            createModal(editInput);
            const btnCancel = document.querySelector(".btn-cancel");
            btnCancel.addEventListener("click",()=>{
                const wrapper = document.querySelector(".modal-wrapper");
                wrapper.remove()
            })
        })
        const btnExcluir = document.createElement("button");
        btnExcluir.classList.add("btn-excluir");
        btnExcluir.innerText = "Excluir";
        btnExcluir.addEventListener("click",()=>{
            const deleteInput = deletePostForm(post.id);
            console.log(deleteInput)
            createModalWrapper()
            createModal(deleteInput);
        })

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
