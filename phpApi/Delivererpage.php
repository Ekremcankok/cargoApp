<?php
session_start();
// DBConfig.php dosyamızı ekleyelim.
include 'DBConfig.php';

// Bağlantıyı sağlayalım.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

// Alınan JSON'ı $json değişkenine atayalım.

// JSON $obj array oluşturup isim, email ve telefon numarasını ekleyelim.

// Kayıtlarımızı MySQL veritabanımıza ekleyecek SQL kodunu yazalım.
$sql_check = mysqli_query($con,"select * from products where productDeliverer='".$_SESSION['identity']."'") or die(mysqli_error());

while($row = mysqli_fetch_assoc($sql_check)) {
   $json[] = $row;
}
	
$count = count($json);
array_unshift($json,$count);

echo json_encode($json);

 mysqli_close($con);
?>