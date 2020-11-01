let topics = localStorage.getItem("Topics");
topics = JSON.parse(topics);
let i ;
var x = document.getElementById("select-topic");
var option;
for(i=0;i<topics.length;i++){
    option= document.createElement("option");
    option.text = topics[i];
    x.add(option);
}
function addQuestion(){
    let question = document.getElementById('input-question').value;
    let topic= document.getElementById('select-topic').value;
    let options = [];
    

}