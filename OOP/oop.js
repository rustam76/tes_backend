
// Encapsulation
class Cars{
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    get getName() { 
        return this.name; 
    }

    set setName(name){
        this.name = name;
    }

// Abstraction
    makeSound(){}
    
}

// Inheritance
class Vehicle extends Cars{
    constructor(name, color, wheel, sound) {
        super(name, color);
        this.wheel = wheel;
        this.sound = sound;
    }

// Polymorphism
    makeSound(){
        return this.sound;
    }

    getAll(){
        return `Name : ${this.name} Color: ${this.color} Wheel: ${this.wheel} Sound: ${this.makeSound()}`
    }
}


const car = new Vehicle('ayla','blue','4','brummmmmmm');
car.setName = "avanza"
console.log(car.getAll());