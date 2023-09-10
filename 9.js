// let kalimat = "I have a dream";
let kalimat = "t";

// code here
let spasi = 0;
for (let i = 0; i < kalimat.length; i++) {
  let test = kalimat[i];
  if (test === " ") {
    spasi += 1;
  }
}
console.log(`jumlah spasi = ${spasi}`);

if (kalimat.length === spasi) {
  console.log(`ada 0 kaliamt`);
} else {
  console.log(`ada ${spasi + 1} kaliamt`);
}
