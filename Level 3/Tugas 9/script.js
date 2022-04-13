//Soal 1
/* 
 Database adalah kumpulan data yang sistematis. 
 Database mendukung penyimpanan elektronik dan manipulasi data. 
 Database membuat pengelolaan data menjadi mudah. (https://www.guru99.com/introduction-to-database-sql.html)

 Perbedaan SQL dan NoSQL database:
 1. SQL bersifat relasional, NoSQL bersifat non-relasional.
 2. SQL menggunakan bahasa kueri terstruktur dan memiliki skema yang telah ditentukan sebelumnya. 
    NoSQL memiliki skema dinamis untuk data tidak terstruktur.
 3. Database SQL dapat diskalakan secara vertikal, 
    sedangkan database NoSQL dapat diskalakan secara horizontal.
 4. Database SQL berbasis tabel, sedangkan database NoSQL adalah penyimpanan dokumen, 
    key-value, graph, atau wide-column.
 5. Database SQL lebih baik untuk transaksi multi-baris, 
    sedangkan NoSQL lebih baik untuk data tidak terstruktur seperti dokumen atau JSON.
 (https://www.integrate.io/blog/the-sql-vs-nosql-difference)
*/

//Soal 2
/* 
  Sudah sedikit. SQL Database, tahap manupulasi data.
*/

//Soal 3
/*
CREATE DATABASE pijarcamp;
 
USE pijarcamp;
 
CREATE TABLE `produk` (
  `id` int(11) NOT NULL auto_increment,
  `nama_produk` varchar(100),
  `keterangan` varchar(100),
  `harga` int(11),
  `jumlah` int(5),
  PRIMARY KEY  (`id`)
);
*/

//Soal 4
/* 
   db.Karyawan.find( {} )
Karyawan adalah nama collection dalam database MongoDB
MongoDB find() query adalah fungsi bawaan (in-built function) 
yang digunakan untuk mengambil dokumen dalam collection.

   db.Karyawan.find({NamaKaryawan : "Jaka"}).forEach(printjson);
Di sini kita ingin mencari Karyawan yang namanya “Jaka” dalam collection,
maka kita masukkan kriteria filter NamaKaryawan : “Jaka”
*/