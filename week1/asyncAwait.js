function kiratsAsyncFunction(){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve("hi there");
    }, 3000);
  });
}

async function main() {
  let value = await kiratsAsyncFunction();
  console.log("hi there 1");
  console.log(value)
}

main();

console.log("after main");