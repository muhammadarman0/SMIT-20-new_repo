// Higher Order Functions
// Higher Order Function kya hota hai?


// higher order function wo function hote ha jo 1 ya ose ziada dafa parameter ya argument ma pass ho sakhe

// Kya map() ek higher order function hai?

// map() ek higer order fn ha

// Kya forEach() value return karta hai?

// forEach koi si bhi value return nhi karta ha

// Ek example do Higher Order Function ka.

// function stdname(n){
//     console.log("my name is arman",n);

// }

// function recive(){
//     stdname("Arman")
// }

// recive()

// Callback function kya hota hai?

// Callback fn wo hote jo kisi bhi argument as a fn ho call ho wo call back fn hote ha

// Ek function banao jo dusre function ko parameter me le.

// function stdname(cb){
// console.log("arman");

// }
// stdname(showName)
// function showName(){

// }

// filter() ka use kis liye hota hai?

// filter wo funtion ha jo array pe chal tha ha aur return pe ma bhi wo value deta ha jo apko chaiye ha


// reduce() ka basic purpose kya hai ?
// reduce() ek high order fn ha ye preivious and current ko add karta ha
//     find() aur filter() me kya difference hai ?
// find() sirf ek true element return karta ha aur filter() bohut sari true element return karta ha
//         map() aur forEach() me kya difference hai ?
// map() value return karta ha aur forEach() kuch bhi return nhi karta ha ye ek for loop khi tara chal tha ha
//             Array Higher Order Methods
// map()
// [1, 2, 3, 4] array ke tamam numbers ko double karne ke liye map() use karo.

// let num = [1, 2, 3, 4,]
// let updateNum = num.map((n) => n * 2)
// console.log(updateNum);

// Ek array of names ko uppercase me convert karo using map().

// let std = ["arman","samad","areeb","awab","ahmed"]
// let updateStd = std.map((s) => s.toUpperCase())
// console.log(updateStd);

// Prices array me har price me 10 add karo using map().

// let price = [21,23,98,14,43]
// let updatePrice = price.map((p) => p + 10)
// console.log(updatePrice);

// Students names ke sath "Mr." add karo using map().

// let sir = ["Arman","samad","Areeb","Awab","Ahmed"]
// let updateSir = sir.map((s)=> `Mr ${s}`)
// console.log(updateSir);

// Numbers array ko square me convert karo.

// let sqaure = [2,4,6,8]
// let updateSquare = sqaure.map((sp) => sp * sp)
// console.log(updateSquare);

//     filter()
// [1, 2, 3, 4, 5, 6] me se sirf even numbers filter karo.

// let even = [1, 2, 3, 4, 5, 6]
// let onlyEven = even.filter((e) => e % 2 === 0)
// console.log(onlyEven);

// Names array me sirf wo names filter karo jinki length 5 se zyada ho.

// let crickerName = ["Arman","Fazeel","khuziama","Hasan","Abdul Samad"]
// let updateCricketName = crickerName.filter((c)=> c.length > 5 )
// console.log(updateCricketName);

// Ek prices array me sirf prices greater than 100 filter karo.
// let prices = [34,98,198,231,19]
// let updatePrice = prices.filter((p)=> p > 100)

// console.log(updatePrice);

// Students me se passed students filter karo.

// let stdPass = [{
//     name: "Arman",
//     age: 19,
//     marks: 89
// }, {
//     name: "Samad",
//     age: 17,
//     marks: 83
// }, {
//     name: "Ahmed",
//     age: 18,
//     marks: 92
// }, {
//     name: "areeb",
//     age: 21,
//     marks: 39
// }, {
//     name: "behroze",
//     age: 16,
//     marks: 41
// }]

// let passedStd = stdPass.filter((pass) => pass.marks >= 50)

// console.log("Passed Student", passedStd);

// Negative numbers ko filter karo.

// let neg = [-32,-100,421,23,-1]
// let updateNeg = neg.filter((n)=> n < 0 )
// console.log(updateNeg);

//     forEach()
// Array ke tamam elements console me print karo using forEach().

