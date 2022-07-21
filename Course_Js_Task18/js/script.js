"use strict";

const padString = function (str, lengthNumber = 1, symb = "*", side = true) {

  if (typeof str !== "string") {
    throw new Error("str is not in string");
  }
  if (typeof lengthNumber !== "number") {
    throw new Error("str is not in string");
  }
  
  if (str.length === lengthNumber) { 
    return str;
  }
 const result = str;
  if (str.length > lengthNumber) {
    return result.substring(0, lengthNumber);
  }


  if (typeof symb !== "string") {
    throw new Error("str is not in string")
  }
  if (symb.length > 1) {
    throw new Error("str is not in string");
  }
 
  if (typeof side !== "boolean") {
    throw new Error("str is not in string");
  }

  const symbols = symb.repeat(lengthNumber - str.length);

  return side ? str + symbols : symbols + str;


};
console.log(padString("hello", 8, "*", true));
console.log(padString("hello", 6, "*", false));
console.log(padString("hello", 2));
