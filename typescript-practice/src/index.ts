let id : number = 1
let fullName : string = "Syed"
let hasAadhar : boolean = true

//Arrays
let hobbies : string[] = ["reading", "writing", "playing"]

//Tuple

let employees : [number, string][] =
[ 
    [1 , 'bob'],
    [2 , 'raj'],
    [3 , 'syed'],
]

//Union , can be checked for many types

let processId : number | string | boolean = true

enum Weather {
    SUMMER ="summer",
    WINTER ="winter",
    AUTUM ="autum"
}

console.log(Weather.SUMMER)


//Objects

const user : {
    uid : number,
    name: string
} = {
    uid : 23,
    name : "Syed"
}

console.log(user.name)

let firstName = "Syed";
let nameFull = <string>firstName;


//Functions
function sum(x : number, y: number) : number{
    return x + y;
}

function message(x : string) : void{
    console.log(x);
}

message("123");

//Interface

interface movies {
    genre : string,
    rating: number,
    description? : string
}

const inception : movies = {
    genre : "science-fiction",
    rating: 10
}

console.log(inception)