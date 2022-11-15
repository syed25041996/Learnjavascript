function showScopes() {
    "use strict;"
    // if we use "let" it restricts the variable to the scope it is in
    let scope = "function scope"
    if (true) {
        let scope = "block scope"
        console.log("Block scope num is : " + scope)
    }
    console.log("Function scope num is : " + scope)
}

showScopes();

// Object mutation

function getPI() {
    const MATHS = {
        PI: 3.14
    }

    Object.freeze(MATHS)

    try {
        MATHS.PI = 99;
    } catch (error) {
        console.log("Unable to change PI as we have freezed the object")
    }

    return MATHS.PI
}

console.log(getPI())