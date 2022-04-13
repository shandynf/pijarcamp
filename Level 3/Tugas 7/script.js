//Soal 1
function printTriangle (num) {
  for (let i = 0; i < num; i++) {
    let str = ""
    for (let j = 0; j <= i; j++) {
        str = str + "*";
    }
    console.log(str)
  }
}
printTriangle(5)

//Soal 2
function printSquare (num) {
  for (let i = 1; i <= num; i++) {
    let str = ""
    for (let j = 1; j <= num; j++) {
        if (j==1 || j==num || i==1 || i==num) {
            str = str + "*"
        } else {
            str = str + " "
        }
    }
    console.log(str)
  }
}
printSquare(5)