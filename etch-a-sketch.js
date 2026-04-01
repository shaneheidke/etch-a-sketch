function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

function fillGrid() {
    container.replaceChildren();
    container.addEventListener("mouseover", (e) => changeColor(e))
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }

        container.appendChild(row);
    }
}

const body = document.querySelector("body");
const container = document.createElement("div");

let gridSize = 16;
fillGrid();

const button = document.createElement("button");
button.textContent = "Change Grid Size";
button.addEventListener("click", () => {
    let response = Number(prompt("Please enter the preferred grid size (one number x, grid = x * x)"))
    while (response > 100 || response < 1 || !Number.isInteger(response)) {
        response = Number(prompt("Invalid number. Choose a number between 1 and 100."));
    }
    gridSize = response;
    fillGrid();
});

body.appendChild(button);
body.appendChild(container);
