/*
Nahi Khan
SoftDev1 pd9
K07 -- They lock us in the tower whenever we get caught
2020-02-13
*/

const canvas = document.getElementById('playground');

const ctx = canvas.getContext('2d');

var radius = 0;
var change = 1;
var animid;
var isRunning = false;

var clearCanvas = function () {
     // console.log('clearing canvas');
     ctx.clearRect(0, 0, canvas.width, canvas.height);
};

var start = function () {
     // console.log('start')
     if (!isRunning) {
          animate();
          isRunning = true;
     };
}

var animate = function () {
     clearCanvas();
     // Starts or resets current path
     ctx.beginPath();
     ctx.fillStyle = '#00aaff';
     // Draws an arc.
     ctx.arc(canvas.width / 2, canvas.height / 2, radius * 1.5, 0, 2 * Math.PI);
     ctx.fill();

     // ctx.lineWidth = 2;
     // ctx.strokeStyle = '#000000';
     // ctx.stroke()
     
     if (radius == 200) {
          change = -1;
     } else if (radius == 0) {
          change = 1;
     };
     radius += change;
     animid = window.requestAnimationFrame(animate);
};

var stop = function () {
     // console.log('stop');
     window.cancelAnimationFrame(animid);
     isRunning = false;
}

var animaniacBtn = document.getElementById('animaniac');
animaniacBtn.addEventListener('click', start);

var stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', stop);
