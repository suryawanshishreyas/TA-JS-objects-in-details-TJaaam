## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)
class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(frequency){
        this.eat = frequency;
        return this.eat;
    }
    sleep(frequency){
        this.sleep = frequency;
        return this.sleep;
    }
    this.walk(frequency){
        this.walk = frequency;
        return this.walk;
    }
}

class Player extends Person{
    constructor(name,age,gender,sportsName){
        super(name,age,gender);
        this.sportsName = sportsName;
    }
    play(frequency){
        this.play = frequency;
        return this.play;
    }
}

class Teacher extends Player{
    constructor(name,age,gender,instituteName){
        super(name,age,gender);
        this.instituteName = instituteName;
    }
    teach(frequency){
        this.teach = frequency;
        return this.teach;
    }
}

class Artist extends Person{
    constructor(name,age,gender,kind){
        super(name,age,gender);
        this.kind = kind;
    }
    createArt(name){
        this.artType = name;
        return this.artType;
    }
}

class Cricketer extends Player{
    constructor(name,age,gender,sportsName,teamName){
        super(name,age,gender);
        this.sportsName = Cricket;
        this.teamName = teamName;
    }
    playCricket(frequency){
        this.playCricket = frequency;
        return this.playCricket;
    }
}