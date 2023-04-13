let data = {
    title:"Hottest Place On Earth",
    options:['Nagpur','Israel','Delhi','Solapur'],
    correctAnswerIndex:3,
    isAnswerCorrect(para){
        if(para == this.correctAnswerIndex){
            return true;
        }
        else{
            return false;
        }
    },
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
};

// Using object to create quiz

let question = {
    title:"Hottest Place on Earth",
    options:['Nagpur','Israel','Delhi','Solapur'],
    correctAnswerIndex:3,
    isAnswerCorrect(para){
        if(para == data.correctAnswerIndex){
            return true;
        }
        else{
            return false;
        }
    },
    getCorrectAnswer(){
        return data.options[correctAnswerIndex];
    }
}

// let user1={
//     name:"Shreyas",
//     sirname:"Suryawanshi",
//     increaseScore(value=1){
//         user1.score = user1.score + value;
//         return user1.score;
//     },
//     decreaseScore(value=1){
//         user1.score = user1.score - value;
//         return user1.score;
//     },
//     changeName(name){
//         user1.name= name;
//         return user1.name;
//     },
// };


// Using function to create object
function createQuiz(){
    let exam={};
    exam.name="Quiz";
    exam.NoOfQuestions=1;
    exam.points=0;
    exam.question="Who is the best Coder on planet Earth?";
    exam.options=["Shreyas","Shreyas Suryawanshi","One And Only Shreyas"];
    exam.correctAnswerIndex=2;
    exam.isAnswerCorrect = function (index){
        if(index == exam.correctAnswerIndex){
            return "Correct";
        }
        else{
            return "All of them are Shreyas himself HaHa!";
        }
    };
    exam.getCorrectAnswer = function(){
        return exam.options[exam.correctAnswerIndex];
    };
    return exam;
};

let exam1= createQuiz();    