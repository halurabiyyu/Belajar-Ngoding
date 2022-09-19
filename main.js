//tipe data javascript
let x; // x merupakan undefined
x = 1 // sekarang x merupakan number
x = true // sekarang x merupakan boolean
x = "Harry" // sekarang x merupakan string

//Arrays dalam javascript
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[1]); //mengakses nilai indeks 1 pada array

//object dalam javascript
let user = {
    firstName: "Harry",
    lastName: "Potter", 
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};
console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");

//operator komparasi
let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

//operator komparasi "sama(==)" dan "identik(===)"
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

//operator logika
let c = 10;
let d = 12;

/* AND operator */
console.log(c < 15 && d > 10); // (true && true) -> true
console.log(c > 15 && d > 10); // (false && true) -> false

/* OR operator */
console.log(c < 15 || d > 10); // (true || true) -> true
console.log(c > 15 || d > 10); // (false || true) -> true

/* NOT operator */
console.log(!(c < 15)); // !(true) -> false
console.log(!(c < 15 && d > 10)); // !(true && true) -> !(true) -> false

//if/else dalam javascript
let f = 50;

if(f > 70) {
    console.log(f);
} else {
    console.log("Nilai kurang dari 70");
}

//for loops dalam javascript
for(let i = 0; i < 5; i++) {
    console.log(i);
}

//for of loops dalam javascript
let maArray = ["Harry", "Ron", "Hermione", "Tom"];
for(const arrayItem of maArray) {
    console.log(arrayItem)
}

//function dalam javascript
function multiply(m, n) {
    return m * n;
}
let result = multiply(10, 2)
console.log(result)

//Browser object dalam javascript
const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?");
 
const user {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "English") {
   alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
   alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
   alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}