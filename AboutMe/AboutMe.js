window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    setTimeout(callback, 1000 / 60);
  };
var get = document.querySelector.bind(document),
  on = document.addEventListener.bind(document),
  container = document.querySelector(".mouse-line-container"),
  context,
  canvas,
  mouseX,
  mouseY,
  px,
  py,
  points = [],
  size = 0,
  red = 0,
  green = 255,
  blue = 255,
  spread,
  SPEED_X = 0.15,
  SPEED_Y = 0.15,
  MAX_LENGTH = 120,
  RED_STEP = 0.02,
  GREEN_STEP = 0.015,
  BLUE_STEP = 0.025;
function Point(x, y, dx, dy, size, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.size = size;
  this.color = color;
}
Point.prototype.spread = function () {
  this.x += this.dx;
  this.y += this.dy;
};
function drawLines() {
  var p0,
    p1,
    p2,
    total = points.length;
  for (var i = total - 1; i > 1; i--) {
    p0 = points[i];
    p1 = points[i - 1];
    p2 = points[i - 2];
    context.beginPath();
    context.strokeStyle = p0.color;
    context.lineWidth = p0.size;
    context.globalAlpha = i / total;
    context.moveTo((p1.x + p0.x) / 2, (p1.y + p0.y) / 2);
    context.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
    context.stroke();
    p0.spread();
  }
  points[0].spread();
  points[total - 1].spread();
}
function draw() {
  var dx = (mouseX - px) * SPEED_X,
    dy = (mouseY - py) * SPEED_Y;

  if (dx < -spread) {
    dx = -spread;
  } else if (dx > spread) {
    dx = spread;
  }
  if (dy < -spread) {
    dy = -spread;
  } else if (dy > spread) {
    dy = spread;
  }

  px = mouseX;
  py = mouseY;

  points.push(
    new Point(
      px,
      py,
      dx,
      dy,
      Math.abs(Math.sin((size += 0.125)) * 10) + 1,
      "rgb(" +
        Math.floor(Math.sin((red += RED_STEP)) * 128 + 128) +
        "," +
        Math.floor(Math.sin((green += GREEN_STEP)) * 128 + 128) +
        "," +
        Math.floor(Math.sin((blue += BLUE_STEP)) * 128 + 128) +
        ")"
    )
  );

  if (points.length > MAX_LENGTH) points.shift();

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.globalCompositeOperation = "lighter";
  drawLines();
  drawLines();
  drawLines();
}
function update() {
  requestAnimationFrame(update);
  draw();
}
function resize() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
function init() {
  canvas = get("#mouse-line");
  context = canvas.getContext("2d");
  canvas.onmousemove = function (event) {
    mouseX = event.clientX - canvas.getBoundingClientRect().left;
    mouseY = event.clientY - canvas.getBoundingClientRect().top;
  };
  document.onmouseenter = function (event) {
    mouseX = event.clientX - canvas.getBoundingClientRect().left;
    mouseY = event.clientY - canvas.getBoundingClientRect().top;
    for (var i = points.length; i--; ) {
      points[i].x = mouseX;
      points[i].y = mouseY;
    }
  };
  canvas.ontouchmove = function (event) {
    mouseX =
      event.targetTouches[0].clientX - canvas.getBoundingClientRect().left;
    mouseY =
      event.targetTouches[0].clientY - canvas.getBoundingClientRect().top;
    spread = 1;
  };
  canvas.ontouchstart = function (event) {
    spread = 0;
    mouseX =
      event.targetTouches[0].clientX - canvas.getBoundingClientRect().left;
    mouseY =
      event.targetTouches[0].clientY - canvas.getBoundingClientRect().top;
    for (var i = points.length; i--; ) {
      points[i].x = mouseX;
      points[i].y = mouseY;
    }
    if (!event.target.href) {
      event.preventDefault();
    }
  };
  window.onresize = resize;
  resize();
  mouseX = canvas.width / 2;
  mouseY = canvas.height / 2;
  update();
}
on("DOMContentLoaded", init);

let element = document.querySelector(".text");

$(".text").mouseover(function () {
  if (!$(this).data("status")) {
    $(this).html("My name's Max");
    $(this).data("status", true);
  } else {
    $(this).html("console.log('Your name?')");
    element.style.transform = "translateX(0px)";
    $(this).data("status", false);
  }
});

let element_1 = document.querySelector(".text_1");

$(".text_1").mouseover(function () {
  if (!$(this).data("status")) {
    $(this).html(
      "Because  I'm  keen on Front-End development, <br>having really passion for JavaScript"
    );
    element_1.style.fontSize = "18px";
    element_1.style.transform = "translateY(-5px) translateX(-10px)";
    $(this).data("status", true);
  } else {
    $(this).html("console.info('Why?')");
    element_1.style.fontSize = "27px";
    element_1.style.transform = "translateY(0px)";
    $(this).data("status", false);
  }
});

let element_2 = document.querySelector(".text_2");

$(".text_2").mouseover(function () {
  if (!$(this).data("status")) {
    $(this).html("Very motivated, creative and <br>well-orginized person");
    element_2.style.fontSize = "20px";
    element_2.style.transform = "translateX(10px) translateY(-10px)";
    $(this).data("status", true);
  } else {
    $(this).html("function softSkills()");
    element_2.style.fontSize = "27px";
    element_2.style.transform = "translateX(0px)";
    $(this).data("status", false);
  }
});

let element_4 = document.querySelector(".text_4");

$(".text_4").mouseover(function () {
  if (!$(this).data("status")) {
    $(this).html("work, please!");
    element_4.style.fontSize = "30px";
    element_4.style.transform = "translateX(12x)";
    $(this).data("status", true);
  } else {
    $(this).html("let me");
    element_4.style.fontSize = "30px";
    element_4.style.transform = "translateX(0px)";
    $(this).data("status", false);
  }
});

let element_5 = document.querySelector(".text_5");

$(".text_5").mouseover(function () {
  if (!$(this).data("status")) {
    $(this).html("maximgrozzenberg@yandex.ru");
    element_5.style.fontSize = "22px";
    element_5.style.transform = "translateX(0px)";
    $(this).data("status", true);
  } else {
    $(this).html("$(.contacts)");
    element_5.style.fontSize = "30px";
    element_5.style.transform = "translateX(0px)";
    $(this).data("status", false);
  }
});

$(".text_5").mouseover(function () {
  if (!$(this).data("status")) {
    $(this).html("89158629049");
    element_5.style.fontSize = "22px";
    element_5.style.transform = "translateY(10px)";
    $(this).data("status", false);
  } else {
    $(this).html("maximgrozzenberg@yandex.ru");
    element_5.style.fontSize = "19px";
    element_5.style.transform = "translateY(15px) translateX(-50px)";
    $(this).data("status", true);
  }
});
