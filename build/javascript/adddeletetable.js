var dmppIndex,
  table = document.getElementById("table");

//select row to display in inputs
function selectedRowToInput() {

  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      dmppIndex = this.rowIndex
      document.getElementById("DMPP").value = this.cells[0].innerHTML;
      document.getElementById("H3PO4").value = this.cells[1].innerHTML;
      document.getElementById("DMP").value = this.cells[2].innerHTML;
      document.getElementById("COLOR").value = this.cells[3].innerHTML;
      document.getElementById("YELLOW").value = this.cells[4].innerHTML;
      document.getElementById("BLUE").value = this.cells[5].innerHTML;
      document.getElementById("Kilos").value = this.cells[6].innerHTML;
      document.getElementById("Litre").value = this.cells[7].innerHTML;

      {
        // remove the background from the previous selected row
        if (typeof index !== "undefined") {
          table.rows[index].classList.toggle("selected");
        }
        // get the selected row index
        index = this.rowIndex;
        // add class selected to the row
        this.classList.toggle("selected");

      };
    }
  };
}

selectedRowToInput();


function checkPasswordAndOpenLink(event, id) {{{{
  // Prevent the default link behavior
  event.preventDefault();

  // Prompt the user for a password
  var enteredPassword = prompt("Enter the password:");

  // Replace 'your_correct_password' with the actual correct password
  var correctPassword = '1234';

  // Check if the entered password is correct
  if (enteredPassword === correctPassword) {{{{
    // If the password is correct, make an AJAX request to delete the record
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {{{{
      if (this.readyState == 4 && this.status == 200) {{{{
        // If the AJAX request is successful, show a success message and redirect to the homepage
        alert('Record deleted successfully. Returning to homepage in 3 seconds.');
        setTimeout(function() {{{{
          window.location.href = "Pinakas.php";
        }}}}, 3000);
      }}}} else if (this.readyState == 4 && this.status != 200) {{{{
        // If the AJAX request fails, show an error message
        alert('Error deleting record.');
      }}}}
    }}}};
    xhttp.open("GET", "del.php?id=" + id, true);
    xhttp.send();
  }}}} else {{{{
    // If the password is incorrect, show an error message
    alert('Incorrect password. Access denied.');
  }}}}
}}}}

const dropdown = document.getElementById('id');


dropdown.addEventListener('change', function () {
  let selectedValue = dropdown.value;
  
  
 
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      dmppIndex = this.rowIndex
      document.getElementById("DMPP").value = this.cells[0].innerHTML;
      document.getElementById("H3PO4").value = this.cells[1].innerHTML;
      document.getElementById("DMP").value = this.cells[2].innerHTML;
      document.getElementById("COLOR").value = this.cells[3].innerHTML;
      document.getElementById("YELLOW").value = this.cells[4].innerHTML;
      document.getElementById("BLUE").value = this.cells[5].innerHTML;
      document.getElementById("Kilos").value = this.cells[6].innerHTML;
      document.getElementById("Litre").value = this.cells[7].innerHTML;
    }
  }
});






