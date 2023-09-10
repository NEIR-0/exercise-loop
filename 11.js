let angka = 27;

// code here
// pakai while ketika lu gak tau batas akhir, disini kita mau pake infinite loop jadi pake while

// bikin infinite loop
while (angka > 0) {
  angka++;
  let empty = "" + angka;
  // console.log(angka);
  // console.log(empty);

  let kosong = "";
  for (let i = empty.length - 1; i >= 0; i--) {
    kosong += empty[i];
  }
  console.log(empty, kosong, angka, kosong === empty);
  if (kosong === empty) {
    console.log(empty);
    // console.log(typeof empty);

    // break agar looping "angka++;" berhenti
    break;
  }
}
