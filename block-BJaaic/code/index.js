// Animal Methods and Properties

function Animal(location,numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.legs = numberOfLegs;
    return animal;
}

animalMethods = {
    eat(){
        console.log(`I live in ${location} and I can eat`);
    },
    changeLocation(newLocation){
        return this.location = newLocation;
    },
    summary(){
        return `I live in ${location} and I have ${numberOfLegs}`;
    }
}

// Dog Methods and Properties

function Dog(name,color,location,numberOfLegs){
    let dog=Object.create(dogMethods);
    dog.name = name;
    dog.color = color;
    dog.location = location;
    dog.legs = numberOfLegs;
    return dog;
}

dogMethods = {
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName(newName){
        return this.name = newName;
    },
    changeColor(newColor){
        return this.color = newColor;
    },
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}
Object.setPrototypeOf(dogMethods,animalMethods);

// Cat Methods and Properties

function Cat(name,colorOfEyes,location,numberOfLegs){
    let cat=Object.create(catMethods);
    this.name = name;
    this.eyeColor = colorOfEyes;
    this.location = location;
    this.legs = numberOfLegs;
    return cat;
}

catMethods = {
    meow(){
        alert(`I am ${this.name} and I can do meow meow 😹`);
    },
    changeName(newName){
        return this.name=newName;
    },
    changeColorOfEyes(newColor){
        return this.eyeColor = newColor;
    },
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.eyeColor}. I can also do meow meow`;
    }
}
Object.setPrototypeOf(catMethods,dogMethods);
let animal1 = new Animal('Mumbai',4);
let dog1 = new Dog('Tommy',"Black And White","Mumbai",4);
let cat1 = new Cat("Mangya","Light Green","Pune",4);
