const squareContainer = document.querySelector(".squareContainer")
squareContainer.setAttribute(`style`, `display: flex; flexGrow: 1; flex-wrap: wrap;`)

function createSquare(miniSquareContainer) {
    
    // This function will create div box.
    
    const square = document.createElement("div")
    square.setAttribute(`style`, `border: 1px solid green; width: 50px; height: auto; flex-grow: 1;`);
    miniSquareContainer.appendChild(square);
        
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    });

    return square;

};

const userInput = document.getElementById("btn1");

userInput.addEventListener("click", () => {

    // This event listner will get user input (number) and use it as the number of box each side.
    
    const num = prompt("Input number of squares per side: (max 100)")

    if (num <= 100 && num >= 1) {
        
        if (squareContainer.innerHTML) {
        
            // this code block will remove square containers content if there is,
            // and when its parent (button) was cliked.
            
            squareContainer.innerHTML = '';
        };
    
        for (let i = 0; i < num; i++) {
            squareContainer.appendChild(createBoxBatch(num));
        };

    } else {
        alert("Invalid input!")
    };
});

function createBoxBatch(times) {

    // This function will create a container for a boxes. The saidcontainer will then append to main box (square container).

    const boxBatch = document.createElement("div")
    boxBatch.setAttribute(`style`, `display: flex; flexGrow: 1; height: auto; width: 100%;`)
    
    for (let i = 0; i < times; i++) {
        boxBatch.appendChild(createSquare(boxBatch));
    };

    return boxBatch
};