var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
};

// Code to run when New Colors / Play Again button is clicked
resetButton.addEventListener("click", reset)

// Shows RGB color in H1
colorDisplay.textContent = pickedColor

// Resets game
function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue"
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block"
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = "none"
    }
    squares[i].style.backgroundColor = colors[i];
  };
};

// Sets difficulty to Easy or Hard
function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected")
      modeButtons[1].classList.remove("selected")
      this.classList.add("selected")
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  };
}

 // Main logic for determining if clicked color is correct
function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;

      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  };
}

// Changed all colors to correct color 
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  };
};

// Picks a random color from Colors array
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

// Puts colors generated in randomColor into an array
function generateRandomColors(num) {
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  };
  return arr;
};

// Generated a random color
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"
}