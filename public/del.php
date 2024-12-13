<?php


include('conn.php');
$id=$_GET['id'];

// sql to delete a record
$sql = "DELETE FROM pinakasdmpp WHERE DMPP ='$id'"; 

if ($conn->query($sql) === TRUE) {
echo '<div style="font-size:2em;color:#ff0707fa;font-weight:bold;">Επιτυχής διαγραφή 1 συνταγής. Επιστροφή στην αρχική σελιδα σε 3 δευτερόλεπτα</div>';
} else {
echo "Error deleting record: " . $conn->error;
}

$conn->close();

echo '<script>
const myTimeout = setTimeout(back, 3000);
function back(){
window.location = "Pinakas.php" };</script>';
?>