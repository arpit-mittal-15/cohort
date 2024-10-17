// given an array multiply every value by 2

let arr = [1,2,3,4];

let brr = arr.map((value) => {
  return value*2;
})

console.log(brr);

let crr = arr.filter((value) => {
  return (value%2 == 0);
})

console.log(crr);