const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")

hamburger.addEventListener("click", ()=>{
menu.classList.toggle("hidden")
hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
      menu.classList.toggle("hidden")
      hamburger.classList.toggle("bg-white")
    })
  })
  
  moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
  })