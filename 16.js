// isi variabel wahana, usia dan saldo tidak boleh dirubah
// variabel tarif tidak boleh langsung di isi, gunakan proses untuk mengisinya

let wahana = "Wahana Utara";
let usia = 4;
let saldo = 180000;
let tarif = 0;
let kategori = "";

let output = "";

if (usia < 5) {
  output = `Dilarang masuk`;
} else {
  if (usia >= 5 && usia <= 12) {
    kategori = "Anak-anak";
  } else if (usia >= 13 && usia <= 49) {
    kategori = "Dewasa";
  } else {
    kategori = "Lansia";
  }

  // console.log(kategori);
  if (wahana === "Wahana Utara") {
    if (kategori === "Anak-anak") {
      tarif = 85000;
      let selisih = Math.abs(saldo - tarif);
      if (saldo >= tarif) {
        output = `Sisa saldo anda adalah RP ${selisih},00. Selamat bermain.`;
      } else {
        output = `Saldo anda kurang RP ${selisih},00. Tidak cukup untuk membeli tiket.`;
      }
    } else {
      tarif = 125000;
      let selisih = Math.abs(saldo - tarif);
      if (saldo >= tarif) {
        output = `Sisa saldo anda adalah RP ${selisih},00. Selamat bermain.`;
      } else {
        output = `Saldo anda kurang RP ${selisih},00. Tidak cukup untuk membeli tiket.`;
      }
    }
  } else if (wahana === "Wahana Selatan") {
    if (kategori === "Anak-anak") {
      tarif = 143000;
      let selisih = Math.abs(saldo - tarif);
      if (saldo >= tarif) {
        output = `Sisa saldo anda adalah RP ${selisih},00. Selamat bermain.`;
      } else {
        output = `Saldo anda kurang RP ${selisih},00. Tidak cukup untuk membeli tiket.`;
      }
    } else {
      tarif = 165000;
      let selisih = Math.abs(saldo - tarif);
      if (saldo >= tarif) {
        output = `Sisa saldo anda adalah RP ${selisih},00. Selamat bermain.`;
      } else {
        output = `Saldo anda kurang RP ${selisih},00. Tidak cukup untuk membeli tiket.`;
      }
    }
  } else {
    output = `Tarif tidak ditemukan!`;
  }
}
console.log(output);
