function Person() {
}

var person1 = new Person(); 
var person2 = new Person();

console.log(Object.getPrototypeOf(person1) === Person.prototpye);   //true
console.log(Object.getPrototypeOf(person1).name); 