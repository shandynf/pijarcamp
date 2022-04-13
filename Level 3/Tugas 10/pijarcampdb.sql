/* Create Database and Table */
create database pijarcamp;
 
use pijarcamp;
 
CREATE TABLE `produk` (
  `id` int(11) NOT NULL auto_increment,
  `nama_produk` varchar(100),
  `keterangan` varchar(100),
  `harga` int(11),
  `jumlah` int(5),
  PRIMARY KEY  (`id`)
);