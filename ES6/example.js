let RegExp = "Hello";
console.log(RegExp);
console.log(window.RegExp === RegExp); // false

const ncz = "Hi!";
console.log(ncz); // "Hi!"
console.log("ncz" in window); // false
