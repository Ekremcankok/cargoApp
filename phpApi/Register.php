<?php

// DBConfig.php dosyamızı ekleyelim.
include 'DBConfig.php';

// Bağlantıyı sağlayalım.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

// Alınan JSON'ı $json değişkenine atayalım.
$json = file_get_contents('php://input');
 
// Alınan JSON'ı decode edip $obj değişkenine atayalım.
$obj = json_decode($json,true);

// JSON $obj array oluşturup isim, email ve telefon numarasını ekleyelim.
$identity = $obj['tcNo'];
$name = $obj['isim'];
$phone = $obj['telefon'];
$password = $obj['parola'];

 
// Kayıtlarımızı MySQL veritabanımıza ekleyecek SQL kodunu yazalım.
$Sql_Query = "INSERT INTO users (identity,name,phone,password,role) VALUES ('$identity','$name','$phone','$password','user')";
 
// Eğer verileri kaydetme başarılı olursa kullanıcıya bir mesaj gösterelim.
if(mysqli_query($con,$Sql_Query)){
 
	$MSG = 'Veri MySQL veritabanına başarıyla eklendi';

	// Mesajı JSON formatına çevirelim.
	$json = json_encode($MSG);

	// Mesajı görüntüleyelim.
 	echo $json ;

}else{
 
 echo 'Tekrar deneyin';
 
 }
 mysqli_close($con);
?>