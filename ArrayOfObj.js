// let students = [
//     {
//       name: "Aman",
//       age: 16,
//       school: {
//         name: "Sunrise Public School",
//         location: "Delhi"
//       }
//     },
//     {
//       name: "Pooja",
//       age: 15,
//       school: {
//         name: "St. Xavier School",
//         location: "Mumbai"
//       }
//     },
//     {
//       name: "Ravi",
//       age: 17,
//       school: {
//         name: "DAV School",
//         location: "Lucknow"
//       }
//     }
//   ];

// find all names of student and its school name also 
// let schoolsName = students.map((item) => {
//   return {
//     studentsname: item.name,
//     studentschoolname: item.school.name
//   }
// })
// console.log(schoolsName);


// Update particular student data...

//   let updatedStudents = students.map(student => {
//     if (student.name === "Pooja") {
//       return {
//         ...student,
//         school: {
//           ...student.school,
//           name: "Green Valley School"
//         }
//       };
//     }
//     return student;
//   });
//   console.log(updatedStudents)


// ======================================== More Nested ============================================>

let students = [
    {
        name: "Aman",
        age: 16,
        school: {
            name: "Sunrise Public School",
            location: "Delhi",
            address: {
                city: "New Delhi",
                state: "Delhi",
                pin: "110001"
            }
        }
    },
    {
        name: "Pooja",
        age: 15,
        school: {
            name: "St. Xavier School",
            location: "Mumbai",
            address: {
                city: "Mumbai",
                state: "Maharashtra",
                pin: "400001"
            }
        }
    },
    {
        name: "Ravi",
        age: 17,
        school: {
            name: "DAV School",
            location: "Lucknow",
            address: {
                city: "Lucknow",
                state: "Uttar Pradesh",
                pin: "226001"
            }
        }
    }
];

// Find schoolName and pincode

// let findAddress = students.map(student => {
//     return {
//         schoolName : student.school.name,
//         pincode : student.school.address.pin
//     }
// })

// console.log(findAddress);
// function findStudentByPin(students, pinCode) {
//     return students.filter(student => student.school.address.pin === pinCode);
// }

// let findStudentsDetails = students.map(student => {
//     return {
//         studentname : student.name,
//         schoolName : student.school.name,
//         address : student.school.address,
//         city : student.school.address.city
//     }
// })

// console.log(findStudentsDetails);

// let arr = [1, [2, [3, [4]], 5]];

// console.log(arr.flat(Infinity))
// console.log(JSON.stringify(result, null, 2))
// Array.prototype.forEach() executes a provided function once for each array element. It always returns undefined.

// students.forEach(student => {
//     if(student.name === "Pooja"){
//         student.school.address.city = "Noida";
//     }
// });

// console.log(JSON.stringify(students, null, 2))


// const produce = [
//     { id: 1, name: "Carrot", category: "Vegetable" },
//     { id: 2, name: "Broccoli", category: "Vegetable" },
//     { id: 3, name: "Potato", category: "Vegetable" },
//     { id: 4, name: "Spinach", category: "Vegetable" },
//     { id: 5, name: "Cabbage", category: "Vegetable" },
//     { id: 6, name: "Sweet Potato", category: "Vegetable" },
//     { id: 7, name: "Apple", category: "Fruit" },
//     { id: 8, name: "Banana", category: "Fruit" },
//     { id: 9, name: "Strawberry", category: "Fruit" },
//     { id: 10, name: "Orange", category: "Fruit" },
//     { id: 11, name: "Lettuce", category: "Vegetable" }
// ];

  
// let Vegetables = produce.filter(item => item.category === "Vegetable");
// let Fruits = produce.filter(item => item.category === "Fruit");
  
// console.log({ Vegetables, Fruits });
  