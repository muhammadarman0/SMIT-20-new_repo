// Total Questions: 30
// Section 1 – Objects (1–5)


// Q1.
// JavaScript Object kya hota hai? Real-world example ke sath explain karein.

// Ans

// Javascript ma Object ek refrence data type hoti ha jo apne key aur oski value leti ha har keys
//  khi value bhi data type ho sakthi jase string , number boolead , function

// Q2.
// // Dot notation aur Bracket notation me kya difference hai?


// const user = {

// name: "Hasan",

// age: 22

// };

// // console.log(user.name);

// console.log(user["name"]);



// Dono tarikon se name access karke dikhayein.



// Q3.
// Niche diye object ka output batayein.



// const student = {

// name: "Ali",

// age: 20

// };



// student.city = "Karachi";

// delete student.age;


// console.log(student);
// Ans
// Output student object ma se age delete hoke city add ho jai gi


// Q4.
// Object.keys(), Object.values(), aur Object.entries() kya return karte hain?

// Example ke sath explain karein.

// const userObj = {
//     name: "Arman",
//     age: 18,
// }


//   userObj khi Object keys array ma return karta hai 
//   console.log( Object.keys(userObj));

//  userObj khi values array ma return karta hai
//  console.log(Object.values(userObj));

// entries userObj khi keys aur values ko alga arryas ma return karti hai
//   console.log(Object.entries(userObj));


// Q5.
// Ek function likhein jo object ke andar total properties count kare.

// Expected:

// const product = {
//     name: "Pakola",
//     quantity: "500ml",
//     price: 100
// }

// console.log(Object.entries(product).length);

// // Output

// 3



// Section 2 – Arrays (6–10)

// Q6.
// Array aur Object me kya difference hai?

// Ans

// Javascript arrya ek refrence data type hoti jo jis khi value hum index se nikal the hai aur isma bhi bohut si data type rak sakthe hai string,number,boolean,function wagera


// Javascript ma Object ek refrence data type hoti ha jo apne key aur oski value leti ha har keys
//  khi value bhi data type ho sakthi jase string , number boolead , function

// Q7.
// Output predict karein.


// const arr = [10,20,30];



// arr.push(40);

// arr.pop();



// console.log(arr);

// output is [10,20,30];

// Q8.
// Array ke first aur last element ko print karne ke 2 methods likhein.

// const arr = [1, 2, 3, 4]
// console.log(arr.shift());
// console.log(arr.pop());



// Q9.
// Ek function likhein jo array ka sum return kare.


// function sum(arr) {
//     let total = 0
//     arr.forEach((num) => {
//        total += num
//     })
//     return total

// }
// // Example






// let to = sum([10, 20, 30])
// console.log(to);




// // Output

// 60



// Q10.
// Ek array me duplicate values remove karein.





// const setItem = new Set([1, 2, 2, 3, 4, 4, 5])

// console.log(setItem);



// Expected Output





// // [1,2,3,4,5]



// Section 3 – Destructuring (11–14)

// Q11.
// Destructuring kya hoti hai?

//  javascript 2 qism khi destructuring  hoti hai arrya Destructuring & object Destructuring
// array Destructuring ma hum ase kaam karte hai

// const arr = ["arman","ahmed","ayan"]

// const [first,Section,thrid]= arr

// console.log(first,Section,thrid);

// aur object destructuring

// const obj = {
//     name: "arman",
//     age: 19
// }

// const {name,age}= obj

// console.log(name,age);

// Array aur Object dono ki syntax likhein.


// Q12.
// Output predict karein.





// const colors = ["red","blue","green"];



// const [a,b,c] = colors;



// console.log(b);

// Blue


// Q13.
// Output batayein.





// const user = {

// name:"Hasan",

// age:22

// };



// const {name, age} = user;



// console.log(age);

// 22 Age

// Q14.
// Nested Object destructuring karein.





// const user = {

// name:"Ali",

// address:{

// city:"Karachi"

// }

// };

// const {address}= user

// const {city}= address

// console.log(city);



// City ko destructuring se nikalein.


// Section 4 – Shallow Copy & Deep Copy (15–18)

// Q15.
// Shallow Copy aur Deep Copy me kya difference hai?

// Shallow copy first level copy hoti ye nested array aur nested object ko copy nhi karta hai


// deep copy nested se nested array aur object ko copy karta hai 

// Q16.
// Output predict karein.





// const user1 = {

// name:"Ali",

// address:{

// city:"Karachi"

// }

// };



// const user2 = user1;



// user2.address.city = "Lahore";



// console.log(user1.address.city);

// ouput is lahore

// Q17.
// Spread operator se object copy karne par nested object me kya issue hota hai?

// Explain karein.

// const nestedObj = {
//     name: "arman",
//     age: 18,
//     address:{
//         city:"karachi",
//         country: "pakistan"
//     }
// }
// const shallowCopy = {...nestedObj}

