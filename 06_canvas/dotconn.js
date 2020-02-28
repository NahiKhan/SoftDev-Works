// Nahi Khan
// SoftDev2 pd9
// K6 -- DOT DOT DOT
// 2020-02-11

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var xcor = -1;
var ycor = -1;
c.addEventListener('click', function(e) {drawNextDot(e)})

var clearB = document.getElementById("clear");
clearB.addEventListener('click', clearCanvas);

function clearCanvas() {
  ctx.clearRect(0, 0, c.width, c.height);
  xcor = -1;
  ycor = -1;
  console.log("Cleared");
  return 0;
}

function drawNextDot(e) {
  console.log(xcor, ycor, e.offsetX, e.offsetY)
  ctx.beginPath();
  if (xcor != -1) {
    ctx.moveTo(xcor, ycor);
    ctx.lineTo(e.offsetX, e.offsetY);
  }
  ctx.arc(e.offsetX, e.offsetY, 3, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  xcor = e.offsetX;
  ycor = e.offsetY;
}
