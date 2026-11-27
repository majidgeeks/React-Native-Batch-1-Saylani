// for(let i = 0; i <= 10; i++){
//     console.log(i);
    
//     if(i === 5){
//         break;
//     }
// }


var students = ["ali", "ahmed", "wahid", "hassan"];

let user = prompt('enter your name');

let found = false;

for(let i = 0; i < students.length; i++){
   if(user === students[i]){
    found = true;
    break;
}
};

if(found === true){
  alert('welcome');
}else{
    alert('you are not allowed')
}