// shallowCopy.name = "ahmed"

// shallowCopy.address.city = "lahore"
// console.log("old object",nestedObj);

// console.log("new object",shallowCopy);


// Q18.
// JavaScript me Deep Copy banane ke 3 methods likhein.

// sir 2 ate hai 

// phela structureClone(ye pe object kha naam)

// doosra JSON.parse(JSON.stringify(ye pe bhi object kha naam))


// Section 5 – Rest & Spread Operator (19–22)

// Q19.
// Rest Operator aur Spread Operator me kya difference hai?

// phele rest operator ek hamare array osko hamne destructuring kar liya ab osma ["ahmed","arman","abdullah"] ye ha

// ab jab hum destructuring karte to ma arrya ma se [fistname,secondname,...ohters]le liya ab "abdullad re gia ab wo rest operator jo ... ohters sa chal ta ha"

// spread simple word ma array ya object khi copy karna

// Q20.
// Output predict karein.



// const arr = [10,20,30];



// const newArr = [...arr,40];



// console.log(newArr);


// Output is [10,20,30,40\]
// Q21.
// Output batayein.





// function total(...numbers){

// console.log(numbers);

// }



// total(10,20,30,40);

// output is [10,20,30,40]


// Q22.
// 2 Objects ko merge karein.





// const obj1 = {

// name:"Ali"

// };



// const obj2 = {

// age:20

// };

// const concat = {...obj1,...obj2}

// console.log(concat);

// Expected



// {

// name:"Ali",

// age:20

// }



// Section 6 – Array Higher Order Methods (23–26)


// Q23.
// map() aur forEach() me kya difference hai?
// map() hame modifi value return karta ek new array ma

// forEach kuch bhi return nhi karta hai
// Q24.
// filter() ka use karke sirf even numbers return karein.

// let even = [1, 2, 3, 4, 5, 6]

// let filterEvenNum = even.filter((evenNum) => evenNum % 2 == 0)
// console.log(filterEvenNum);



// [1,2,3,4,5,6]



// Expected

// [2,4,6]



// Q25.
// reduce() ka use karke array ka total sum nikalein.

// let totalSum = [10,20,30]

// let reduceSum = totalSum.reduce((prev ,current)=>{
//     console.log(totalSum);
    
// })

// console.log(r);

// [10,20,30]



// Expected

// 60



// Q26.
// find() aur filter() me kya difference hai?
// find() sirf ek true value return karta hai

// filter() sari true value return karta hai

// Section 7 – call(), apply(), bind() (27–29)

// Q27.
//  call(), apply(), aur bind() me difference explain karein.

// call() ma ap direct argument pass kar sakthe hai
// apply() ma ap ko argument array ma pass karna hota hai
// bind() ma apko function return karna hot ya console.log ma print karna hota hai


// Q28.
// Output predict karein.



// const user1 = {
//     name: "arman",
//     age: 18,
//     class: "11th"
// }

// const user2 = {
//     name: "ahmed",
//     age: 21,
//     class: "12th"

// }


// function showUser(...arg) {
//     console.log(arg);
//     // console.log(this[c]);

//     let [name] = arg
//     console.log(name);
    
    
// }

// // showUser.call(user1, "name")
// showUser.apply(user2,["name","class"])
// let showDetail =  showUser.bind(user1,"age","class")
// console.log(showDetail());

// Q29.
// Output batayein.



// const user = {

// name:"Ali"

// };



// function sayHello(country){

// console.log(this.name, country);

// }



// const result = sayHello.bind(user);

// console.log(result("pakistan"));


// result("Pakistan");


// const student = {

// name: "Ali",

// age: 20

// };



// student.city = "Karachi";

// delete student.age;



// console.log(student);



// Final Mixed Question (30)
// Q30.
// Niche diye code ka exact output likhein aur har line explain karein.





// const user = {

// name: "Hasan",

// skills: ["HTML", "CSS"]

// };



// const copy = {

// ...user

// };



// copy.skills.push("JavaScript");



// console.log(user.skills);

// console.log(copy.skills);



// Is code me Shallow Copy hui hai ya Deep Copy?
// shallow copy use hoi hai isma
// Is problem ko Deep Copy se kaise solve karenge?

// const user = {

// name: "Hasan",

// skills: ["HTML", "CSS"]

// };



// const copy = structuredClone(user);



// copy.skills.push("JavaScript");



// console.log(user.skills);

// console.log(copy.skills);

// Agar structuredClone() use karein to output me kya farq padega?

// const user = {

// name: "Hasan",

// skills: ["HTML", "CSS"]

// };



// const copy = structuredClone(user);



// copy.skills.push("JavaScript");



// console.log(user.skills);

// console.log(copy.skills);
