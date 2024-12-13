

//Πολλαπλασιασμος υλικων σε τονους
function multiBy() {
      dm = document.getElementById("DMPP").value;
      h3po4 = parseFloat(document.getElementById("H3PO4").value);
      dmp = parseFloat(document.getElementById("DMP").value);
      color = parseFloat(document.getElementById("COLOR").value);
      yellow = parseFloat(document.getElementById("YELLOW").value);
      blue = parseFloat(document.getElementById("BLUE").value);
      tons = parseFloat(document.getElementById("tons").value);

      h3po4sum = tons * h3po4
      dmpsum = tons * dmp
      colorsum = tons * color
      yellowsum = tons * yellow
      bluesum = tons * blue

      sum = h3po4 * tons + dmp * tons + color * tons + yellow * tons + blue * tons
      kt = h3po4 + dmp + color + yellow + blue

      document.getElementById("dmppname").innerHTML = dm;
      document.getElementById("h3po4sum").innerHTML = " = " + h3po4sum.toFixed(3) + " kg";
      document.getElementById("dmpsum").innerHTML = " = " + dmpsum.toFixed(3) + " kg";
      document.getElementById("colorsum").innerHTML = " = " + colorsum.toFixed(3) + " kg";
      document.getElementById("yellowsum").innerHTML = " = " + yellowsum.toFixed(3) + " kg";
      document.getElementById("bluesum").innerHTML = " = " + bluesum.toFixed(3) + " kg";
      document.getElementById("sum").innerHTML = "Σύνολο DMPP :" + " " + sum.toFixed(3) + " kg";
      document.getElementById("k/t").innerHTML = kt.toFixed(3) + " k/t :";


}
//Διαχωρισμος Υλικων
function DivitBy() {
      dm = document.getElementById("DMPP").value;
      h3po4 = parseFloat(document.getElementById("H3PO4").value);
      dmp = parseFloat(document.getElementById("DMP").value);
      color = parseFloat(document.getElementById("COLOR").value);
      yellow = parseFloat(document.getElementById("YELLOW").value);
      blue = parseFloat(document.getElementById("BLUE").value);
      kilos = parseFloat(document.getElementById("KKilos").value);
      
      

      kt = h3po4 + dmp + color + yellow + blue;
      tons = kilos / kt;

      h3po4sum1 = tons * h3po4
      dmpsum1 = tons * dmp
      colorsum1 = tons * color
      yellowsum1 = tons * yellow
      bluesum1 = tons * blue



      document.getElementById("dmppname2").innerHTML = dm;
      document.getElementById("h3po4sum1").innerHTML = " = " + h3po4sum1.toFixed(3) + " kg";
      document.getElementById("dmpsum1").innerHTML = " = " + dmpsum1.toFixed(3) + " kg";
      document.getElementById("colorsum1").innerHTML = " = " + colorsum1.toFixed(3)+ " kg";
      document.getElementById("yellowsum1").innerHTML = " = " + yellowsum1.toFixed(3)+ " kg";
      document.getElementById("bluesum1").innerHTML = " = " + bluesum1.toFixed(3) + " kg";
      document.getElementById("tons2").innerHTML = " = " + tons.toFixed(1) + " TONS";

}







