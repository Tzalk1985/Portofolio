<?php
$count = 0;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://kit.fontawesome.com/5b7f4030e6.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="styles/table.css">

    <link rel="stylesheet" href="styles/GridContainer.css">
    <link rel="stylesheet" href="styles/link.css">
    <link rel="stylesheet" href="styles/nav.css">
    <link rel="stylesheet" href="styles/dropdown.css">



    <title>ΠΙΝΑΚΑΣ DMPP</title>
</head>

<body>

    <div class="nav">
        <ul>
            <li><a href="Starter.php"><button>Αρική Σελίδα</button></a></li>
            <li><a class="active" href="Pinakas.php"><button>Παρασκεύη DMPP</button></a></li>
            <li><a href="#table"><button>Πίνακας DMPP</button></a></li>
            <li><a href="index.html"><button>Portofolio</button></a></li>
        </ul>
    </div>
    <hr size="5" color="white">
    <!--flex container div for dmpp fiedset-->

    <!-- form submit to mysql db -->
    <div class="dropdown">
        <button class="dropbtn">DMPP</button>
        <div id="myDropdown" class="dropdown-content">
            <select class="select" id="id"><?php
                                            include('conn.php');
                                            $sql = "SELECT * FROM `pinakasdmpp`";
                                            $result = mysqli_query($conn, $sql);
                                            while ($row = mysqli_fetch_assoc($result)) {
                                                

                                            ?>
                    <a href="#form">
                        <option class="option"> <?php echo $row['DMPP']; ?></option>
                    </a>

                <?php
                                            }                             
                ?>
            </select>
        </div>
    </div>

    <form name="add" method="POST" action="add.php" id="form">
        <fieldset class="grid-container">
            <!--1-->
            <div>
                <label for="name" class="form-label">DMPP :
                    <input type="text" name="DMPP" class="form-control" id="DMPP" placeholder="DMPP NAME" oninput="this.value = this.value.toUpperCase()" required /> </label>
            </div>
            <!--2-->
            <div>
                <label for="h3po4" class="form-label">H3PO4:
                    <input step="any" name="H3PO4" class="form-control" id="H3PO4" placeholder="H3PO4"> </label>
            </div>
            <!--3-->
            <div>
                <label for="dmp" class="form-label">DMP:
                    <input step="any" name="DMP" class="form-control" id="DMP" placeholder="DMP"> </label>
            </div>
            <!--4-->
            <div>
                <label for="color" class="form-label">COLOR:
                    <input step="any" class="form-control" name="COLOR" id="COLOR" placeholder="COLOR"></label>
            </div>
            <!--5-->
            <div>
                <label for="yellow" class="form-label">YELLOW
                    <input step="any" name="YELLOW" class="form-control" id="YELLOW" placeholder="YELLOW"></label>
            </div>
            <!--6-->
            <div>
                <label for="blue" class="form-label">BLUE
                    <input step="any" name="BLUE" class="form-control" id="BLUE" placeholder="BLUE"></label>
            </div>
            <!--7-->
            <div>
                <label for="kilos" class="form-label">Kilos/Ton</label>
                <input step="any" name="Kilos" class="form-control" id="Kilos"></lable>
            </div>
            <!--8-->
            <div>
                <label for="litre" class="form-label">Lit/Ton</label>
                <input step="any" name="Litre" class="form-control" id="Litre"></lable>
            </div>


            <div class="child12">
                <!-- submit button store the form to db table-->
                <i class="far fa-save">
                    <input onClick="return confirm('Are you sure you want to SAVE?')" type="submit" value="SAVE"></i>
            </div>

            <!--9-->
            <div class="child9">
                <label for="Tons for product" class="form-label">Τόνοι για Παρασκεύη DMPP:
                    <input type="number" name="tons" class="form-control" id="tons"> </label>
            </div>
            <!--10-->
            <div class="child10">
                <label for="name" class="form-label">Κιλά DMPP στον Reactor:
                    <input type="number" name="KKilos" class="form-control" id="KKilos"></label>
            </div>
            <!--11-->

            <!--12-->
            <div class="child9">
                <input type="button" onclick="multiBy()" Value="Υπολογισμός DMPP">
            </div>
            <!--13-->
            <div class="child10">
                <input type="button" onclick="DivitBy()" Value="Διαχώρισμος DMPP">
            </div>
            <!--14-->

            <!--Apotelesma Ypologismou-->
            <div class="spanYpologismos">

                Όνομα Dmpp : <span id="dmppname" style="border: 2px; font-size:larger; color:rgb(0, 134, 31)"></span>
                <br>
                <hr>

                H3PO4<span id="h3po4sum" style="color: rgb(233, 10, 10)"></span><br>

                DMP <span id="dmpsum" style="color: rgb(189, 186, 0)"></span><br>

                COLOR<span id="colorsum" style="color: rgb(18, 172, 7)"></span><br>

                YELLOW<span id="yellowsum" style="color: rgb(218, 233, 10)"></span><br>

                BLUE<span id="bluesum" style="color: rgb(32, 10, 233)"></span><br>
                <span style="border: 2px; font-size:larger; color:rgb(214, 0, 178)" id="sum"></span><br>

                <span id="k/t"></span>
            </div>
            <!--15-->
            <!--Apotelesma Diaxorismou-->
            <div class="spanDiaxorismos">
                Όνομα Dmpp : <span id="dmppname2" style="border: 2px; font-size:larger; color:rgb(0, 134, 31)"></span><br>
                <hr>

                H3PO4 <span id="h3po4sum1" style="color: rgb(233, 10, 10)"></span><br>

                DMP<span id="dmpsum1" style="color: rgb(189, 186, 0)"></span><br>

                COLOR<span id="colorsum1" style="color: rgb(18, 172, 7)"></span><br>

                YELLOW<span id="yellowsum1" style="color: rgb(218, 233, 10)"></span> <br>

                BLUE<span id="bluesum1" style="color: rgb(32, 10, 233)"></span> <br>

                Tons<span id="tons2" style="border: 2px; font-size:larger; color:rgb(214, 0, 178)"></span> <br>
            </div>

        </fieldset>

        <br>
        </div>
        <!--ADD EDIT DELETE Table elements-->
        <fieldset class="grid-container2">


    </form>


    <div class="childall2">
        <table id="table">
            <caption>ΠΙΝΑΚΑΣ DMPP</caption>
            <thead>
                <tr>
                    <th>DMPP</th>
                    <th>H3PO4</th>
                    <th>DMP</th>
                    <th>COLOR</th>
                    <th>YELLOW</th>
                    <th>BLUE</th>
                    <th>Kilos/Tons</th>
                    <th>L/Tons</th>
                    <th>SELECT</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                <?php
                include('conn.php');
                $sql = "SELECT * FROM `pinakasdmpp`";
                $result = mysqli_query($conn, $sql);
                while ($row = mysqli_fetch_assoc($result)) {
                    $count++;
                ?>

                    <tr>
                        <th> <?php echo $row['DMPP']; ?></th>
                        <td> <?php echo $row['H3PO4']; ?></td>
                        <td> <?php echo $row['DMP']; ?></td>
                        <td> <?php echo $row['COLOR']; ?></td>
                        <td> <?php echo $row['YELLOW']; ?></td>
                        <td> <?php echo $row['BLUE']; ?></td>
                        <td> <?php echo $row['Kilos']; ?></td>
                        <td> <?php echo $row['Litre']; ?></td>
                        <td>
                            <a href="#form"><i class="fas fa-check"></i></a>
                        </td>
                        <td>
                          <a href="#" onclick="checkPasswordAndOpenLink(event, '<?php echo $row['DMPP']; ?>')"><i class="fas fa-trash-alt"></i></a>
                        </td>
                    </tr>

                <?php
                }
                ?>
            </tbody>

        </table>

        <hr size="3" color="red">
        <div>
            Καταχωρημένες Συνταγές :<?php echo $count; ?> </div>
    </div>
    </fieldset>
    <script src="javascript/adddeletetable.js"></script>
    <script src="javascript/Multytontable.js"></script>



</body>

</html>