// This is the javascript interview question :-

// function flattenArray(arr, result = []) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'object') {   // check if element is array
//       flattenArray(arr[i], result);     // recursive call
//     } else {
//       result[result.length] = arr[i];   // push manually without push()
//     }
//   }
//   return result;
// }

// let arr = [1, 2, 3, [4, 5, [7, 8, 1, 2]], 2, 3, 4, [6, 7, [8,9]]];
// let output = flattenArray(arr);
// console.log(output);


//let arr = [ 1, 3, 4, 5, 6, 7, 8, 10 ];
//console.log(arr[arr.length - 2]);

// Reverse the String :- 
// -------------------------------------------------------------------
// const str = "How, are you Man";
// let reverse = "";
// for(let i = str.length - 1; i >= 0; i--){
//   reverse += str[i]
// }
// console.log(reverse);

// Find the index of the w in the string
//----------------------------------------
// let index = 0;

// for (let i = 0; i < reverse.length; i++) {
//   if (reverse[i] === 'w') {
//     index = i;
//     break;
//   }
// }

// console.log(index); 

// find the number or string from the array
//--------------------------------------------------------------------
// const mixarr = [1, "a", 2, "b", 4, "c", 5, "f"];
// let numbersOnly = [];
// let index = 0; 

// for (let i = 0; i < mixarr.length; i++) {
//   if (typeof mixarr[i] === "number") {
//     numbersOnly[index] = mixarr[i]; 
//     index++;
//   }
// }
// console.log(numbersOnly); // [1, 2, 4, 5]


// fetch the API using fetch with promise
//---------------------------------------------------------------------
// const getAlldata = () => {
//   fetch("https://dummyjson.com/products").then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         return response.json();
//       }).then((data) => {
//        console.log(data.products)
//       }).catch((error) => {
//         console.log(error)
//       });
// }

// getAlldata();

// Student Array data
//-------------------------------------------------------------------
// const Students = [
//     {id: 1, name: "avinash", age: 28},
//     {id: 2, name: "sunil", age: 30},
//     {id: 3, name: "Chetan", age: 35}
// ];

// Find the all names of the array
//--------------------------------------------------------------------
// let allNames = [];
// for (let i = 0; i < Students.length; i++) {
//     allNames[i] = Students[i].name;
// }

// console.log(allNames);

// Find the all names of the array whose age is greater then 30;
//---------------------------------------------------------------------
// let namesWithAge30AndAbove = [];
// let index = 0;

// for (let i = 0; i < Students.length; i++) {
//     if (Students[i].age >= 30) {
//         namesWithAge30AndAbove[index] = Students[i].name;
//         index++;
//     }
// }

// console.log(namesWithAge30AndAbove);

// Find the sum of age 
//----------------------------------------------------------------------
// let sumOfAges = 0;
// for (let i = 0; i < Students.length; i++) {
//     sumOfAges += Students[i].age;
// }

// console.log(sumOfAges);

// Find the second largest number from the array
//-----------------------------------------------------------------------
// function secondLargestElement(arr){
//     let max = 0;
//     let secondMax = 0;
    
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max ){
//         max = arr[i];
//         }
//     }
    
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] > secondMax && arr[i] !== max){
//             secondMax = arr[i];
//         }
//     }
//     return secondMax;
//     }
    
//     const arr = [12,45,56,23,48,99,78,15,50,60,70,45,86,98]
//     console.log(secondLargestElement(arr))


// Find the counts of the vowels in the give string 
// let str = "Hello, world"
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let vowelCount = {};

// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//         if (vowelCount[str[i]] === undefined) {
//             vowelCount[str[i]] = 1;
//         } else {
//             vowelCount[str[i]]++;
//         }
//     }
// }

// find sum of two numbers the arget should be 9
//-----------------------------------------------------------------------
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// Function call + output print
// let result = twoSum([2, 7, 11, 15], 9);
// console.log(result); // Output: [0, 1]


// Square patern 
//------------------------------------------------------------------------
// const arr = [1, 2, 3, 4, 5];
// const length = arr.length;

// for (let i = 0; i < length; i++) {
//     let result = [];
    
//     // Shift the array cyclically
//     for (let j = 0; j < length; j++) {
//         result[j] = arr[(i + j) % length];
//     }
    
//     console.log(result);
// }

// Output :- 
// [5, 1, 2, 3, 4]
// [4, 5, 1, 2, 3]
// [3, 4, 5, 1, 2]
// [2, 3, 4, 5, 1]
// [1, 2, 3, 4, 5]


// Bubble sort 
//------------------------------------------------------------------------
// const arr = ["avi", "sunil", "manish", "vikas"];

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const sortedArr = bubbleSort(arr);
// console.log(sortedArr);

// Sort the Array in accending order 
//----------------------------------------------------------------------
// function sortArray(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 // Swap elements
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// Test the function
// const arr = [32, 23, 333, 233, 1, 121];
// console.log(sortArray(arr));


// Decending order 
//---------------------------------------------------------------------
// function sortArray(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 // Swap elements
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// Test the function
// const arr = [32, 23, 333, 233, 1, 121];
// console.log(sortArray(arr));

//---------------------------------------------------------------------

// how to insert a number at index

// let data = [60, 30, 10, 67, 40];
// let newEl = 70;
// let position = 2;

// for(let i = data.length - 1; i >= 0 ; i--){
//   if(i >= position){
//     data[i + 1] = data[i];
    
//     if(i == position){
//       data[i] = newEl;
//     }
//   }
// }

// console.log(data);

//---------------------------------------------------------------------
// for (let i = position + 1; i < data.length - 1; i += 2) {
//     [data[i], data[i + 1]] = [data[i + 1], data[i]];
// }