//Arrays
let source = [1,2,3,4,5,6,7,8,9]

function removeTwoElements(list){

    const [, , ...arr] = list 
    
    return arr
}
// const arr = removeTwoElements(source)
console.log(removeTwoElements(source))
// console.log(arr)
console.log(source)


//Objects

const temp = {
    today : {
        max : 75,
        min : 34
    },
    tomorrow : {
        max: 34,
        min: 12
    }
}

const {today : {max : getMax}} = temp

console.log(getMax);

const getAvg = ({max, min}) => (max + min) / 2


console.log(getAvg(temp.today));