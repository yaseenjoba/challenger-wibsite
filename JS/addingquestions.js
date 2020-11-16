let topics = localStorage.getItem("Topics");
topics = JSON.parse(topics);
let i;
var x = document.getElementById("select-topic");
var option;
for (i = 0; i < topics.length; i++) {
    option = document.createElement("option");
    option.text = topics[i];
    x.add(option);
}
var questions = [];
function addQuestion() {
    questions = JSON.parse(localStorage.getItem("questions"));
    let correct = [];
    let question = document.getElementById('input-question').value;
    let topic = document.getElementById('select-topic').value;
    let options = [];
    options.push(document.getElementById("Question-option").value);
    if (document.getElementById("checkBox").checked) {
        correct.push(document.getElementById("Question-option").value);
    }
    let i = 0;
    let list = document.getElementById("list");
    let idForElement = "a";

    for (i = 0; i < list.children.length; i++) {
        options.push(document.getElementById(idForElement).children[0].value);
        if (document.getElementById(idForElement).children[2].checked) {
            correct.push(document.getElementById(idForElement).children[0].value);
        }
        document.getElementById(idForElement).children[0].value = "";
        idForElement += 'a';
    }
    let newQuestion = {
        "questionText": question,
        "questionTopic": topic,
        "questionOptions": options,
        "correctOptions": correct
    };
    questions.push(newQuestion);
    document.getElementById("Question-option").value = "";
    document.getElementById('select-topic').value = "";
    document.getElementById('input-question').value = "";
    localStorage.setItem("questions", JSON.stringify(questions));

}
var elementID = 'a';
function createNewElement() {
    // First create a DIV element.
    var txtNewInputBox = document.createElement('div');

    // Then add the content (a new input box) of the element.
    txtNewInputBox.innerHTML = `  
      <input type='text' id='newInputBox'  value='' class='inputBox'>
      <input type="button"  class = "clearButton"  onclick="deleteElement();"/>
      <input type="checkbox" class="checkBox">

    `;
    txtNewInputBox.setAttribute('id', (elementID))
    elementID += 'a';

    // Finally put it where it is supposed to appear.
    document.getElementById("list").appendChild(txtNewInputBox);
}
function deleteElement() {
    elementID = elementID.substr(0, elementID.length - 1);
    var element = document.getElementById((elementID));
    element.remove();

}
