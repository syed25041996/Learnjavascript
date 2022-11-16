class Car {
    constructor (name, color){
        this.name = name;
        this.color = color;
    }

    getProperties(){
        return `${this.name} and ${this.color} `
    }

    setProperties(updatedName, updatedColor){
        this.name = updatedName
        this.color = updatedColor;
    }
}

var car = new Car("bmw", "black");
console.log(car.getProperties());
console.log("updated properties")
car.setProperties("volvo", "blue");
console.log(car.getProperties());
