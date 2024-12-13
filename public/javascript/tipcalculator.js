

function tipcount() {
    var bill = parseFloat(document.getElementById("bill").value);
    var people = parseFloat(document.getElementById("people").value);
    var tip = document.getElementById("tip").value;

    let tipAsPersent = tip / 100;
    let totalTipAmount = bill * tipAsPersent;
    var totalBill = bill + totalTipAmount;
    let billPerPerson = totalBill / people;
    var finalAmount = parseFloat(billPerPerson);

    if (tip === '') {
        finalAmount = totalBill / people
        console.log("No tips for you")
        document.getElementById('billPerPerson').innerHTML = finalAmount + " € ο καθένας";
        document.getElementById('totalBill').innerHTML = "Σύνολο : " + totalBill + " € ";
        return
    } else {
        document.getElementById('billPerPerson').innerHTML = finalAmount + " € ο καθένας";
        document.getElementById('totalBill').innerHTML = "Σύνολο : " + totalBill + " € ";
        console.log("Tips are ok")
    }

}