const quizData = [
    {
        question: "1. Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "2. What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "3. What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "4. What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "5. Who designed JavaScript language?",
        a: "Gan Guido Rossum",
        b: "Brendan Eich",
        c: "Bjarne Stroustrup",
        d: "Dennis Ritchie",
        correct: "b",
    },
    {
        question: "6. Javascript is an ______ language?",
        a: "Object-Oriented",
        b: "Object_based",
        c: "Structural",
        d: "Markup",
        correct: "a",
    },
    {
    question: "7. Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "Both a and b",
        d: "none of the above",
        correct: "c",
    },
    {
    question: "8. Upon encountering empty statements, what does the Javascript Interpreter do?",
        a: "throws an error",
        b: "ignores the statements",
        c: "gives a warning",
        d: "none of the above",
        correct: "b",
    },
    {
    question: "9. Which of the following methods can be used to display data in some form using Javascript?",
        a: "document.write()",
        b: "console.log()",
        c: "both a and b",
        d: "none of the above",
        correct: "c",
    },
    {
    question: "10. How can a datatype be declared to be a constant type?",
        a: "const",
        b: "var",
        c: "let",
        d: "constant",
        correct: "a",
    },
    {
    question: "11. What is the use of the <noscript> tag in Javascript?",
        a: "the contents are displayed by non-JS-based browsers",
        b: "clear all the cookies and cache",
        c: "both a and b",
        d: "none of the above",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const Prev = document.getElementById('Prev')
const Next = document.getElementById('nxt')

let currentQuiz = 0
var score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    var currentQuizData = quizData[currentQuiz]
    
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    }
    
    function deselectAnswers() {
        answerEls.forEach(answerEl => answerEl.checked = false)
    }
    var answerList = ['d','b','a','b','b','a','c','b','c','a','a']
    var list = []
    // var score1 = 0
    function getSelected() {
        let answer
        answerEls.forEach(answerEl => {
            if(answerEl.checked) {
                answer = answerEl.id
            }
        })
        console.log(answer)
        return answer
    }

    function prevQues(){
            currentQuiz--
            var currentQuizData1 = quizData[currentQuiz]
            list.pop()
            console.log(list)
            questionEl.innerText = currentQuizData1.question
            a_text.innerText = currentQuizData1.a
            b_text.innerText = currentQuizData1.b
            c_text.innerText = currentQuizData1.c
            d_text.innerText = currentQuizData1.d
        }
        function submitArea(){
            let answer = getSelected() 
            if(answer){
                list.push(answer)
                console.log(list)
                currentQuiz++
                if(currentQuiz < quizData.length){
                    loadQuiz()
                } 
                else {
                    var test = final()
                    quiz.innerHTML = `
                    <h2>You answered ${test}/${quizData.length} questions correctly</h2>
                    
                    <button onclick="location.reload()">Reload</button>`
                }
            }
            return list
        }


    function final(){
        console.log(answerList)
        console.log(list)

            for(var i=0;i<=answerList.length;i++){
                for(var j=0;j<=list.length;j++){
                    console.log(i,j)
                    if(answerList[i]===list[j]){
                        score = score+1
                        i=i+1
                        console.log(score-1," score")
                    }else{
                        i=i+1
                    }
                }
        }
        return score-1
            }