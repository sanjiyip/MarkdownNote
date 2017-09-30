function Person() {
}

Person.prototype.name = "Nicholas";
Person.prototype.age = "29";
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

var person1 = new Person();
var person2 = new Person();

console.log(person1.hasOwnProperty("name"));
console.log("name" in person1);

person1.name = "Greg";
console.log(person1.name);
console.log(person1.hasOwnProperty("name"));
console.log("name" in person1);

console.log(person2.name);
console.log(person2.hasOwnProperty("name"));
console.log("name" in person2);

delete person1.name;
console.log(person1.name);
console.log(person1.hasOwnProperty("name"));
console.log("name" in person1);

function hasOwnProperty(Object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}

var o = {
    toString : function(){
        return "My Object" ;
    }
};

for(var prop in o) {
    if (prop === "toString") {
        console.log("Found toString");
    }
}