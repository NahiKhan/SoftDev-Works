/*
Nahi Khan
SoftDev2 pd9
K4 -- I SEE A RED DOOR
2020-02-05
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
  var canvasPosition = c.getBoundingClientRect();
  console.log(e);
  console.log(canvasPosition);
  xPos = e.clientX - canvasPosition.left;
  yPos = e.clientY - canvasPosition.top;
  if (mode == 0) {
    ctx.fillRect(xPos, yPos, 50, 100);
  }
  else {
    console.log("dab");
    ctx.fillRect(xPos, yPos, 5, 5);
  }
  console.log("Drew smth");
}
