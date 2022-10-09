const a = '7';
const b = 7;
console.log(a == b);
console.log(a === b);



const total = 1000;
const tomatoes = 10;
const cucumbers = 5;
const apples = 15;
let tomatoesCucumbersApples = (tomatoes + cucumbers + apples);
let nuts = total - (tomatoes + cucumbers + apples);


// let tomatoesCucumbersApples = 2 * (tomatoes + cucumbers + apples);
// let nuts = total - tomatoesCucumbersApples;
// console.log('На орехи потратили: ' + nuts);


if (nuts > tomatoesCucumbersApples) {
    console.log('На орехи потратили больше!');
}  else {
    console.log('На остальное потратили больше!');
}