// let arrEle = [false,"Arham",21,undefined,"hello",["kia hal ha uncle"]]
// let print = arrEle.forEach((o) => {
//     console.log(o);
// })

// Ek fruits array ko numbering ke sath print karo.

// let fruitArr = ["Mango", "Apple", "Banana", "Lemon", "WaterWallon"]
// let print = fruitArr.forEach((p,index) => {
//     console.log(index,p);
// })

// Users array me har user ko welcome message do.

// let user = ["Arman", "Fazeel", "khuziama", "Hasan", "Abdul Samad"]

// let print = user.forEach((p) => {
//     console.log(`Welcome User`, p);

// })
// Ek array ka total manually forEach() se nikalo.
// let num = [2, 121, 32, 12]
// let total = 0
// let map = num.forEach((m) => {
//     total += m
//     console.log(total);
// })
// Har student ka naam uppercase me print karo.

// let userName = ["Arman", "Fazeel", "khuziama", "Hasan", "Abdul Samad"]
// let print = userName.forEach((p) => {
//     let upper = p.toUpperCase()
//     console.log(upper);

// })

//     find()
// [10, 20, 30, 40] me se first number greater than 25 find karo.

// let onlyOne = [10, 20, 30, 40]
// let print = onlyOne.find((f) => {
//     if (f > 25) {
//         return f

//     }
// })
// console.log(print);

// Users array me "Ali" naam ka user find karo.

// let userArr = ["Arman", "Ali", "Ahmed","Ali"]

// let print = userArr.find((f) => {
//     if(f === "Ali"){
//         return f

//     }
// })
// console.log(print);

// Ek products array me first expensive product find karo.

// let productArr = [{
//     Deal: "Basic",
//     Item: "Shose",
//     Price: 2300
// }, {
//     Deal: "Normal",
//     Item: "Shose",
//     Price: 4300
// }, {
//     Deal: "Expensive",
//     Item: "Shose",
//     Price: 21000
// }]
// let findExp = productArr.find((f) => {
//     if (f.Deal === "Expensive") {
//         return f
//     }
// })
// console.log(findExp);

// Ek array me first even number find karo.
// let arr = [, 5, 3, 7, 9, 4, 0]

// let findEven = arr.find((f) => {
//     if(f %2 === 0){
//         return f
//     }
// })
// console.log(findEven);

// Students me first failed student find karo.
// let stdResult = [
//     {
//         name: "Arman",
//         age: 19,
//         marks: 87
//     },
//     {
//         name: "Adnan",
//         age: 16,
//         marks: 57
//     },
//     {
//         name: "Ashas",
//         age: 21,
//         marks: 97
//     },
//     {
//         name: "Areeb",
//         age: 20,
//         marks: 27
//     }
// ]

// let falied = stdResult.find((f) => {
//     if(f.marks <= 50){
//         return f
//     }
// })
// console.log(falied);

//     reduce()
// [1, 2, 3, 4] ka sum reduce() se nikalo.

// let sum = [1,2,3,4]
// let red = sum.reduce((prev,current) => prev + current)
// console.log(red);

// Prices array ka total calculate karo.

// let price = [200,12,36]

// let print = price.reduce((prev,current) => prev + current)

// console.log(print);


// Numbers array ka maximum value find karo using reduce().

// let numArr = [32,11,45]

// let valueRed = numArr.reduce((large,current) => large > current ? large : current)

// console.log(valueRed);

// Ek words array ko single sentence me convert karo.

// let arr = ["I","am","Arman"]

// let print = arr.forEach((sentence) => {
//     console.log(arr.join(" ").toString());
// })

// Shopping cart ka total bill calculate karo.
// let shopping = [{
//     product: "car",
//     prices: 120000,
//     name: "BMW"
// },
// {
//     product: "car",
//     prices: 123231,
//     name: "GWM"
// }]

// let print = shopping.reduce((prev, currnet) => prev.prices + currnet.prices)
// console.log(print);

//     findLastIndex()
// [1, 2, 3, 2, 4, 2] me last 2 ka index find karo.

