// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name,age){
    let user = {};
    user.name = name;
    user.age = age;
   

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
user.sayHello=function(){
    alert(`Welcome ${user.name}`);
}
return user;
}

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
let personOne = createUser('Shreyas',22);
let personTwo = createUser('Sanjana',21);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
// function createUser(name,age){
//     let user = Object.create(userMethods);
//     user.name = name;
//     user.age = age;
// }
// let userMethods = {
//     sayHello(){
//         alert(`Welcome ${}`)
//     }
// }

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
// function CreateUser(name,age){
//     this.name = name;
//     this.age = age;
    
// }
// CreateUser.prototype = {
    //     sayHello(){
    //         alert(`Welcome ${}`)
    //     }
    // }

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
// let personOne = new CreateUser('Shreyas',22);
// let personeTwo = new CreateUser('Rohan',25); 

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
// personeOne.sayHello();
// personTwo.sayHello();

// 8. Convert the `createUser` function into `User` class.
// class CreateUser{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello(){
//         alert(`Welcome ${this.name}`)
//     }
// }

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
// let personOne = new CreateUser('Shreyas',22);
// let personTwo = new CreateUser('Rohan',25);

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
// personOne.sayHello();  ==> alerts Welcome Shreyas
// personTwo.sayHello();  ==> alerts Welcome Rohan