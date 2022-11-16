var student = {
    "1": {
        name :"syed",
        age: 24,
    },
    "2": {
        name :"raj",
        age: 25,  
    },
    checkAge(age){
        return age > 12;
    }
}

const getStudentDetails = (name,age) => ({name, age}) 

console.log(`Hello  my name is ${student['1'].name} and my age is ${student['1'].age} `)
console.log(student.checkAge(21))
console.log(getStudentDetails("bob",12))