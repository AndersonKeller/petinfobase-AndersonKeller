import { gettAllPost } from "../../scripts/api.js";
import { createPost } from "../../scripts/api.js";
import { createPostForm, deletePostForm, updatePostForm } from "../../scripts/forms.js";
import { getLocalId, getLocalStorage } from "../../scripts/localStorage.js";
import { createModalWrapper, createModal } from "../../scripts/modal.js";

//createModalWrapper()
//createModal()
verifyPermission()
async function verifyPermission(){
    const user = await getLocalStorage()
    if(!user){
       
        window.location.replace("../login/index.html")
    }
}

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

    const userId = await getLocalId();
    const ul = document.querySelector(".ul-feed");
    ul.innerHTML = ""
    listPost.forEach((post)=>{
       
        //seta o avatar no header da home no header 
        const userAvatar = document.querySelector(".user-img");
         userAvatar.src = `${post.user.avatar}`

        const li = document.createElement("li");
        li.classList.add("li-feed");
        li.id = `${post.id}`
        const divHeader = document.createElement("div");
        divHeader.classList.add("header-li");

        const divInfos = document.createElement("div");
        divInfos.classList.add("div-infos");
        const imgUser = document.createElement("img");
        imgUser.src = `${post.user.avatar}`;
        clickExitUser(userId)
        const h2Name = document.createElement("h2");
        h2Name.classList.add("user-name")
        h2Name.innerText = `${post.user.username}`;
        const pDate = document.createElement("p");
        pDate.classList.add("date-text");
        
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
        let date = new Date(post.createdAt)
        let dateFormated = (meses[(date.getMonth())]+" de "+ date.getFullYear())
       
        pDate.innerText = `| ${dateFormated}`;
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

        if(userId == post.user.email){
            console.log(post.user.email)
            divHeader.append(divInfos,divBtns);
        }else{
            console.log(post.user.email)
            divHeader.appendChild(divInfos)
        }
       

        const divBody = document.createElement("div");
        divBody.classList.add("body-li");
        const h2Title = document.createElement("h2");
        h2Title.classList.add("post-title");
        h2Title.innerText = `${post.title}`;
        const pContent = document.createElement("textarea");
        pContent.classList.add("post-content");
        pContent.innerText = `${post.content}`;
        
        pContent.maxlength = "145";
        const linkContent = document.createElement("a");
        linkContent.addEventListener("click",()=>{
            const postComplete = modalPostComplete(post);
            createModalWrapper()
            createModal(postComplete)
        })
        linkContent.innerText = "Acessar publicação"
        divBody.append(h2Title,pContent,linkContent);

        li.append(divHeader,divBody);
        ul.appendChild(li)
    })

}

function modalPostComplete(post){
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
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
        let date = new Date(post.createdAt)
        let dateFormated = (meses[(date.getMonth())]+" de "+ date.getFullYear())
        pDate.innerText = `${dateFormated}`;
        divInfos.append(imgUser,h2Name,pDate);

        const divBody = document.createElement("div");
        divBody.classList.add("body-li");
        const h2Title = document.createElement("h2");
        h2Title.classList.add("post-title");
        h2Title.innerText = `${post.title}`;
        const pContent = document.createElement("p");
        pContent.classList.add("post-complete-modal");
        pContent.innerText = `${post.content}`;
        divBody.append(divInfos,h2Title,pContent);

        li.append(divHeader,divBody);

        return li

}

renderPost()

function clickExitUser(user){
    const imgUser = document.querySelector(".user-img");
    imgUser.addEventListener("mouseover",()=>{
        const header = document.querySelector("header");
        const divComponent = document.createElement("div");
        divComponent.classList.add("div-component");
        divComponent.classList.add("div-component-off")
        const pUserLog = document.createElement("p");
        pUserLog.classList.add("user-log");
        pUserLog.innerText = user;
        const btnLogout = document.createElement("button");
        btnLogout.classList.add("btn-logout");
        btnLogout.innerText = "Sair da conta";

        btnLogout.addEventListener("click",()=>{
            localStorage.removeItem("user");
           setTimeout( ()=> verifyPermission(),1000)
           
        
        })

        divComponent.append(pUserLog,btnLogout)
        header.appendChild(divComponent)

        const component = document.querySelector(".div-component");
        component.classList.toggle("div-component-off")
    })
}
//clickExitUser()