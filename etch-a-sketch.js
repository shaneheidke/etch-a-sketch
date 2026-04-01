const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);
body.style.display = "flex";
body.style.justifyContent = "center"

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.display = "flex";
    
    for (let j = 0; j < 16; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.border = "1px solid black";
        box.style.padding = "20px"
        box.addEventListener("mouseover", (e) => changeColor(e))
        row.appendChild(box);
    }

    container.appendChild(row);

}