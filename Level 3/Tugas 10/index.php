<?php
// Create database connection using config file
include_once("config.php");

// Fetch all 'produk' data from database
$result = mysqli_query($mysqli, "SELECT * FROM produk ORDER BY id DESC");
?>

<html>
<head>    
    <title>Homepage</title>
</head>
 
<body>
<a href="add.php">Tambah Baru</a><br/><br/>
 
    <table width='80%' border=1>
 
    <tr>
        <th>Nama Produk</th> <th>Keterangan</th> <th>Harga</th> <th>Jumlah</th> <th>Update</th>
    </tr>
    <?php  
    while($produk_data = mysqli_fetch_array($result)) {         
        echo "<tr>";
        echo "<td>".$produk_data['nama_produk']."</td>";
        echo "<td>".$produk_data['keterangan']."</td>";
        echo "<td>".$produk_data['harga']."</td>";
        echo "<td>".$produk_data['jumlah']."</td>";    
        echo "<td><a href='edit.php?id=$produk_data[id]'>Edit</a> | <a href='delete.php?id=$produk_data[id]'>Delete</a></td></tr>";        
    }
    ?>
    </table>
</body>
</html>
