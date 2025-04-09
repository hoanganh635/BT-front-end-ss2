const students =[
    {   id : 1,
        name : "john",
        age : 18,
        address : "New York",

    },
    {
        id : 2,
        name : "Mike",
        age : 22,
        address : "Canada"
    },
    {
        id : 3,
        name : "Marin",
        age : 30,
        address : "Seul"
    },
    {
        id : 4,
        name : "Faker",
        age : 29,
        address : "Ha Noi ",
    }
]

function makestudenttable(){
    const table = document.getElementById("bodytable")
    table.innerHTML = "";
    students.forEach(student => {
        const row = document.createElement("tr");
        
        const cell1 = document.createElement("td");
        cell1.textContent = student.id;
        row.appendChild(cell1);

        // Tạo và thêm ô cho Name
        const cell2 = document.createElement("td");
        cell2.textContent = student.name;
        row.appendChild(cell2);

        // Tạo và thêm ô cho Age
        const cell3 = document.createElement("td");
        cell3.textContent = student.age;
        row.appendChild(cell3);

        // Tạo và thêm ô cho Address
        const cell4 = document.createElement("td");
        cell4.textContent = student.address;
        row.appendChild(cell4);
        });

        table.appendChild(row);

}

window.onload = makestudenttable;