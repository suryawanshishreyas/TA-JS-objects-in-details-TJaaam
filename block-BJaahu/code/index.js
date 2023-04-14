// Prototypal Pattern Of Object Creation
// function createQuiz(title,options,index){
//     let quiz = Object.create(quizMethods);
//     quiz.title=title;
//     quiz.options=options;
//     quiz.index = index;

//     return quiz;
// }

// let quizMethods = {
//     isAnswerCorrect(value){
//         if(this.index == value){
//             return true;
//         }
//         else{
//             return false;
//         }
//     },
//     getCorrectAnswer(){
//         return `Correct Answer is: ${this.index}: ${this.options[this.index]}`;
//     }
// };

// Pseudoclassical Pattern
function createQuiz(title,options,index){
    this.title=title;
    this.options=options;
    this.index = index;
}

createQuiz.prototype = {
    isAnswerCorrect(value){
        if(this.index == value){
            return true;
        }
        else{
            return false;
        }
    },
    getCorrectAnswer(){
        return `Correct Answer is: ${this.index}: ${this.options[this.index]}`;
    }
}

let question1 = new createQuiz('Who won the 2022 Fifa World Cup?',['Portugal','Croatia','Argentina','France'],2);

let question2 = new createQuiz("Who won the most IPL trophies in history of IPL?",['Chennai Super Kings','Royal Challengers Bengalore','Mumbai Indians','Kolkata Knight Riders'],2);