<?php
session_start();
// DBConfig.php dosyamızı ekleyelim.
include 'DBConfig.php';

// Bağlantıyı sağlayalım.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$a=1;
// Alınan JSON'ı $json değişkenine atayalım.

// JSON $obj array oluşturup isim, email ve telefon numarasını ekleyelim.

// Kayıtlarımızı MySQL veritabanımıza ekleyecek SQL kodunu yazalım.
$sql_check = mysqli_query($con,"DELETE from products where productCode='".$_GET['code']."'") or die(mysqli_error());
 mysqli_close($con);
 
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $sql = mysqli_query($con,"UPDATE products SET productStartLocation='".$_GET['location']."', startShortLocation='".$_GET['shortLocation']."', queue=queue-1") or die(mysqli_error());
    if (mysqli_query($conn, $sql)) {
      echo "Record updated successfully";
   } else {
      echo "Error updating record: " . mysqli_error($conn);
   }
  mysqli_close($con);
?>