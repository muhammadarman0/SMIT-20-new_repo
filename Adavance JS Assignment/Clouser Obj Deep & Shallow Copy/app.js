console.log("js runing");

// shallow copy

// Shallow Copy first level copy hoti ye nested obj ko copy nhi karta ha

// let obj = {
//     name: "Arman",
//     age: 18,
//     city: "karachi",
//     address: {
//         coutry: "pakistan"
//     }
// }
// console.log(obj);


// const user2 = { ...obj }

// user2.name = "Ahmed"
// user2.age = 13;
// user2.city = "Lahore"

// console.log("old obj", obj);
// console.log("new obj", user2);







// deep copy -->

// deep copy naam sa hi pata chal raha ha sare object nested ho sab ko copy karta hn

// const obj = {
//     name: "Muhammad Arman",
//     age: 19,
//     skill: [
//         "HTML", "CSS", "JavaScript"
//     ],
//     address: {
//         city: "karachi",
//         country: "Pakistan"
//     }
// }

// deep  Copy use karne khe 2 tareeqe hote hn 

// 1

// const deepCopy = structuredClone(obj)

// deepCopy.name = "Muhammad Ahmed"

// deepCopy.skill[2] = "Phython"

// console.log("Old", obj);


// console.log("New Object", deepCopy);

// 2

// const deepCopy = JSON.parse(JSON.stringify(obj))

// deepCopy.name = "Muahmmad Absar"

// obj.skill[1] = "Taliwind CSS"

// console.log("New Obj",deepCopy);

// console.log("Old Obj" , obj);




// Object Methods-- >

//     assign, freeze, seal, keys, value, entries


// 
// const obj = {
//     name: "Muhammad Arman",
//     age: 19,
//     skill: [
//         "HTML", "CSS", "JavaScript"
//     ],
//     address: {
//         city: "karachi",
//         country: "Pakistan"
//     }
// }

// Object.freeze(obj)

// obj.name = "Muhammad Ahmed"
// console.log(obj);

// Object.seal(obj)
// obj.freind = "ahemd"

// console.log(obj);


// console.log(Object.keys(obj))
// console.log(Object.values(obj));

// console.log(Object.entries(obj));


// Clousres in Javascript-- >

//     Map or Set in Javascript-- >



//         Map methods-- > set, has, clear, delete

// MAP

// aur map same value add karleta ha aur isma key aur value dono deni hoti ha

// const mapA = new Map()

// mapA.set("Name", "Arman")

// mapA.set(`()=>{
//     console.log("Hello World");
    
// }`,"Arman")
// // mapA
// console.log(mapA.get(`()=>{
//     console.log("Hello World");
    
// }`));


// console.log(mapA.size);

// mapA.has()
// console.log(mapA);




//             Set methods-- > add, has, clear, delete

// Set same value add nhi karta h aur isma sirf value deni hoti hn


// const setA = new Set()

// setA.add("Anas")
// setA.add("Ana")


// console.log(setA);
// console.log(setA.delete());
