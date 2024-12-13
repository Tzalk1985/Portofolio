


var arr =  new Array();
function addData(){
    getData();
    arr.push({
        DMPP : document.getElementById("DMPP").value,
        H3PO4 : document.getElementById("H3PO4").value,
        DMP : document.getElementById("DMP").value,
        COLOR : document.getElementById("COLOR").value,
        YELLOW : document.getElementById("YELLOW").value,
        BLUE : document.getElementById("BLUE").value,
        Kilos : document.getElementById("Kilos").value,
        Litre : document.getElementById("Litre").value
    });
    localStorage.setItem("localData",JSON.stringify(arr));
    showData();
}


function getData(){
    var str = localStorage.getItem("localData")
    if(str !=null)
    arr = JSON.parse(str)
}


function deleteData(){
    localStorage.clear();
}
       


function showData(){
    getData();

    var table = document.getElementById("table")
    
    var x = table.rows.length;
    while(--x){
        table.deleteRow(x);
    }

    for (i=0;i<arr.length; i++){
var newRow = table.insertRow(table.length);
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);
var cell5 = newRow.insertCell(4);
var cell6 = newRow.insertCell(5);
var cell7 = newRow.insertCell(6);
var cell8 = newRow.insertCell(7);

cell1.innerHTML = arr[i].DMPP;
cell2.innerHTML = arr[i].H3PO4;
cell3.innerHTML = arr[i].DMP;
cell4.innerHTML = arr[i].COLOR;
cell5.innerHTML = arr[i].YELLOW;
cell6.innerHTML = arr[i].BLUE;
cell7.innerHTML = arr[i].Kilos;
cell8.innerHTML = arr[i].Litre;
}}
 
 showData();