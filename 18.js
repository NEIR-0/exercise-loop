// jangan ubah isi variabel dibawah

let row = 5;
let coordinate = "99";
let coorRow = coordinate[0];
let coorCol = coordinate[1];
// console.log(typeof coorRow, typeof coorCol);
let col = 5;

// convert Number => Number(<data>) || +<data> || parseInt(<data>) || ~~<data>

if (Number(coorRow) > row) {
  coorRow = row;
}

if (Number(coorCol) > col) {
  coorCol = col;
}

for (let i = 1; i <= row; i++) {
  let temp = "";
  for (let j = 1; j <= col; j++) {
    if (i == coorRow && j == coorCol) {
      temp += "* ";
    } else {
      temp += "# ";
    }
  }
  console.log(temp);
}

/*
# # # # #
# # # # #
# # # # #
*/

// # # # # #
// # # # # #
// # # # # #
// # # # # *  (baris ke 4, kolom ke 5)
// # # # # #
