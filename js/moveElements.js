function makeMovable() {
    const movables = document.getElementsByClassName("movable")
    const body = document.querySelector("body")
    let offsetX, offsetY = undefined
    let zIndex =  0

    // Loop only necessary for multiple movable elements
    for(let i = 0; i < movables.length; i++) {

        movables[i].addEventListener("mousedown", (e) => {
            
            let elementRect = movables[i].getBoundingClientRect()
            offsetX = e.clientX - elementRect.x
            offsetY = e.clientY - elementRect.y

            body.addEventListener("mousemove", calcElementPosition)
            body.addEventListener("mouseup", () => {
                body.removeEventListener("mousemove", calcElementPosition)
            })
        })

        // Calculates element position relative to the mouse
        const calcElementPosition = function (e) {
            let newPosX = ( e.clientX - offsetX ) / window.innerWidth
            let newPosY = ( e.clientY - offsetY ) / window.innerHeight

            movables[i].style.left = `${newPosX * 100}%`
            movables[i].style.top = `${newPosY * 100}%`
            movables[i].style.zIndex = zIndex++
        }
    }	
}

makeMovable()
