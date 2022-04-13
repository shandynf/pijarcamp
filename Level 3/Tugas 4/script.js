//Level 3 Tugas 4 Soal 2
function cekParameter(x) {
  if (x == null) {   // string kosong masih bisa
      console.log("Tidak Ada Parameter yang diberikan.");
  } else {
      console.log("Ini parameternya " + x);
  }
}
cekParameter();
cekParameter(49);
cekParameter("")