`<?
  session_start();

  if(!$_SESSION["login"]){
    header("Location: http://www.scholarshipacademy.uz/admin/pages/login");
  }else{

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

$sql = "SELECT * from  request where id=".$_GET["id"];

$result = $conn->query($sql);

$sqlins = "UPDATE request SET new =\"false\" WHERE id = ".$_GET["id"];

$resultl = $conn->query($sqlins);
  }
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Scholarshipacademy Admin</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="vendors/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="vendors/base/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <link rel="stylesheet" href="vendors/datatables.net-bs4/dataTables.bootstrap4.css">
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="css/style.css">
  <!-- endinject -->
  <link rel="shortcut icon" href="images/favicon.png" />
   <style type="text/css">
    .menu {
  width: 40px;
  height: 50px;
  /*margin-left: -20px;
  margin-top: -25px;*/
  margin-top: 30px;
}
.menu:hover {
  cursor: pointer;
}

.menu-1 {
 /* position: absolute;
  top: 30%;
  left: 50%;*/

}
.menu-1.open .menu-item {
  background: red;
}
.menu-1.open .menu-item:first-child {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 10px 50%;
  transform-origin: 10px 50%;
}
.menu-1.open .menu-item:nth-child(2) {
  opacity: 0;
}
.menu-1.open .menu-item:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 8px 50%;
  transform-origin: 8px 50%;
}

.menu-item {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  display: block;
  width: 40px;
  height: 3px;
  margin: 0 0 5px;
  background: #333;
}
@media (min-width:992px){
  .menu{
    display: none;
  }

}  
.sidebar-offcanvas-open{
  right:0;
}
@media (max-width: 992px){

  .logout-link{
    margin-left: 10px !important;
    font-size:12px !important;
  }
  .navbar-menu-wrapper{
    font-size: 18px !important;
  }
}
</style>
  <script type="text/javascript">
    window.onload=function(){
      document.getElementById("body").style.visibility="visible"
    }
  </script>
</head>
<body id="body" style="visibility: hidden">
  <div class="container-scroller">
    <!-- partial:partials/_navbar.html -->
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="navbar-brand-wrapper d-flex justify-content-center">
        <div class="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">  
           <div class="menu menu-1">
              <span class="menu-item"></span>
              <span class="menu-item"></span>
              <span class="menu-item"></span>
            </div>
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span class="mdi mdi-sort-variant"></span>
          </button>
        </div>  
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="color:#4d83ff;font-size:22px">
        ScholarshipAcademy <a class="logout-link" href="/admin/logout.php" style="margin-left:40px;cursor:pointer;color:red;font-size:15px;text-decoration:none"> LOGOUT</a>
      </div>
    </nav>

    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_sidebar.html -->
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="index.php">
              <i class="mdi mdi-account-card-details  menu-icon"></i>
              <span class="menu-title">Новые запросы</span>
            </a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="archive.php">
              <i class="mdi mdi-home menu-icon"></i>
              <span class="menu-title">Архив</span>
            </a>
          </li>
          
        </ul>
      </nav>
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          
          <a href="/admin/" style="margin-bottom:20px;display: block">назад</a>
          <div class="row">
            <div class="col-md-12 stretch-card">
              <div class="card">
                <div class="card-body">
                  <?
                    if ($result->num_rows > 0) {
                      // output data of each row
                      while($row = $result->fetch_assoc()) {
                        echo "<ul style='list-style:none;padding:0;'>
                                <li class='card-title'>
                                  ".$row["name"]."
                                </li>
                                 <li>
                                  ".$row["program"]."
                                </li>
                                 <li>
                                  ".$row["faculty"]."
                                </li>
                                 <li>
                                  ".$row["government"]."
                                </li>
                                 <li>
                                  ".$row["phone"]."
                                </li>
                                <li>
                                  ".$row["comment"]."
                                </li>
                                <li>
                                  ".$row["inserted"]."
                                </li>
                            </ul>";
                          
                      }
                  } else {
                      echo "";
                  }

                  $conn->close();

                  ?>
                  	
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->
        
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->

  <!-- plugins:js -->
  <script src="vendors/base/vendor.bundle.base.js"></script>
  <!-- endinject -->
  <!-- Plugin js for this page-->
  <script src="vendors/chart.js/Chart.min.js"></script>
  <script src="vendors/datatables.net/jquery.dataTables.js"></script>
  <script src="vendors/datatables.net-bs4/dataTables.bootstrap4.js"></script>
  <!-- End plugin js for this page-->
  <!-- inject:js -->
  <script src="js/off-canvas.js"></script>
  <script src="js/hoverable-collapse.js"></script>
  <script src="js/template.js"></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <script src="js/dashboard.js"></script>
  <script src="js/data-table.js"></script>
  <script src="js/jquery.dataTables.js"></script>
  <script src="js/dataTables.bootstrap4.js"></script>
  <script type="text/javascript">
    $(".menu").click(function(){
  $(this).toggleClass("open");
});
     $(".menu").click(function(){
  $(".sidebar-offcanvas").toggleClass("sidebar-offcanvas-open");
});
  </script>
  <!-- End custom js for this page-->
</body>

</html>