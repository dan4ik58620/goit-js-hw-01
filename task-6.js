"use strict";

let input = +prompt("Введите число");
let total = input;
 while (input) {
   console.log(total);
   input = +prompt("ЕЩЕ ОДНО ЧИСЛО");
    total += input;
 }
console.log("total: ", total);
