//javascript object notation

//JSON.parse()
//JSON.stringify()

const users = {
  name: "arpit",
  age: 20,
  gender: "male",
};

let usersJSON = JSON.stringify(users);

console.log(JSON.parse(usersJSON));