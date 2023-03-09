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