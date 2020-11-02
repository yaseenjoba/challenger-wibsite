let list = document.getElementById("list");
let arr = JSON.parse(localStorage.getItem("Topics"));
let txt="";
let i=0;
for(i=0;i<arr.length;i++){
    txt+=arr[i]+" ";
}
list.innerHTML=txt;