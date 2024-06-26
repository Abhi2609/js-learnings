const id = 12345
let email = "hello@gmail.com"
var password = "24421"
city = "Buxar"
let state

// id = 2  ---> not allowed to change the values of constants declared

email = "bye@gmail.com"
password = "2345512"
city = "Ghaziabad"

/*
    prefer not to use var because of issue with block scope and functional scope
    instead use let to declare
*/

// if a variable is not intialised it is treated as undefined

console.table([id, email, password, city, state])