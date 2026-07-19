const squareContainer = document.querySelector(".squareContainer")

function createSquare() {
    const square = document.createElement("div")
    square.setAttribute(`style`, `border: 2px solid black; width: 50px; height: 50px;`);
    squareContainer.appendChild(square);
    
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    });

};

function multiplySqaure(multiplyBy) {
    let times = multiplyBy
    for (let i = 0; i < times; i++) {
        createSquare()
    };

};

multiplySqaure(256);



