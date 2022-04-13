<?php
// include database connection file
include_once("config.php");
 
// Check if form is submitted for produk update, then redirect to homepage after update
if(isset($_POST['update']))
{	
	$id = $_POST['id'];
	
	$nama_produk=$_POST['nama_produk'];
	$keterangan=$_POST['keterangan'];
	$harga=$_POST['harga'];
  $jumlah=$_POST['jumlah'];
		
	// update produk data
	$result = mysqli_query($mysqli, "UPDATE produk SET nama_produk='$nama_produk',keterangan='$keterangan',harga='$harga',jumlah='$jumlah' WHERE id=$id");
	
	// Redirect to homepage to display updated produk in list
	header("Location: index.php");
}
?>
<?php
// Display selected produk data based on id
// Getting id from url
$id = $_GET['id'];
 
// Fetech produk data based on id
$result = mysqli_query($mysqli, "SELECT * FROM produk WHERE id=$id");
 
while($produk_data = mysqli_fetch_array($result))
{
	$nama_produk = $produk_data['nama_produk'];
	$keterangan = $produk_data['keterangan'];
	$harga = $produk_data['harga'];
  $jumlah = $produk_data['jumlah'];
}
?>
<html>
<head>	
	<title>Edit Produk Data</title>
</head>
 
<body>
	<a href="index.php">Home</a>
	<br/><br/>
	
	<form name="update_produk" method="post" action="edit.php">
		<table border="0">
			<tr> 
				<td>Nama Produk</td>
				<td><input type="text" name="nama_produk" value="<?php echo $nama_produk;?>"></td>
			</tr>
			<tr> 
				<td>Keterangan</td>
				<td><input type="text" name="keterangan" value="<?php echo $keterangan;?>"></td>
			</tr>
			<tr> 
				<td>Harga</td>
				<td><input type="number" name="harga" value="<?php echo $harga;?>"></td>
			</tr>
      <tr> 
				<td>Jumlah</td>
				<td><input type="number" name="jumlah" value="<?php echo $jumlah;?>"></td>
			</tr>
			<tr>
				<td><input type="hidden" name="id" value="<?php echo $_GET['id'];?>"></td>
				<td><input type="submit" name="update" value="Update"></td>
			</tr>
		</table>
	</form>
</body>
</html>