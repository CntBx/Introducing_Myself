const text = document.querySelector(".text");

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

text.addEventListener("mouseover", function (event) {
  if (event.target.tagName != "SPAN") return;
  event.target.classList.add("active");
});

const text_1 = document.querySelector(".text_1");

text_1.innerHTML = text_1.textContent.replace(/\S/g, "<span>$&</span>");

text_1.addEventListener("mouseover", function (event) {
  if (event.target.tagName != "SPAN") return;
  event.target.classList.add("active_1");
});

const text_2 = document.querySelector(".text_2");

text_2.innerHTML = text_2.textContent.replace(/\S/g, "<span>$&</span>");

text_2.addEventListener("mouseover", function (event) {
  if (event.target.tagName != "SPAN") return;
  event.target.classList.add("active_2");
});