// let find = [1,2,3,4,2]
// let print = find.findLast((p) => p === 2)
// console.log(print);

// Last even number ka index find karo.

// let even = [2,4,6,8,0]
// let print = even.findLastIndex((p) => p %2 === 0)
// console.log(print);

// Ek names array me last "Ali" ka index find karo.

// let std = ["Arham","Ahmed","Ali"]

// let print = std.findLastIndex((p,index) => {
//     if(p === "Ali"){
//         return `${index} ${p} `
//     }
// })

// console.log(print);

// Ek products array me last expensive product ka index nikalo.

// let productArr = ["Cycle","Bike","Bitcoin","Car"]
// let print = productArr.findLastIndex((p) => p === "Bitcoin")
// console.log(print);


// Array me last negative number ka index find karo.

// let neg = [-1,43,23,-10]

// let negPrint = neg.findLastIndex((p)=> p < 0)
// console.log(negPrint);

//     Objects
// Object kya hota hai JavaScript me ?

// object javascript ma ek data type hoti ha aur container khi tara use karte isma hum function string number aur bohut refrence use karte ha aur object ma key hoti aur oski value
//     Ek student object banao jisme name aur age ho.
// let stdObj = {
//     name: "Ahmed",
//     age: 19
// }
// console.log(stdObj);

// Object ki property access karne ke 2 methods likho.

// let obj = {
//     product: "Kuch bhi",
//     user: "koi bhi nhi"
// }
// console.log(obj.user);

// console.log(obj["product"]);

// Object me new property add karo.

// let std = {
//     name: "Arman",
//     age: 19,
// }
// std.school = "Al-hamd"
// console.log(std);

// Object ki property delete karo.

// let std = {
//     name: "Arman",
//     age: 19,
// }
// std.school = "Al-Hamd islamic foundation school"

// delete(std.age)
// console.log(std);

// Ek car object banao jisme brand aur model ho.

// let car = {
//     brand: "BMW",
//     model: 2018
// }
// console.log(car);


// Object ke andar function ka example do.
// let objFn = {
//     name: function () {
// console.log("Ha bhi uncle kase ho");

//     }
// }
// console.log(objFn.name);


// this keyword object me kya karta hai ?

//  this keyword direction bata ha khe ye kispe use hoga 

// 
//     Object keys kaise nikalte hain ?

// object khi key dot se nikalte hain 

//         Object values kaise nikalte hain ?

// object kha naam dot aur key name sa 

//             Nested Objects
// Ek object ke andar object ka example banao.

// let nestedObj = {
//     user1:
//     {
//         name: "Arman",
//         age: 19,
//         jod: "fronted Developer"
//     },
//     user2: {
//         name: "Ahmed",
//         age: 16,
//         job: "Agentic AI"
//     }
// }

// console.log(nestedObj);

// User object ke andar address object create karo.
// let user = {
//     name: "Arman",
//     age: 18,
//     address: {
//         city: "karachi",
//         homeAdd: "Krongi no 6"
//     }
// }
// console.log(user);

// Nested object ki city access karo.

// let nest = {
//     client: "Ahmed",
//     project: "E-commerce",
//     city: {
//         country: "Pakistan",
//         city: "Karachi"
//     }
// }
// console.log(nest.city.city);

// Student object me marks object add karo.
// let std = {
//     name: "Arman",
//     age: 18
// }
// console.log("before",std);

// std.marks = {
//     maths: 89,
//     urdu: 65,
//     english: 84
// }
// console.log("after",std);


// Company object me employee object create karo.

// let company = {
//     name: "Tech Solution",
//     founder: "Muhammad Arman",
//     age: 19,
//     location: {
//         city: "karachi",
//         country: "Pakistan"
//     }
// }

// company.employes = 120

// console.log(company);

// Array of Objects
// Array of objects kya hota hai ?

// Array khe ander object create karna 

// Example

// let arrObj = [
//     {
//         name:"Salman",
//         salary: 24000,
//     },{
//         name:"Ahmed",
//         salary: 35000
//     }
// ]
// console.log(arrObj);


