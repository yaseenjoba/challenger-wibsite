let topics=[];
function addTopic(){
    topics = JSON.parse(localStorage.getItem("Topics"));
    var topic = document.getElementById("title").value;
    topics.push(topic);
    document.getElementById("title").value="";
    localStorage.setItem("Topics",JSON.stringify(topics));
}