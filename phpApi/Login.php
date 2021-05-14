<?php
session_start();
// DBConfig.php dosyamızı ekleyelim.
include 'DBConfig.php';

// Bağlantıyı sağlayalım.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

// Alınan JSON'ı $json değişkenine atayalım.

// JSON $obj array oluşturup isim, email ve telefon numarasını ekleyelim.

// Kayıtlarımızı MySQL veritabanımıza ekleyecek SQL kodunu yazalım.
$sql_check = mysqli_query($con,"select * from users where identity='".$_GET["identity"]."' and password='".$_GET["password"]."' LIMIT 1") or die(mysqli_error());

while($row = mysqli_fetch_assoc($sql_check)) {
   $role = $row['role'];
   $identity = $row['identity'];
   $_SESSION['identity']= $identity;
   $_SESSION['role']= $role;
}
	
if(mysqli_num_rows($sql_check))  {
	
	if($role == "user")
	{
	echo json_encode(["result" => "user"]);
	}
	
	else
	{
		echo json_encode(["result" => "deliverer"]);
	}
}
else {
	echo json_encode(["result" => -1]);

}

 mysqli_close($con);
?>