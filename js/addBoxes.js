// Add boxes

function addBox() {
    const bodyElement = document.querySelector("body")
    const div = document.createElement("div")
    div.classList.add("movable")

    bodyElement.appendChild(div)

    makeMovable()
}