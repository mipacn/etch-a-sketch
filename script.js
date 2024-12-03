

let btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let size = prompt("Enter a grid size")

    if (size === null || size.trim() === "") {
        alert("Cancelled")
        return
    }

    while (isNaN(size) || size.trim() === "") {
        size = prompt("You have to enter a valid number")

        if (size === null || size.trim() === "") {
            alert("Cancelled")
            return
        }
    }
})

