export function createModalWrapper(){
    const body = document.querySelector("body")
    const modalWrapper = document.createElement("div");
    modalWrapper.classList.add("modal-wrapper");
   // createModal()
    body.appendChild(modalWrapper)
}

export function createModal(){
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container");

    const btnClose = document.createElement("button");
    btnClose.classList.add("btn-close-modal")
    btnClose.innerText = "X";
    modalContainer.appendChild(btnClose)

    const wrapper = document.querySelector(".modal-wrapper");
    wrapper.appendChild(modalContainer)
}