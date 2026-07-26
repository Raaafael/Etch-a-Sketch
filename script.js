const squareContainer = document.querySelector(".squareContainer")
squareContainer.setAttribute(`style`, `display: flex`)

function createSquare(miniSquareContainer) {
    // This function will create div box.
    const square = document.createElement("div")
    square.setAttribute(`style`, `border: 1px solid green; width: 50px; height: 50px; flexGrow: 1;`);
    miniSquareContainer.appendChild(square);
    
    
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    });

    return square;

};

const userInput = document.getElementById("btn1");

userInput.addEventListener("click", () => {

    // This event listner will get user input (number) and multiply it.
 const num = prompt("Input number of squares per side: (max 100)")

    if (num <= 100 && num >= 1) {
    
        for (let i = 0; i < num; i++) {
            squareContainer.appendChild(createBoxBatch(num));
        };

    } else {
        alert("Invalid input!")
    };

});

function createBoxBatch(times) {

    const boxBatch = document.createElement("div")
    // boxBatch.setAttribute(`style`, `display: flex;`)
    

    for (let i = 0; i < times; i++) {
        boxBatch.appendChild(createSquare(boxBatch));
    };

    return boxBatch
    console.log(boxBatch)
};