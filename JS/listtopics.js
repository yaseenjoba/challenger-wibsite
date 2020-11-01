let topics = localStorage.getItem("Topics");
topics = JSON.parse(topics);
let i ;
var table = document.getElementById("topics-table");
var row,cell1,cell2;
for(i=0;i<topics.length;i++){
     row = table.insertRow(i+1);
     cell1 = row.insertCell(0);
     cell2 = row.insertCell(1);
    cell1.innerHTML=i+1;
    cell2.innerHTML=topics[i];
}
