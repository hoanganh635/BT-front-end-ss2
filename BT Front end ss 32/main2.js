let clickbutton = document.getElementById("button")
let number = document.getElementById("number") ;

clickbutton.addEventListener("click",function(){
    number.textContent = parseInt(number.textContent) + 1
})