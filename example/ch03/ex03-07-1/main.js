const dialog1 = "He looked up and said \"don't do that!\" to Max.";

const dialog2 = 'He looked up and said "don\'t do that!" to Max.';

console.log(dialog1);
console.log(dialog2);
console.log(dialog1 === dialog2);

const dialog3 =  `He looked up and said "don't do that!" to Max.`;
console.log(dialog3);

console.log(dialog2 === dialog3);


const s = "in JavaScript, use \\ as an escape character in strings.";
console.log(s);

const a = "line1\nline2";
console.log(a);

const b = "windows line1\r\nwindows line2";
console.log(b);

const c = "speed:\t60mph";
console.log(c);

const d = `New in ES2015: \` strings.`;
console.log(d);

let interpolation = "modification";
const e = `New in ES2015: ${interpolation}`
console.log(e);

