// if(user === student[0]){
//     alert('you are welcome');
// }else if(user === student[1]){
//     alert('you are welcome');
// }else if(user === student[2]){
//     alert('you are welcome');
// }else if(user === student[3]){
//     alert('you are welcome');
// }else{
//     alert('you are not allowed')
// }

let student = ["wahid", "waleed", "hassan", "akeel"];

let user = prompt("enter your name");
let allow = false;

for(let i = 0; i < student.length; i++){
    // console.log(student[i]);
    if(user === student[i]){
        allow = true
    alert('you are welcome')
    console.log('allow', allow);
    
    break;
} 
}
    if(allow === false){
        alert('not allowed')
        console.log('allow',allow);
        
    }

