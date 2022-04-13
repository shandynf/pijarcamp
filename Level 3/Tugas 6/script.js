//Soal 1
/*
Loop dapat mengeksekusi blok kode beberapa kali.
Loop berguna, jika kita ingin menjalankan kode yang sama berulang-ulang, 
setiap kali dengan nilai yang berbeda. JavaScript mendukung 
berbagai jenis loop:
for - loop melalui blok kode beberapa kali.
  syntax: for (statement 1; statement 2; statement 3) {
              // eksekusi
          }
  contoh: for (let i = 0; i < 5; i++) {
              text += "Nomor ke " + i + "<br>";
          }

for/in - loop melalui properti suatu object.
  syntax: for (key in object) {
              // eksekusi
          }
  contoh: const saya = {namaDepan:"John", namaBelakang:"Doe", umur:25};
          let text = "";
          for (let x in saya) {
              text += saya[x];
          }

for/of - loop melalui nilai-nilai object yang dapat diubah.
  syntax: for (variable of iterable) {
              // eksekusi
          }
  contoh: const mobil = ["Aston", "BMW", "Chev"];
          let text = "";
          for (let x of mobil) {
              text += x;
          }

while - loop melalui blok kode saat kondisi yang ditentukan benar.
  syntax: while (kondisi) {
              // eksekusi
          }
  contoh: while (i < 10) {
              text += "Nomor ke " + i;
              i++;
          }

do/while - perulangan melalui blok kode saat kondisi yang ditentukan benar.
           varian dari perulangan while. Loop ini akan mengeksekusi blok 
           kode satu kali, sebelum memeriksa apakah kondisinya benar, 
           kemudian akan mengulangi loop selama kondisinya benar.
  syntax: do {
              // eksekusi
          }
          while (kondisi);
  contoh: do {
              text += "Nomor ke " + i;
              i++;
          }
          while (i < 10);

*/

//Soal 2
function printNumber(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}
printNumber(3)

//Soal 3
function cekGanjilGenap (num) {
    if(num % 2 == 0) {
        console.log("Genap");
    } else {
        console.log("Ganjil");
    }
}
cekGanjilGenap(6)
cekGanjilGenap(9)