//     Students ka array banao jisme har student ka name aur marks ho.

// let stdArrObj = [
//     {
//         name: "Kamil",
//         age: 19,
//         marks: {
//             english: 88,
//             urdu: 66,
//             math: 98
//         }
//     },
//     {
//         name: "Ahmed",
//         age: 18,
//         marks: {
//             english: 92,
//             urdu: 87,
//             math: 80
//         }
//     },
//     {
//         name: "Samad",
//         age: 18,
//         marks: {
//             english: 67,
//             urdu: 83,
//             math: 80
//         }
//     }
// ]

// let print = stdArrObj.forEach((sumMarks) => {
//     console.log(sumMarks.name,sumMarks.marks.english + sumMarks.marks.urdu +sumMarks.marks.math);

// })
// Array of objects me se sirf names print karo.

// let arrobj = [
//     {
//         name: "Arman",
//         gender: "male",
//         age: 19
//     },
//     {
//         name:"ahmed",
//         gender: "male",
//         age: 18
//     }
// ]
// console.log("Before",arrobj);

// let print = arrobj.map((naam)=>{
//     return naam.name
// })
// console.log("After",print);

// Passed students filter karo from array of objects.
// let arrObjPass = [
//     {
//         name: "Arman",
//         age: 19,
//         marks: {
//             math: 88,
//             english: 90,
//             urdu: 68
//         }
//     },
//     {
//         name: "Ahmed",
//         age: 18,
//         marks: {
//             math: 89,
//             english: 93,
//             urdu: 44
//         }
//     },
//     {
//         name: "Areeb",
//         age: 21,
//         marks: {
//             math: 24,
//             english: 56,
//             urdu: 11
//         }
//     },
//     {
//         name: "Samad",
//         age: 18,
//         marks: {
//             math: 57,
//             english: 45,
//             urdu: 23
//         }
//     }
// ]

// let print = arrObjPass.filter((passStd) => {
//     let sumMarks = passStd.marks.math + passStd.marks.english + passStd.marks.urdu;

//     if(sumMarks > 110){
//         return passStd
//     }
// })
// console.log(print);

//     map() use karke students names uppercase me convert karo.

// let std = [ 
//     {
//         name: "arman"
//     },
//     {
//         name: "ahmed"
//     },
//     {
//         name: "samad"
//     }
// ]
// let print = std.map((n) => n.name.toUpperCase())
// console.log(print);

// Highest marks wala student find karo.

// let higest = [
//     {
//         name: "arman",
//         mark: 210
//     },
//     {
//         name: "ahmed",
//         mark: 250
//     },
//     {
//         name: "absar",
//         mark: 150
//     }
// ]

// let print = higest.map((p) => p.mark > 210)

// console.log(print);

// Ek products array me total stock calculate karo.

// let product = [
//     {
//         product: "shose",
//         stock: 230
//     },
//     {
//         product: "socks",
//         stock: 130
//     }
// ]
// let print = product.map((sum)=> sum.stock + sum.stock)
// console.log(print);

// Array of objects me new object push karo.
// let product = [
//     {
//         product: "shose",
//         stock: 230
//     },
//     {
//         product: "socks",
//         stock: 130
//     }
// ]

// product.push = {
//     product: "kuch bhi"
// }
// console.log(product);

// User object ko array me find karo.

// let users = [
//     {
//         id: 1,
//         name: "Ali",
//         age: 20
//     },
//     {
//         id: 2,
//         name: "Ahmed",
//         age: 22
//     },
//     {
//         id: 3,
//         name: "Sara",
//         age: 19
//     }
// ];

// let print = users.find((one) => one.id === 2)
// console.log(print);

// Array of objects ko loop se print karo.

// let users = [
//     {
//         id: 1,
//         name: "Ali",
//         age: 20
//     },
//     {
//         id: 2,
//         name: "Ahmed",
//         age: 22
//     },
//     {
//         id: 3,
//         name: "Sara",
//         age: 19
//     }
// ];

// let print = users.forEach((p)=>{
//     console.log(p);
    
// })