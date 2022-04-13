<html>
<head>
	<title>Tambah Produk</title>
</head>
 
<body>
	<a href="index.php">Kembali ke Daftar Produk</a>
	<br/><br/>
 
	<form action="add.php" method="post" name="form1">
		<table width="25%" border="0">
			<tr> 
				<td>Name</td>
				<td><input type="text" name="nama_produk"></td>
			</tr>
			<tr> 
				<td>Keterangan</td>
				<td><input type="text" name="keterangan"></td>
			</tr>
			<tr> 
				<td>Harga</td>
				<td><input type="number" name="harga"></td>
			</tr>
      <tr> 
				<td>Jumlah</td>
				<td><input type="number" name="jumlah"></td>
			</tr>
			<tr> 
				<td></td>
				<td><input type="submit" name="Submit" value="Tambah"></td>
			</tr>
		</table>
	</form>
	
	<?php
 
	// Check If form submitted, insert form data into produk table.
	if(isset($_POST['Submit'])) {
		$nama_produk = $_POST['nama_produk'];
		$keterangan = $_POST['keterangan'];
		$harga = $_POST['harga'];
    $jumlah = $_POST['jumlah'];
		
		// include database connection file
		include_once("config.php");
				
		// Insert produk data into table
		$result = mysqli_query($mysqli, "INSERT INTO produk(nama_produk,keterangan,harga,jumlah) VALUES('$nama_produk','$keterangan','$harga','$jumlah')");
		
		// Show message when produk added
		echo "Produk berhasil ditambahkan. <a href='index.php'>Lihat Produk</a>";
	}
	?>
</body>
</html>