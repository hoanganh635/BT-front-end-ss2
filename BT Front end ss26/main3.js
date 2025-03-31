const array = ["manchester@gmail.com","hanoi @gmail","saigon","tokyo@.com","seul@yahoo.com"];
function filtermail(email){
    return email.includes("@") && !email.includes(" ");
}
let checkemail = array.filter(filtermail);
console.log(checkemail);