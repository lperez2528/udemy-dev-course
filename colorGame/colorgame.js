var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

// Code to run when New Colors button is clicked
resetButton.addEventListener("click", function() {
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#232323"
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  };
});

// Shows RGB color in H1
colorDisplay.textContent = pickedColor

// Main logic for determining if clicked color is correct
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

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