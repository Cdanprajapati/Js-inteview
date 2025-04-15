// let x = 1, y = x && (() => 2)() || 3; 
// console.log(y);

// console.log(3 > 2 > 1) // false
// This happens due to JavaScript's implicit type coercion and how comparison operators work.

// Breakdown of console.log(3 > 2 > 1); // false
// 3 > 2 → true (because 3 is greater than 2).

// Now, true > 1 is evaluated.

// In JavaScript, true is coerced to 1, so this becomes 1 > 1, which is false.

// The final result is false.
// ===============================================================================
// console.log(3 < 2 < 1) 
// Breakdown of console.log(3 < 2 < 1); // true
// 3 < 2 → false (because 3 is not less than 2).

// Now, false < 1 is evaluated.

// In JavaScript, false is coerced to 0, so this becomes 0 < 1, which is true.

// The final result is true.

// console.log(2+"3"+4)


// let x = 121;
// check pelindrome

// let arr = [ 1, 2, 3, 4, 5];
// let index = 2;

// we have to swap the value after the index element

// for(let i = 0; i < data.length; i++){
//   if(arr[i] == index){
//     let temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//   }
// }

// let arr = [ 2, 10, 100, 11, 20 ];
// const sorted = (arr) => {
// for(let i = 0; i < arr.length - 1; i++){
//   for(let j = 0; j < arr.length - i - 1; j++){
//     if(arr[j]>arr[j+ 1]){
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
//   return arr;
// }

// console.log(sorted(arr));


// const arr = [ 
//     {id : 1, id : 2}];
//     let result = arr.find(item => item.id == 2);
//     console.log(result);

// let x = 1;
// x = 1++;
// console.log(x);

// let result = [1, 2].map((x) => ({val: x * 2}));
// console.log(result);







