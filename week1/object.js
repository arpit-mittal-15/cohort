function objectMethods(obj){
  console.log("Original object: ", obj);

  let keys = Object.keys(obj);
  console.log("keys: ", keys);

  let values = Object.values(obj);
  console.log("values: ", values);

  let entries = Object.entries(obj);
  console.log("entries: ", entries);

  let hasProp = Object.hasOwnProperty("property");
  console.log("hasProp: ", hasProp);

  let newObj = Object.assign({}, obj, {newProperty: "newvalue"});

  console.log("after assign: ", newObj);
}

let obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
}

objectMethods(obj);