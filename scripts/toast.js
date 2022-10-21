const toast = (title, message) => { 
    const body = document.querySelector("body")

    const container = document.createElement("div")
    container.classList.add("toast-container")

    const icon = document.createElement("img")
    icon.alt = `Mensagem de ${title}`

    icon.setAttribute("src","../../assets/img/check.png")

    const headerToast = document.createElement("div");
    headerToast.classList.add("header-toast");
    const textContainer = document.createElement("div")

    const h3 = document.createElement("h3")
    h3.innerText = title

    const span = document.createElement("span")
    span.innerText = message


    headerToast.append(icon,h3);

    textContainer.append(span)

    container.append(headerToast, textContainer)

    body.appendChild(container)

}

export default toast