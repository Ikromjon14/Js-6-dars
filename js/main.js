// var bir = 1
// var ikki = 2
// console.log(bir + ikki);
// var uch = 3
// var turt = 4
// console.log(uch + turt);
// var besh = 5
// var olti = 6
// console.log(besh + olti);

// var bir = 2
// var ikki = 1
// console.log(bir - ikki);
// var uch = 4
// var turt = 3
// console.log(uch - turt);
// var besh = 6
// var olti = 5
// console.log(besh - olti);

// var bir = 1
// var ikki = 2
// console.log(bir * ikki);
// var uch = 3
// var turt = 4
// console.log(uch * turt);
// var besh = 5
// var olti = 6
// console.log(besh * olti);

// var bir = 4
// var ikki = 2
// console.log(bir / ikki);
// var uch = 12
// var turt = 4
// console.log(uch / turt);
// var besh = 30
// var olti = 6
// console.log(besh / olti);

// var bir = 1
// var ikki = 2
// console.log(bir ** ikki);
// var uch = 3
// var turt = 4
// console.log(uch ** turt);
// var besh = 5
// var olti = 6
// console.log(besh ** olti);

// var num = 1
// var num = 2
// console.log(bir + ikki);
// var num = 3
// var num = 4
// console.log(num + num);
// var num = 5
// var num = 6
// console.log(num + num);

// var bir = "1"
// var ikki = "2"
// console.log(bir - ikki);
// var uch = "3"
// var turt = "4"
// console.log(uch - turt);
// var besh = "5"
// var olti = "6"
// console.log(besh - olti);
// var ottiFix =

// var elHeading = document.querySelector("heading-2");
// var elHeading = document.querySelector("heading-3")
// var elHeading = document.querySelector("heading-4")
// var age = +prompt("yoshingizni yozing");

// if (age > 18) {
//   elHeading2.textContent = "Balog'at yoshidan kattasiz";
// } else {
//   elHeading2.textContent = "Balog'atga yetmagansiz";
// }
// // var eleH3 = document.querySelector("h2");
// var classNum = +prompt("Nechinchi sinf siz");

// if (classNum > 5 ) {
//   elHeading3.textContent = "Siz katta sinf ekansiz";
// } else {
//   elHeading3.textContent = "Siz hali boshlag'ich sinf ekansiz";
// }
// // var eleH4 = document.querySelector("h2");
// var salary = +prompt("Sizning sohangiz daromadi qancha");

// if (salary > 200000 ) {
//   elHeading4.textContent = "Siz yaxshi pul topar ekansiz";
// } else {
//   elHeading4.textContent = "Uncha yaxshi masu lekin yaxshi";
// }
// var eleH5 = document.querySelector("h2");
// var age = +prompt("");

// if (age > 18) {
//   eleH2.textContent = "Balog'at yoshidan kattasiz";
// } else {
//   eleH2.textContent = "Balog'atga yetmagansiz";
// }

// var seven = 7;
// var son = 18;
// var age = +prompt("son")

// if(seven <= age && son >= ) {
//   console.log("Siz ");
// }

// var num = 10
// num--
// console.log(num);
// Pulni so'rash
var surashh2 = document.querySelector("h2");
var sum = +prompt("Mablag'ingizni kiriting");
// aqsh pullari
var plainCostdollor = 500;
var hotelCostdollor = 250;
var meseumCostEuro = 120;
// o'zbek pulllari
var usdToSum = 11349.99;
var euroToSum = 12078.66;
// mablag'larni yig'ish
var totalDollor = (plainCostdollor + hotelCostdollor) * usdToSum;
var totalEuro = meseumCostEuro * euroToSum;
var totalSum = totalDollor + totalEuro;
console.log(totalSum);
// maslahat berish
if(totalSum <= sum) {
  surashh2.textContent = "Oq yul"
} else {
  surashh2.textContent = "Uyda utirib kino ko'ring"
}
