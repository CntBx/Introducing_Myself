const element = document.querySelector(".Square");

let dragging = false;

let startX = 0;
let startY = 0;

element.addEventListener("mousedown", (e) => {
  dragging = true;
  startX = e.pageX - Number.parseInt(element.style.left || 0);
  startY = e.pageY - Number.parseInt(element.style.top || 0);
});

document.body.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  element.style.top = `${e.pageY - startY}px`;
  element.style.left = `${e.pageX - startX}px`;
});

document.body.addEventListener("mouseup", () => {
  dragging = false;
});

const element_1 = document.querySelector(".Square_1");

let dragging1 = false;

let startX1 = 0;
let startY1 = 0;

element_1.addEventListener("mousedown", (e) => {
  dragging1 = true;
  startX = e.pageX - Number.parseInt(element_1.style.left || 0);
  startY = e.pageY - Number.parseInt(element_1.style.top || 0);
});

document.body.addEventListener("mousemove", (e) => {
  if (!dragging1) return;
  element_1.style.top = `${e.pageY - startY}px`;
  element_1.style.left = `${e.pageX - startX}px`;
});

document.body.addEventListener("mouseup", () => {
  dragging1 = false;
});

const element_2 = document.querySelector(".Square_3");

let dragging2 = false;

let startX2 = 0;
let startY2 = 0;

element_2.addEventListener("mousedown", (e) => {
  dragging2 = true;
  startX2 = e.pageX - Number.parseInt(element_2.style.left || 0);
  startY2 = e.pageY - Number.parseInt(element_2.style.top || 0);
});

document.body.addEventListener("mousemove", (e) => {
  if (!dragging2) return;
  element_2.style.top = `${e.pageY - startY2}px`;
  element_2.style.left = `${e.pageX - startX2}px`;
});

document.body.addEventListener("mouseup", () => {
  dragging2 = false;
});
