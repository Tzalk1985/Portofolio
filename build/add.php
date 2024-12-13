<?php
include('conn.php');

$DMPP = $_POST['DMPP'];
$H3PO4 = $_POST['H3PO4'];
$DMP = $_POST['DMP'];
$COLOR = $_POST['COLOR'];
$YELLOW = $_POST['YELLOW'];
$BLUE = $_POST['BLUE'];
$Kilos = $_POST['Kilos'];
$Litre = $_POST['Litre'];



$stmt = $conn->prepare("insert into pinakasdmpp(DMPP, H3PO4, DMP, COLOR, YELLOW, BLUE, Kilos, Litre)
	     values(?,?,?,?,?,?,?,?)");
	$stmt->bind_param("ssssssss",$DMPP, $H3PO4, $DMP, $COLOR, $YELLOW, $BLUE, $Kilos, $Litre);
	$execval=$stmt->execute();
	 
	echo '<div style="font-size:2em;color:#09b90f;font-weight:bold;">Επιτυχής Καταχώρηση Συνταγής. Επιστροφή στην αρχική σελιδα σε 3 δευτερόλεπτα</div>';
	$stmt->close();
	$conn->close();
echo '<script>
  const myTimeout = setTimeout(back, 3000);
 function back(){
  window.location = "http://www.kostastzallas.com/Pinakas.php" };</script>';
    
 
?>
