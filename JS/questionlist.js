let question = JSON.parse(localStorage.getItem("questions"));
let i ;
let table = document.getElementById("questions-table");
let row,cell1,cell2,cell3,cell4;
for(i=0;i<question.length;i++){
     row = table.insertRow(i+1);
     cell1 = row.insertCell(0);
     cell2 = row.insertCell(1);
     cell3=row.insertCell(2);
     cell4=row.insertCell(3);
    cell1.innerHTML=i+1;
    cell2.innerHTML=question[i].questionText;
    cell3.innerHTML=question[i].questionTopic;
    cell4.innerHTML=question[i].questionOptions;
}
