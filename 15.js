/*
sebuah tambang menghasilkan hasil tambang berbagai macam, ada D(diamond) G(gold) dan S(silver)
sekali tambah penambang akan dapat berbagai hasil tambangan yang berbeda beda..
Diamond berharga 10_000 Gold berharga 5000 dan Silver berharga 1000

tugas mu adalah menghitung berapa banyak uang yang mereka hasilkan dari tambang tersebut

*/

let mine = "G%@!%^@!S$@SD";
let money = 0;

// berhasil mendapatkan uang sebesar Rp. 17.000

let hasil = 0;
for (let i = 0; i < mine.length; i++) {
  //   console.log(`dapat ${mine[i]}`);
  if (mine[i] === "D") {
    hasil += 10_000;
  } else if (mine[i] === "G") {
    hasil += 5000;
  } else if (mine[i] === "S") {
    hasil += 1000;
  }
}
console.log(`berhasil mendapatkan uang sebesar Rp. ${hasil}`);
