// Object Creation Patterns

// Using Function to create Objects

function studentResume(name,id,noOfProjects){
    let studentDetails = {};
    studentDetails.name = name;
    studentDetails.id = id;
    studentDetails.projects = noOfProjects;
    studentDetails.getProjects= function(){
        return `${studentDetails.name} has completed ${studentDetails.projects} projects`;
    }
    studentDetails.changeName = function(newName){
        return studentDetails.name = newName;
    }
    studentDetails.incrementProject = function(value=0){
        return studentDetails.projects = studentDetails.projects + value;
    }
    studentDetails.decrementProject = function(value=0){
        return studentDetails.projects = studentDetails.projects - value;
    }
    return studentDetails;
}

let student = studentResume('Shreyas','69',3);
let student0 = studentResume('Rohan','96',1);

// Prototypal Pattern
function studentBio(name,id,noOfProjects){
    let studentDetails = Object.create(studentMethods);
    studentDetails.name = name;
    studentDetails.id = id;
    studentDetails.projects = noOfProjects;
    return studentDetails;

}

let studentMethods = {
    getProjects(){
        return `${this.name} has completed ${this.projects} projects`;
    },
    changeName(newName){
        return this.name = newName;
    },
    incrementProject(value=0){
        return this.projects = this.projects + value;
    },
    decrementProject(value=0){
        return this.projects = this.projects - value;
    },
}

let student1 = studentBio('Shreyas','69',3);
let student2 = studentBio('Rohan','96',1);

// PseudoClassical Way

function studentHistory(name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.projects = noOfProjects;
}

studentHistory.prototype = {
    getProjects(){
        return `${this.name} has completed ${this.projects} projects`;
    },
    changeName(newName){
        return this.name = newName;
    },
    incrementProject(value=0){
        return this.projects = this.projects + value;
    },
    decrementProject(value=0){
        return this.projects = this.projects - value;
    },
}

let student3 = new studentHistory('Shreyas','7',5);
let student4 = new studentHistory("Rohan",'4',4);

// Using Class

class StudentProgress{
    constructor(name,id,noOfProjects){
        this.name = name;
        this.id = id;
        this.projects = noOfProjects;
    }
    getProjects(){
        return `${this.name} has completed ${this.projects} projects`;
    }
    changeName(newName){
        return this.name = newName;
    }
    incrementProject(value=0){
        return this.projects = this.projects + value;
    }
    decrementProject(value=0){
        return this.projects = this.projects - value;
    }
}

let student5 = new studentHistory('Shreyas Suryawanshi','1',007);
let student6 = new studentHistory("Rohan Suryawanshi",'9',2);