"use strict";

let padString = function (str, num, sym, bool) {

  if (str === undefined) {
    return 'Some Error str';
  }
  if (num === undefined) {
    return 'Some Error num';
  }
  if (sym === undefined) {
    return 'Some Error sym';
  }
  if (bool === undefined) {
    return 'Some Error bool';
  }
  if (bool === false) {
    return str.toString().padStart(num, sym);
  }
  if (bool === true) {
    return str.toString().padEnd(num, sym);
  }
  if (str.lenght < num) {
    return;
  }
};

console.log(padString("hello", 6, '*', false));
console.log(padString("hello", 8, '*', true));
console.log(padString("hello".slice(0, -3), 2, " ", false));
