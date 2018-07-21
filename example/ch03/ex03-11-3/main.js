const obj = {};
obj.color = "yellow";
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]);

const SIZE = Symbol();
obj[SIZE] = 8;

console.log(obj[SIZE]);
console.log(obj);
