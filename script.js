
let container = document.querySelector(".container2")
let btn = document.querySelector("button")

btn.addEventListener("click", () => {
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }

    let size = prompt("Enter a grid size (max:100)")
    

    if (size === null || size.trim() === "") {
        alert("Cancelled")
        return
    }

    while (isNaN(size) || size.trim() === "" || size > 100) {
        size = prompt("You have to enter a valid number")

        if (size === null || size.trim() === "") {
            alert("Cancelled")
            return
        }
    }

    let i = 0
    while(i < size ** 2){
        let div = document.createElement("div")
        container.append(div)
        let prop = 100 / size
        div.style.cssText = `display: flex; box-sizing: border-box; flex: 1 1 ${prop}%; aspect-ratio: 1 / 1; justify-content: center; align-items: center`
        i++
        div.classList.add("grid")
    }
    
})

