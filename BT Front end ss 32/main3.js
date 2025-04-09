

function add (){
    let input = document.getElementById("text")
let addlession = document.getElementById("addlession")
let sujectname = input.value.trim();
if(sujectname === ""){
    alert("môn học ko được để trống")
    return 
}

let ol = document.getElementById("subjectList")
let li = document.createElement("li")
 li.textContent = sujectname
 ol.appendChild(li)

input.value = "";
}