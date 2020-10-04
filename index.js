// All the necessary selectors
let buttonNew = document.getElementsByTagName("button")[0];
let buttonEasy = document.getElementsByTagName("button")[1];
let buttonHard = document.getElementsByTagName("button")[2];
let status = document.querySelector("span");
let colorBoxes = document.getElementsByClassName("colorBox");
let colorBoard = document.getElementById("colorBoard");
let upperSection = document.getElementById("upperSection");

// All the necessary functions to pick numbers and colours
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function getRandomColor(){
    let r = getRandomInt(256);
    let g = getRandomInt(256);
    let b = getRandomInt(256);
    let color = "rgb(" + r + ", " + g + ", " + b + ")"
    return color;
}
function getRandomIndex(difficulty) {
    if (difficulty === "easy") {
        return getRandomInt(3);
    }else if (difficulty === "hard") {
        return getRandomInt(6);
    }
}
function assignColor(difficulty) {
    let len = -1;
    if (difficulty === "hard") {
        len = 6;
    }else if (difficulty === "easy") {
        len = 3;
    }
    for (let i = 0; i < len; i ++) {
        colorBoxes[i].style.backgroundColor = getRandomColor();
    }
}
// All the eventListeners for buttons
buttonEasy.addEventListener("click", function(){
    buttonEasy.classList.add("clicked");
    buttonHard.classList.remove("clicked");
    upperSection.style.backgroundColor = "steelblue";
    canClick = true;
    currentDifficulty = "easy";
    for (let j = 0; j < 3; j ++) {
        colorBoxes[j].style.display = "block";
    }
    for (let k = 3; k < colorBoxes.length; k ++) {
        colorBoxes[k].style.backgroundColor = "#625261";
    }
    targetIndex = getRandomIndex(currentDifficulty);
    targetColor = getRandomColor();
    colorBoard.textContent = targetColor;
    assignColor("easy");
    colorBoxes[targetIndex].style.backgroundColor = targetColor;
    status.textContent = ">>Pick Now!<<";
})
buttonHard.addEventListener("click", function(){
    buttonEasy.classList.remove("clicked");
    buttonHard.classList.add("clicked");
    upperSection.style.backgroundColor = "#89beb3";
    canClick = true;
    currentDifficulty = "hard";
    for (let l = 0; l < colorBoxes.length; l ++) {
        colorBoxes[l].style.display = "block";
    }
    targetIndex = getRandomIndex(currentDifficulty);
    targetColor = getRandomColor();
    colorBoard.textContent = targetColor;
    assignColor("hard");
    colorBoxes[targetIndex].style.backgroundColor = targetColor;
    status.textContent = ">>Pick Now!<<";
    
    
})
buttonNew.addEventListener("click", function() {
    upperSection.style.backgroundColor = "#89beb3";
    canClick = true;
    targetIndex = getRandomIndex(currentDifficulty);
    targetColor = getRandomColor();
    colorBoard.textContent = targetColor;
    assignColor(currentDifficulty);
    colorBoxes[targetIndex].style.backgroundColor = targetColor;
    status.textContent = ">>Pick Now!<<";
    
})
// Listeners for colour boxes 
for (let m = 0; m < colorBoxes.length; m ++) {
    colorBoxes[m].addEventListener("click", function() {
        
        if (canClick) {
            if (m !== targetIndex) {
                colorBoxes[m].style.backgroundColor = "#625261";
            }else if (m === targetIndex) {
                canClick = false;
                upperSection.style.backgroundColor = targetColor;
                status.textContent = ">>Good Job!<<";
                buttonNew.textContent = "Play Again!";
                if (currentDifficulty === "hard") {
                    for (let n = 0; n < colorBoxes.length; n ++) {
                        colorBoxes[n].style.backgroundColor = targetColor;
                        colorBoxes[n].style.display = "block";
                    }
                }else if (currentDifficulty === "easy") {
                    for (let o = 0; o < 3; o ++) {
                        colorBoxes[o].style.backgroundColor = targetColor;
                        colorBoxes[o].style.display = "block";
                    }
                }
            }
        }
        
    })
}

// Setting default properties 
let defaultDifficulty = "hard";
let currentDifficulty = defaultDifficulty;
let targetColor = getRandomColor();
let targetIndex = getRandomIndex(currentDifficulty);
let canClick = true;
colorBoard.textContent = targetColor;
assignColor(currentDifficulty);
colorBoxes[targetIndex].style.backgroundColor = targetColor;
buttonHard.classList.add("clicked");
