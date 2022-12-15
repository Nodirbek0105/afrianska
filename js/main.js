var elul = document.querySelector("[data-ul]")
var ellabel = document.querySelector("[data-label]")
var elimg = document.querySelector("[data-img]")


ellabel.addEventListener("click" , ()=>{
  elul.classList.toggle("visually")
  elul.style.transition= "0.5s"
})

elimg.addEventListener("click" , ()=>{
  elul.classList.toggle("visually")
  elul.style.transition= "0.5s"
})