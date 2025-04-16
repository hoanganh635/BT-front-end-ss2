const wordList = [
    {
        id : 1,
        content : "Manchester City",
        dueDate : "2023-04-17",
        status : "shooting",
        assignedTo : "Yaya Toure",
    },
    {
        id : 2,
        content : "Manchester Unt",
        dueDate : "2002-04-17",
        status : "passing",
        assignedTo : "Wayne Rooney"
    }
]


addDataToLocalStorage()
function addDataToLocalStorage (data){
    localStorage.setItem("wordList",JSON.stringify(data))
}
addDataToLocalStorage(wordList)

function getDataFromLocalStorage (){
    return JSON.parse(localStorage.getItem("wordList")) || []
}

let tbodyEl = document.querySelector("tbody")
function renderData (list = wordList){
    let dataHtml = '';
    for(let i = 0;i< list.length; i++){
        dataHtml += `
               <tr>
            <th scope="row">${i+1}</th>
            <td>${list[i].content}</td>
            <td>${list[i].dueDate}</td>
            <td>${list[i].status}</td>
            <td>${list[i].assignedTo}</td>
            <td>
                <button>Sửa </button>
                <button onclick= deleteData(${i})>Xóa </button>
            </td>
          </tr>     
        `
    }
    tbodyEl.innerHTML = dataHtml;
}

renderData(getDataFromLocalStorage());

let a = getDataFromLocalStorage()

function addDataFromPeople (event){
    event.preventDefault()
    let getin4 = event.target
    
    let newId = a.length > 0 ? Math.max(...a.map(item => item.id)) + 1 : 1;
    let newWordList = {
        id : newId,
        content :getin4.content.value,
        dueDate : getin4.date.value,
        status : getin4.status.value,
        assignedTo : getin4.Assigned.value
    }

    a.push(newWordList)
    
    addDataToLocalStorage(a)
    renderData(a)
    getin4.reset()
}

function deleteData (index){
   a.splice(index,1)
}



    


