"use strict";
let id = 1;
let fullName = "Syed";
let hasAadhar = true;
//Arrays
let hobbies = ["reading", "writing", "playing"];
//Tuple
let employees = [
    [1, 'bob'],
    [2, 'raj'],
    [3, 'syed'],
];
//Union , can be checked for many types
let processId = true;
var Weather;
(function (Weather) {
    Weather["SUMMER"] = "summer";
    Weather["WINTER"] = "winter";
    Weather["AUTUM"] = "autum";
})(Weather || (Weather = {}));
console.log(Weather.SUMMER);
//Objects
const user = {
    uid: 23,
    name: "Syed"
};
console.log(user.name);
let firstName = "Syed";
let nameFull = firstName;
//Functions
function sum(x, y) {
    return x + y;
}
function message(x) {
    console.log(x);
}
message("123");
