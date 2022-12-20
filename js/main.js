var elul = document.querySelector("[data-ul]");
var ellabel = document.querySelector("[data-label]");
var ellabel2 = document.querySelector("[data-label2]");
var elimg = document.querySelector("[data-img]");
// var eldiv = document.querySelector("[data-container]");

ellabel.addEventListener("click", () => {
  ellabel.classList.add("visually");
  elul.classList.toggle("hamburger-list");
});

ellabel2.addEventListener("click", () => {
  ellabel.classList.remove("visually");
  elul.classList.toggle("hamburger-list");
});