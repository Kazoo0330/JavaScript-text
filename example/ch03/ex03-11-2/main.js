const obj = {};
obj.color = "yellow";
obj["not an identifier"] = 3;

console.log(obj["not an identifier"]); //3
console.log(obj.color);  //yellow
console.log(obj["color"]);  //yellow
console.log(obj.size);  //undefined
console.log(obj[color]); //rise an error
