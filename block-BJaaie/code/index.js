// PseudoClassical Pattern
// ---------Animal Properties and Methods------------------
function CreateAnimal(location,numberOfLegs){
    this.location = location;
    this.legs = numberOfLegs;
}

CreateAnimal.prototype = {
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation(newLocation){
        return this.location = newLocation;
    },
    summary(){
        return `I live in ${this.location} and I have ${this.legs} legs`;
    }
}

// --------Dog Properties and Methods----------------------------
function CreateDog(name,color,location,numberOfLegs){
    CreateAnimal.call(this,location,numberOfLegs);
    this.name = name;
    this.color=color;
}

CreateDog.prototype = {
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
Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype);

//----------------Cat Properties and Methods----------------
function CreateCat(name,colorOfEyes,location,numberOfLegs){
    CreateAnimal.call(this,location,numberOfLegs);
    this.name = name;
    this.color = this.colorOfEyes;
}

CreateCat.prototype = {
    meow(){
        alert(`I am ${this.name} and I can do meow meow 😹`);
    },
    changeName(newName){
        return this.name = newName;
    },
    changeColor(newColor){
        return this.color = newColor;
    },
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.color}. I can also do meow meow`;
    }
}
Object.setPrototypeOf(CreateCat.prototype,CreateAnimal.prototype);

// Testing above Code created in Pseudoclassical Pattern
let animal = new CreateAnimal("Mumbai",4);
let dog = new CreateDog('Tommy','Black','Pune',4);
let cat = new CreateCat('Mangya','Light Green','Pune',4);

// -----------------------------------------------------------------------------------

// Class Pattern

class Animal{
    constructor(location,numberOfLegs){
        this.location = location;
        this.legs = numberOfLegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(newLocation){
        return this.location = newLocation;
    }
    summary(){
        return `I live in ${this.location} and I have ${this.legs} legs`;
    }
}

class Dog extends Animal{
    constructor(name,color,location,numberOfLegs){
        super(location,numberOfLegs);
        this.name = name;
        this.color = color;
    }
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`);
    }
    changeName(newName){
        return this.name = newName;
    }
    changeColor(newColor){
        return this.color = newColor;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}

class Cat extends Animal{
    constructor(name,colorOfEyes,location,numberOfLegs){
        super(location,numberOfLegs);
        this.name = name;
        this.eyeColor = colorOfEyes;
    }
    meow(){
        alert(`I am ${this.name} and I can do meow meow 😹`);
    }
    changeName(newName){
        return this.name = newName;
    }
    changeColor(newColor){
        return this.color = newColor;
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.color}. I can also do meow meow`;
    }
}

let animal1 = new CreateAnimal("Mumbai",4);
let dog1 = new CreateDog('Tommy','Black','Pune',4);
let cat1 = new CreateCat('Mangya','Light Green','Pune',4);