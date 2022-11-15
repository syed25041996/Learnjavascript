var student = [
    {
        name: "syed",
        age: 24,
    },
    {
        name: "raj",
        age: 25,
    },
    {
        name: "bob",
        age: 26,
    }
]

function lookupProperty(name, prop) {
    for (var i = 0; i < student.length; i++) {
        if (student[i].name === name) {
            return student[i][prop] || "No such property found "
        }
    }

    return "No student found"
}

console.log(lookupProperty("raj", "age"))
console.log(lookupProperty("raja", "age"))
console.log(lookupProperty("raj", "decorator"))