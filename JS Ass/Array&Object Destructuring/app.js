// 📌 Array Destructuring (7 Questions)


// Question 1
// Destructure the first and second values.



// const fruits = ["Apple", "Banana", "Orange"];

// const [one,two] = fruits

// console.log(one,two);

// Expected



// Apple

// Banana



// Question 2
// Skip the second element.



// const colors = ["Red", "Green", "Blue"];

// const [one,,three] = colors

// console.log(one,three);


// Output



// Red

// Blue



// Question 3
// Store the remaining values in another array.



// const numbers = [10, 20, 30, 40, 50];

// const [ten,...others] = numbers

// console.log(ten);
// console.log(others);



// Expected



// 10

// [20,30,40,50]



// Question 4
// Swap two variables using destructuring.





// let a = 5;

// let b = 10;

// a = [b]
// b = [a]

// console.log(a);
// console.log(b);

// Expected



// a = 10

// b = 5



// Question 5
// Give default values.



// const names = ["Ali"]
// const newNmae = [...names, "Ahmed"]
// let [one , two] = newNmae
// console.log(one,two);

// Expected



// Ali

// Ahmed



// Question 6
// Nested array destructuring.



// const data = ["HTML", ["CSS", "JavaScript"]];
// const [one, two] = data
// const [three, four] = two
// console.log(one,three, four);



// Expected



// HTML

// CSS

// JavaScript



// Question 7
// Destructure all values.





// const marks = [80, 90, 95];

// const [one,two,three] = marks

// console.log(one,two,three);


// Print all three.

// 📌 Object Destructuring (7 Questions)
// Question 8
// Destructure name and age.





// const user = {

// name: "Hasan",

// age: 23,

// city: "Lahore"

// };

// const {name,age} = user

// console.log(name,age);

// Expected



// Hasan

// 23



// Question 9
// Rename variables.





// const student = {

//     name: "Ayesha",

//     class: "10th"

// };

// const { name:studentName, class:studentClass } = student

// console.log(studentName,studentClass);


// Expected variables



// studentName

// studentClass



// Question 10
// Use default value.





// const employee = {

// name: "Ahmed"

// };

// const newWorker = {...employee,work: 5000} 

// const {name,work} = newWorker

// console.log(name,work);

// Expected



// Ahmed

// 50000



// Question 11
// Nested object destructuring.





// const person = {

//     name: "Ali",

//     address: {

//         city: "Karachi",

//         country: "Pakistan"

//     }

// };
// const { address} = person

// const {city,country} = address

// console.log(city,country);

// Expected



// Karachi

// Pakistan



// Question 12
// Destructure everything.





// const product = {

// title: "Laptop",

// price: 80000,

// brand: "Dell"

// };

// const {title,price,brand} = product

// console.log(title,price,brand);


// Print all values.

// Question 13
// Extract only email.





// const account = {

// username: "coder123",

// email: "coder@gmail.com",

// password: "12345"

// };

// const {email} = account

// console.log(email);


// Question 14
// Combine object and array destructuring.





// const company = {

//     employees: ["Ali", "Ahmed", "Sara"]

// };

// const { employees } = company;

// const [one, two, three] = employees

// console.log(one, two, three);



// Expected



// Ali

// Ahmed

// Sara



// 📌 Rest Operator (3 Questions)
// Question 15
// Collect remaining values.





// const numbers = [1, 2, 3, 4, 5];

// const [one, two, ...other] = numbers
// console.log(one, two);
// console.log(other);




// Expected



// 1

// 2

// [3,4,5]



// Question 16
// Collect remaining object properties.





// const user = {

//     name: "Hasan",

//     age: 22,

//     city: "Lahore",

//     country: "Pakistan"

// };

// const { name, ...other } = user
// console.log(name);
// console.log(other);



// Expected



// name

// remaining object



// Question 17
// Create a function using Rest Parameters.


// function total(...numbers) {
//   let sum = 0;

//   for (let num of numbers) {
//     sum += num;
//   }

//   return sum;
// }


// // Example





// console.log(total(10, 20, 30, 40));



// Expected Output



// 100



// Hint:

// Use



// function sum(...numbers)



// 📌 Spread Operator (3 Questions)
// Question 18
// Merge two arrays.





// const frontend = ["HTML", "CSS"];

// const backend = ["Node", "MongoDB"];

// const fullstackDev = [...frontend,...backend]

// console.log(fullstackDev);


// Expected



// ["HTML","CSS","Node","MongoDB"]



// Question 19
// Copy an array.





// const fruits = ["Apple","Banana","Orange"];

// const copy = [...fruits]
// console.log(copy);



// Create a new copy using the spread operator.

// Question 20
// Merge two objects.





// const user = {

// name: "Hasan"

// };



// const details = {

// age: 22,

// city: "Lahore"

// };

// const oneObj = {...user,...details}
// console.log(oneObj);



// Expected





// {

// name: "Hasan",

// age: 22,

// city: "Lahore"

// }

