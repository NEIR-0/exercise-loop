// jangan ubah isi variabel dibawah
// let row = 3;
// let coordinate = "23";
let row = 5;
let coordinate = "45";

// write your code here
let col = 5;
for (let i = 0; i < row; i++) {
  let kosong = "";
  for (let j = 0; j < col; j++) {
    if (i === coordinate[0] - 1 && j === coordinate[1] - 1) {
      kosong += "* ";
    } else {
      kosong += "$ ";
    }
  }
  console.log(kosong);
}
