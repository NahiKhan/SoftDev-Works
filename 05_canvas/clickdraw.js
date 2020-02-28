/*
Nahi Khan
SoftDev2 pd9
K5 -- AND I WANT TO PAINT IT BETTER
2020-02-06
*/

/*e.preventDefault()
    stops an element from performing its default action
    Ex: does not let a check box be checked
  ctx.beginPath()
    creates a new path for the ctx to draw on
    if you don't call this after drawing, it will connect different shapes when you fill
  e.offsetX
    gives the X coordinate of the mouse based on the padding edge of the target object
  e.offsetY
    gives the Y coordinate of the moues based on the padding edge of the target object
*/


var mode = 0 //rect mode
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
c.addEventListener('click', function(e) {drawShape(e)});

var clearB = document.getElementById("clear");
clearB.addEventListener('click', clearCanvas);

var modeB = document.getElementById("mode");
modeB.addEventListener('click', changeMode);


function clearCanvas() {
  ctx.clearRect(0, 0, c.width, c.height);
  //console.log("Da");
  return 0;
}

function changeMode() {
  if (mode == 0) {
    mode = 1;
  }
  else {
    mode = 0
  }
  console.log(mode);
}

function drawShape(e) {
  // var canvasPosition = c.getBoundingClientRect();
  // console.log(e);
  // console.log(canvasPosition);
  // xPos = e.clientX - canvasPosition.left;
  // yPos = e.clientY - canvasPosition.top;
  if (mode == 0) {
    ctx.fillRect(e.offsetX, e.offsetY, 50, 100);
  }
  else {
    console.log("dab");
    //ctx.fillRect(xPos, yPos, 5, 5);
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 3, 0, 2*Math.PI);
    ctx.fill();
  }
  console.log("Drew smth");
}
