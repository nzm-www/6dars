// 1----------------------------------
function Massiv(arr, tushirishSoni) {
  return arr.slice(0, tushirishSoni);
}

var massiv = prompt("son kiriting").split(",").map(Number);
var tushishSon = parseInt(prompt("qaysi kiritgan sonizgacha chiqarsin"));

console.log(Massiv(massiv, tushishSon));

// 2---------------------------------------------
function wois(x, y) {
  let son1 = +prompt("upvotes");
  let son2 = +prompt("downvotes");

  let sonlar = -son1 + son2;

  console.log("javob:", sonlar);
}

wois();

// 3----------------------------------------------
function oshbtaplsir1ga(arr) {
  var yangiMassiv = [];
  for (var i = 0; i < arr.length; i++) {
    yangiMassiv.push(arr[i] + 1);
  }
  return yangiMassiv;
}

var input = prompt("Sonlarni kiritng (vergul bilan ajrating):");
var massiv = input.split(",").map(Number);

console.log(btapls(massiv));

// 4-----------------------------------------------
function elemntsonlar(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[arr.length - 1];
  }
}

console.log(elemntsonlar([0, 1, 2, 3]));
console.log(elemntsonlar([2, 4, 6, 8]));
console.log(elemntsonlar([-1, -2, -3, -4]));
console.log(elemntsonlar([]));

// 5-------------------------------------------------

function stringgaAylantirish(arr) {
  return arr.join("");
}

console.log(stringgaAylantirish([1, 2, 3]));
console.log(stringgaAylantirish(["salom", "hayot"]));
console.log(stringbolishi([1, "salom", 3]));

// ------------------------------------------------------
function birlashtir(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(birlashtir([1, 2], [3, 4]));
console.log(birlashtir(["salom"], ["hayot"]));
console.log(birlashtir([5], [6]));
