
const input = require("readline-sync");
let candidateName = input.question("Enter Your Name: ")
console.log("hello, " + candidateName + '\n')


let total = 5;
let correctAnswer = 0
const questionAnswer = [
    {
        question: 'Who was the first American woman in space?',
        answer: "Sally Ride"

    },

    {
        question: 'True or false: 5 kilometer == 5000 meters?',
        answer: "true",
    },

    {
        question: '(5 + 3)/2 * 10 = ?',
        answer: '40',
    },
    {
        question: "Given the array [8, Orbit, Trajectory, 45], what entry is at index 2?",
        answer: 'Trajectory',
    },

    {
        question: 'What is the minimum crew size for the ISS?',
        answer: '3',

    },

]


function check() {
    for (let i = 0; i < questionAnswer.length; i++) {
        let askedQuestion = input.question(` ${i + 1}) question  : ` + questionAnswer[i].question + " ")
        let answerQuestion = console.log(`>> Correct Answer is: '${questionAnswer[i].answer}\n`)
        let answers = questionAnswer[i].answer
        let candidateAnswer = askedQuestion;


        if (String(answers.toLowerCase()) == String(candidateAnswer.toLowerCase())) {
            correctAnswer++
        }
    }
    console.log(`total Correct Answer is :  ${correctAnswer} \n`)
    let percentageAnswer = correctAnswer * 100 / total;
    console.log(`>>> Overal Grade:  ${percentageAnswer} %  ${correctAnswer} of ${total} response correct `);
    if (percentageAnswer >= 80) {
        console.log('>>> satuts: congratulation!! You passed ')
    } else if (percentageAnswer < 80) {
        console.log('>>> statuts : Failed')

    }
}
check()
