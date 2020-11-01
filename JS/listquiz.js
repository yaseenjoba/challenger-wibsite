let quizz1 = JSON.parse(localStorage.getItem("Quizz"));
let i ;
let table = document.getElementById("quizz-table");
let row,cell1,cell2,cell3,cell4;
for(i=0;i<quizz1.length;i++){
     row = table.insertRow(i+1);
     cell1 = row.insertCell(0);
     cell2 = row.insertCell(1);
     cell3=row.insertCell(2);
     cell4=row.insertCell(3);
    cell1.innerHTML=i+1;
    cell2.innerHTML=quizz1[i].title;
    cell3.innerHTML=quizz1[i].topic;
    cell4.innerHTML=quizz1[i].question;
}
