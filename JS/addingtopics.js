let topics=[];
function addTopic(){
    var topic = document.getElementById("title").value;
    topics.push(topic);
    document.getElementById("title").value="";
    localStorage.setItem("Topics",JSON.stringify(topics));
}