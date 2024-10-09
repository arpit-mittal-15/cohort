class Animal{
  constructor(name, legCount, speaks){
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }

  static myType(){
    console.log("animal");
  }

  describe(){
    return `${this.name} has ${this.legCount} legs and speaks ${this.speaks}.`
  }
}

let dog = new Animal("dog", 4, "bhow bhow");

console.log(dog.describe());
Animal.myType();