
// Find min and max 
// let arr = [23, 34, 45, 56, 67, 22, 12, 45];

// let min = arr[0];
// let max = arr[0];

// for( let i = 0; i < arr.length; i++ ){
//   if(arr[i] < min){
//     min = arr[i]
//   } else if (arr[i] > max){
//     max = arr[i]
//   } 
// }

// console.log(min, max);


// -----------------------------------------------------

// Find the index 
// let arr = [34, 12, 23, 45, 67, 88, 99, 01];
// let position = 0;

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] === 45){
//     console.log(i)
//   }
// }


// --------------------------------------------------------
// find the second largest number of the array 

// let arr = [ 12, 23, 45, 23, 45, 67, 78, 89, 90 ];

// let max = 0; 
// let Secmax = 0;

// for( let i = 0; i < arr.length; i++ ){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] >  Secmax && arr[i] !== max ){
//         Secmax = arr[i]
//     }
// }

// console.log(Secmax)

// -----------------------------------------------------------------
// PrimeNumber 
// function isPrime(num) {
//     if (num <= 1) return false
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false
//     }
//     return true;
// }

// console.log(isPrime(7))

// -----------------------------------------------------------------------
// Find sum of all elements 
// let arr = [ 12, 34, 23, 34, 45, 23, 12 ];
// let sumofall = 0;

// for(let i = 0; i < arr.length; i++){
//     sumofall += arr[i]
// }

// console.log(sumofall)

//-----------------------------------------------------------

// Reverse the string
// let str = "Chandan";
// let rev = "";

// for( let i = str.length - 1; i >= 0; i--){
//     rev += str[i]
// }

// console.log(rev)

// -----------------------------------------------------------------------------

// Find the duplicate from this array 
// let arr = [ 1, 2, 4, 5, 6, 7, 2, 4, 5, 67, 8, 9, 5, 6, 8, 9 ];

// const duplicate = [];
// const count = {};
// let index = 0;

// for( let i = 0; i < arr.length; i++ ){
//   let num = arr[i];

//   count[num] = (count[num] || 0) + 1

//   if(count[num] === 2){
//     duplicate[index] = num;
//     index++;
//   }

// }

// console.log(duplicate)

// --------------------------------------------------------------------------

//String me duplicate words ka count batao 
// let str = "Chandan";
// let count = {};
// let duplicates = {};

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   count[char] = (count[char] || 0) + 1;

//   if (count[char] === 2) {
//     duplicates[char] = 2;
//   } else if (count[char] > 2) {
//     duplicates[char]++;
//   }
// }

// console.log("Duplicate characters:", duplicates);

// -------------------------------------------------------------------------------
//Factorial 
// function factorial(n){
//     if ( n === 0 || n === 1 ) return 1;
//     return n * factorial(n - 1)
// }

// console.log(factorial(5));

// Palindrome 
// const palindrome = (val) => {
//   return val < 0 ? false : val === +val.toString().split("").reverse().join("");
// };

// console.log(palindrome(121));

// -----------------------------------------------------------------------------------
// function fibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
  
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
  
//   console.log(fibonacci(6)); // Output: 8
  
//-----------------------------------------------------------------------------------
// function generateFibonacci(n) {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib.slice(0, n);
//   }
  
//   console.log(generateFibonacci(10));

//-----------------------------------------------------------------------------------------
//Write the function that returns the longest words in the sentence.

// function findLongest(str){
//     let word = str.split(" ");

//     let longest = "";

//     for(let i = 0; i < word.length; i++){
//         let words = word[i];

//         if(words.length > longest.length){
//             longest = words;
//         }

//     }
//     return longest;
// }

// const str = "I love javascript";
// console.log(findLongest(str))
  




