"use strict"; // treat all JS code as newer version

// alert(3+3) // different syntax to use in node not this way as used in browsers

console.log(3+3) 

// use ECMA Script and MDN to see the documentation ---> JS standard

/*
    DATA TYPES:
        number => 2^53
        bigint => for bigger numbers
        string => ""
        boolean => true or false
        null => standalone value represents empty
        undefined => no defined value assigned
        symbol => uniqueness


        object
*/

console.log(typeof undefined) // ---> undefined
console.log(typeof null)      // ---> object

/*
    DATA TYPE CONVERSIONS
        "33" => 33
        "33abc" => NaN (Not a Number)
        true => 1; false => 0
        null => 0
        undefined => NaN

        To convert use Number(), Boolean(), String() etc..
*/

let score = "33"
let noScore = Number(score)
console.log(typeof noScore)