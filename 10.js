var kata = "I love Javascript";
// var kata = "buku";

// code here
let vokal = "aiueo";
// huruf kapital ke filter juga
let vokalKapital = "AIUEO";

let hasil = "";
for (let i = 0; i < kata.length; i++) {
  let test = kata[i];
  // flag, didalam looping unutk mendapatkan kesamaan sebanyak yang sama
  let isVokal = false;

  for (let j = 0; j < vokal.length; j++) {
    let test1 = vokal[j];
    let test2 = vokalKapital[j];
    if (test === test1 || test === test2) {
      isVokal = true;
      // wajib break, karena kesimpulan true/false di akhir looping
      break;
      /*
      misal:
      a === a | true  | break | isVokal=true
      a === i | false
      a === u | false
      a === e | false
      a === o | false

      tanpa break jadi isVokal = false
      */
    }
  }

  if (isVokal === true) {
    hasil += "$";
  } else {
    hasil += test;
  }
}

console.log(hasil);
