function calculateTime(){
  let a=0;
  for(let i=0; i<100000000; i++){
    a+=i;
  }
}

let beforeDate = new Date();
let beforeTime = beforeDate.getTime();

calculateTime();

let afterDate = new Date();
let afterTime = afterDate.getTime();

console.log(afterTime - beforeTime);