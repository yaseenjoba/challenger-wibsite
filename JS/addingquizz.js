let topics = localStorage.getItem("Topics");
topics = JSON.parse(topics);
let i ;
let x = document.getElementById("quiz-topic");
let option;
for(i=0;i<topics.length;i++){
    option= document.createElement("option");
    option.text = topics[i];
    x.add(option);
}
let quizz=[];
function addQuiz(){
    quizz = JSON.parse(localStorage.getItem("Quizz"))
    let quizTitle=document.getElementById("quiz-title").value;
    let quizTopic=document.getElementById("quiz-topic").value;
    let quizQuestions=document.getElementById("quiz-numberofquestion").value;
    let quiz = {
        "title": quizTitle,
        "topic": quizTopic,
        "question": quizQuestions
    };
    quizz.push(quiz);
    document.getElementById("quiz-title").value="";
    document.getElementById("quiz-topic").value="";
    document.getElementById("quiz-numberofquestion").value="";
    localStorage.setItem("Quizz",JSON.stringify(quizz));
}