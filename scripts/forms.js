import { renderPost } from "../pages/home/index.js";
import { createPost, updatePost, deletePost } from "./api.js";

export function createPostForm(){
    const formulario = document.createElement("form")
    formulario.classList.add("formbase");

    formulario.insertAdjacentHTML("beforeend",`
    <h3 class="post-title">Criando novo post</h3>
        <label for="title">Titulo</label>
        <input placeholder="Digite o título aqui..." name="title" required>
        <label for="content">Conteúdo do post</label>
        <input type="text" placeholder="Desenvolva o conteúdo do post aqui..." name="content" required>
        <div class="div-btns">
        <button class="btn-cancel">Cancelar</button>
        <button type="submit" class="btn-submit">Publicar</button>
        </div>
        `);
    formulario.addEventListener("submit",async (e)=>{
        e.preventDefault()
        const inputs = [...formulario.elements];
        console.log(inputs)
        const newPost = {}
        inputs.forEach(({name,value})=>{
            if(name){
                newPost[name] = value
            }
        })
        await createPost(newPost);
        await renderPost();
        // const wrapper = document.querySelector(".modal-wrapper");
        // wrapper.remove()
        
    });
    return formulario;
}

export function updatePostForm({title,content,id}){
    const formulario = document.createElement("form")
    formulario.classList.add("formbase");

    formulario.insertAdjacentHTML("beforeend",`
    <h3 class="post-title">Editar post</h3>
        <label for="title">Titulo</label>
        <input placeholder="Digite o título aqui..." name="title" value="${title}" required>
        <label for="content">Conteúdo do post</label>
        <input type="text" placeholder="Desenvolva o conteúdo do post aqui..." name="content" value="${content}" required>
        <div class="div-btns">
        <button class="btn-cancel">Cancelar</button>
        <button type="submit" class="btn-submit">Atualizar</button>
        </div>
        `);
    formulario.addEventListener("submit",async (e)=>{
        e.preventDefault()
        const inputs = [...formulario.elements];
        console.log(inputs)
        const newPost = {}
        inputs.forEach(({name,value})=>{
            if(name){
                newPost[name] = value
            }
        })
        await updatePost(newPost,id)
        await renderPost();
        // const wrapper = document.querySelector(".modal-wrapper");
        // wrapper.remove()
        
    });
    return formulario;
}
export function deletePostForm(id){
    console.log(id)
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    formulario.insertAdjacentHTML("beforeend", `
        <h3>Deletar Post</h3>

        <h4>Certeza que deseja excluir este post?</h4>
        <p>Após executar essa ação não será possível desfazer</p>

        <div>
            <button type="submit" class="createButton">Deletar Post</button>
        </div>
    `)
    formulario.addEventListener("submit",async (e)=>{
        e.preventDefault();

        await deletePost(id);
        await renderPost();

    })
    return formulario
}