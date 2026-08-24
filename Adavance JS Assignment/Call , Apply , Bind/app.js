// Section 7 – call(), apply(), bind() (27–29)

// Q27.
// call(), apply(), aur bind() me difference explain karein.

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