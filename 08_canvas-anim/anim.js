//Nahi Khan
//Softdev1 pd9
//K08 -- They What is it saving the screen from?
//2020-02-14

//Global Variables
var radius = 0; //radius of circle
var animateCirclepls = false; //tells when to play animation
var animateSaverpls = false; //tells when to play animation
var requestC, requestS;	//will store the id when played so we can stop the animation
var change = 1; //amount to change radius by
var c = document.getElementById("screen");
var ctx = c.getContext("2d");
var x = 300;
var y = 300;
var dx = Math.floor(Math.random() * Math.floor(3)) + 1;
var dy = Math.floor(Math.random() * Math.floor(3)) + 1;
var circle = function(e){
  if (radius <= 2){
    change = 1; //if the radius is too small, then start increasing radius
  }else if(radius >= 300){
    change = -1; //if too big then start decreasing
  }
  radius += change;
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle = "#ff0000";
  ctx.beginPath();
  ctx.arc(300, 300, radius,0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  requestC = window.requestAnimationFrame(circle); //sets the request to a new request
};

var bounce = function(e){
  ctx.clearRect(0, 0, c.width, c.height);
  var logo = new Image();
  logo.src = "static/logo_dvd.jpg";
  ctx.drawImage(logo, x, y, 50, 33.3)
  requestS = window.requestAnimationFrame(bounce); //sets the request to a new request
  if(x + dx > c.width - 40|| x + dx < 10) {
    dx = -dx;
  }
  if(y + dy > c.height - 50|| y + dy < 10) {
      dy = -dy;
  }
  x += dx;
  y += dy;
};


var animateCircle = function(e){
  if(!animateCirclepls){

    window.requestAnimationFrame(circle); //calls the function recursively
    animateCirclepls = true; //sets the boolean true
    animateSaverpls = false; //sets the boolean false
    radius = 0;
    window.cancelAnimationFrame(requestS);
  }
};

var animateCirclebutton = document.getElementById("go");
animateCirclebutton.addEventListener('click', animateCircle);


var animateSaver = function(e){
  if(!animateSaverpls){
    window.requestAnimationFrame(bounce); //calls the function recursively
    animateCirclepls = false; //sets the boolean false
    animateSaverpls = true; //sets the boolean true
    x = 300;
    y = 300;
    dx = Math.floor(Math.random() * Math.floor(3)) + 1;
    dy = Math.floor(Math.random() * Math.floor(3)) + 1;
    window.cancelAnimationFrame(requestC);
  }
};

var animateSaverbutton = document.getElementById("bounce");
animateSaverbutton.addEventListener('click', animateSaver);

var stop = function(e){
     if (animateCirclepls || animateSaverpls){
         animateCirclepls = false;
         animateSaverpls = false;
         window.cancelAnimationFrame(requestS);
         window.cancelAnimationFrame(requestC);
     }
 };

 var stopButton = document.getElementById("stop");
 stopButton.addEventListener("click", stop);
