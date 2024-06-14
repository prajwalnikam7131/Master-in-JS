
// ## In this chapter to learn conversion of 'data types'.

const num = 33;
console.log(num); // 33
console.log(typeof (num)); // number

const numToString = String(num);
console.log(numToString); // 33
console.log(typeof (numToString)); // string


let str = `Prajwal`;
let strToNumber = Number(str);
console.log(strToNumber); // NaN
console.log(typeof (strToNumber)); // number