const numbers = [2, 5, 6, 7, 8, 9];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);   
// }

// function square(element) {
//     return element * element;
// }

// // numbers.map(function(element){
// //     console.log(element, index, array);
// // })

// const result = numbers.map(function (element) {
//     return element * element;
// })
//   console.log(result);  
// console.log(output);

// const result = numbers.map(x => x * x);
// console.log(result);

//filter
const bigger = numbers.filter(x => x > 5);
console.log(bigger)