// console.log("hello world");

//objects

const users1 = [{
  firstName: "arpit",
  gender: "male"
},{
  firstName: "mittal",
  gender: "male"
},{
  firstName: "kirat",
  gender: "female"
}]

for(let i=0; i<users1.length; i++){
  if(users1[i].gender == "male"){
    console.log(users1[i].firstName);
  }
}

// let sum = 0;

// for(let i=0; i<1000000000000; i++){
//   sum = sum + i;
// }

// console.log(sum);