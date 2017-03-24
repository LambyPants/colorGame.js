var numberOfSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var reset = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
      // if(this.textContent === "Easy") {
      //   numberOfSquares = 3;
      // } else {
      //   numberOfSquares = 6;
      // }
      startOver();

    });
  }
  for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i];
    //add event listeners to all squares
    squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.background;
    //compre color to pickedColor
    if (clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      reset.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.background = clickedColor;

    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
    });
  }
  startOver();

}



function startOver(){
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  message.textContent = ""
  for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
}
  h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   colors = generateRandomColors(numberOfSquares);
//   numberOfSquares = 3;
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]){squares[i].style.background = colors[i];
//   }
//   else {
//     squares[i].style.display = "none";
//   }
// }
// });
// hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numberOfSquares = 6;
//   colors = generateRandomColors(numberOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//   {squares[i].style.background = colors[i];
//   squares[i].style.display = "block";
//   }
//
// }
// });


reset.addEventListener("click", function(){
startOver();
})


function changeColors(x){
  //loop through all squares
  for(var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = x;
  }

}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num){
  //make an array
  var arr = [];
  //loop through array num times
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
        //get random colors and push into arr

  }
  return arr;
}

function randomColor(){
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
// "rgb(r, g, b);"
return "rgb(" + r + ", " + g + ", " + b + ")";
}
