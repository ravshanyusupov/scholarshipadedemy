 <?php
$servername = "localhost";
$username = "scholars_requests";
$password = "s123123Y!";
$dbname = "scholars_requests";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$name=$_POST['name']; 
$program=$_POST['program'];
$faculty=$_POST['faculty'];
$government=$_POST['country'];
$phone=$_POST['phone'];
$inserted=date("Y/m/d");
$comment=$_POST['comment'];
$sql = "INSERT INTO request (id, name, program, faculty, government, phone,inserted,new, comment)
VALUES (null, \"".$name."\",\" ".$program."\" ,\"".$faculty."\",\"".$government."\",\"".$phone."\",\"".$inserted."\",\"true\","."\".$comment.\")";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    header("Location:".$_SERVER['HTTP_REFERER']);
    
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 