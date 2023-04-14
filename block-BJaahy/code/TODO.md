# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }

- Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`
description(){
    alert(`The square is ${this.width} x ${this.height}`);
}

- Create another method named `calcArea` that will return the area of the square.
calcArea(){
    return calc(this.width * this.height);
}
- Create a getter method named `area` that will return area of the square.
get area(){
    return this.calcArea();
}
- Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))
set area(value){
    this.width = value;
    this.height = value;
}
- Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)
static isEqual(square1,square2){
    if(square.get area == square2.getArea()){
        return true;
    }
    else{
        return false;
    }
}
}
- Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)
let s1 = new Square(5);
let s2 = new Square(6);
- Check the `area` getter method on both square.

- Check the `isEqual` method and pass the two instance you created above.

## User Class

- Create a class named `User` that accepts `firstName` and `lastName` property
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

- Create a getter method named `fullName` that will return the full name of the person.
get fullName(){
    return `${this.firstName} + ${this.lastName}`;
}
- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)
set fullName(updateName){
    if(updateName.length >5){
        this.firstName = updateName.split(" ")[0];
        this.lastName = updateName.split(" ")[1];
    }
    else{
        return "Full Name should be more than 5 characters";
    }
}

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
nameContains(string){
    if(firstName.includes(string) || lastName.includes(string)){
        return true;
    }
    else{
        return false;
    }
}
}
- Create two instance of the `User` class
let user1 = new User('Shreyas','Suryawanshi');
let user2 = new User("Rohan","Suryawanshi");

- Check by using the `fullName` setter method with name bigger than 5 characters.
user1.fullName = "Shreyas Suryawanshi";
user2.fullName = "Rohan Suryawanshi";

- Check by using the `fullName` setter method with name less than 5 characters.
user1.fullName ="Jay yo";
user2.fullName = "BC MC";

- Check the `fullName` using getter
user1.fullName;
user2.fullName;

- Check the `nameContains` method
user1.nameContains(shrey);
user2.nameContains(Roha);