export function createModalWrapper(){
    const body = document.querySelector("body")
    const modalWrapper = document.createElement("div");
    modalWrapper.classList.add("modal-wrapper");
   // createModal()
    body.appendChild(modalWrapper)
}

export function createModal(children){
    console.log(children)
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container");

    const btnClose = document.createElement("button");
    btnClose.classList.add("btn-close-modal")
    btnClose.innerText = "X";
    btnClose.addEventListener("click",()=>{
        const wrapper = document.querySelector(".modal-wrapper");
        wrapper.remove()
    })
    modalContainer.append(btnClose,children)
    
    const wrapper = document.querySelector(".modal-wrapper");
    wrapper.appendChild(modalContainer)
}