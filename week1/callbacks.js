function square(n){
  return n*n;
}
function cube(n){
  return n*n*n;
}

function sumOfSomething(a, b, callback){
  const val1 = callback(a);
  const val2 = callback(b);

  console.log( val1 + val2 );
}

sumOfSomething(1,2,square);