// Nahi Khan & Connor Oh
// SoftDev pd9
// K29 -- Sequential Progression III
//2019-12-12

//Few reminders:
//var b = document.getElementById("error");
//b.addEventListener('click', function(e) { console.log(e) });

var changeHeading = function(e) { // e is an event
  var h = document.getElementById("h");
  if (e.type == 'mouseover') {
    h.innerHTML = e.target.innerHTML;
  } else {
    h.innerHTML = "Hello World!";
  }
};

var removeItem = function(e) {
  e.target.remove();
};

var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseover', changeHeading);
  lis[i].addEventListener('mouseout', changeHeading);
  lis[i].addEventListener('click', removeItem);
};

var addItem = function(e) {
  var list = document.getElementById("thelist");
  var item = document.createElement("li");
  item.innerHTML = "WORD";
  item.addEventListener('mouseover', changeHeading);
  item.addEventListener('mouseout', changeHeading);
  item.addEventListener('click', removeItem);
  list.appendChild(item);
};

var button = document.getElementById("b");
button.addEventListener('click', addItem);

var fib = function(n) {
  if (n < 2) {
    return 1;
  } else {
    return fib(n-1) + fib(n-2);
  }
};

var fibNums = [];

var addFib = function(e) {
  console.log(e);
  var list = document.getElementById("fiblist");
  var item = document.createElement("li");
  item.innerHTML = addFib2(e);
  list.appendChild(item);
};

var addFib2 = function(e) {
  console.log(e);
  var ans;
  if (fibNums.length < 2) { // if the length is less than 2, the statement in else won't work
    ans = fib(fibNums.length);
  } else { // append the next fibonacci number into the list
    ans = fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2];
  }
  fibNums.push(ans);
  return ans;
};

var fb = document.getElementById("fb");
fb.addEventListener('click', addFib);
