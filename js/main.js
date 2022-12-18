var elul = document.querySelector("[data-ul]")
var ellabel = document.querySelector("[data-label]")
var ellabel2 = document.querySelector("[data-label2]")
var elimg = document.querySelector("[data-img]")


ellabel.addEventListener("click" , ()=>{
  ellabel.classList.toggle("visually")
  elul.classList.toggle("hamburger-list")
})

ellabel2.addEventListener("click" , ()=>{
  ellabel.classList.remove("visually")
  elul.classList.toggle("hamburger-list")
})