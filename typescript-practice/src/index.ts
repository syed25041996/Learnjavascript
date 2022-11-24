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

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

strArray.push(1) // Throws error