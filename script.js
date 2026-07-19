const  squareContainer = document.querySelector(".squareContainer")

function createSquare() {
    const square = document.createElement("div")
    square.setAttribute(`style`, `border: 5px solid black; width: 50px; height: 50px;`);
    squareContainer.appendChild(square)

};

createSquare()
createSquare()