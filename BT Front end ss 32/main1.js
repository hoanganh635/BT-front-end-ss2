let button = document.getElementById("button")
let div = document.getElementById("container")
let color = ['#00aefd', '#ffa400', '#07a787', '#ff7870', 'black', 'pink', 'yellow', '#e74c3c', '#2979ff'];

button.addEventListener( "click",function (){
    let random = Math.floor(Math.random() * color.length)
    div.style.backgroundColor = color[random]
})
