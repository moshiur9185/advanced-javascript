const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const part = nums.slice(2,6);
console.log(nums);

const removed = nums.splice(2,6, 90);
console.log(part);
console.log(removed);
console.log(nums);

const together = nums.join(", ");
console.log(together);