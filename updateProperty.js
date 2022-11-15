var student = {
    "1": {
        name :"syed",
        age: 24,
    },
    "2": {
        name :"raj",
        age: 25,  
    }
}

function updateProperty(id, prop, value){

    if(value === ""){
        delete student[id][prop]
    }else if (prop === "designation"){

        //check for property designation
        //if designation prop exists then push the value
        // if designation prop does not exist then initialize and empty array to it
        student[id][prop] = student[id][prop] || [];
        student[id][prop].push(value)
    }else{
        //if it is any other property then just overwrite the value
        student[id][prop] = value
    }

}

var studentCopy = JSON.parse(JSON.stringify(student));

updateProperty("1", "designation", "software")
updateProperty("1", "state", "Bangalore")
updateProperty("2", "city", "Hyderabad")
updateProperty("2", "city", "Chennai")

console.log(student);

// student.company = "zensar"
// student.name = "syed hussaini"
// console.log(student.qualifications[1]);


