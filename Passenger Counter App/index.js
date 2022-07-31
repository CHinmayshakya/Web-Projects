let count = 0
let countEl = document.getElementById("count-el")
let dispEl = document.getElementById("display-el")

function incriment() {
    console.log("Button Clicked")
    count++
    countEl.textContent = count
}

function save() {
    dispEl.textContent += count + " - "
    console.log(count)
    count = 0
    countEl.textContent = count
}
