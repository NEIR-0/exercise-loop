// Jangan merubah isi variabel di bawah
let exercise = "<>^v>>>";
// let userInput = "<>^^>><";
let userInput = "<>^    ";

// code here
let point = 0;
for (let i = 0; i < exercise.length; i++) {
  let test1 = exercise[i];
  let test2 = userInput[i];
  if (test1 === test2) {
    point += 1;
  }
}
// console.log(`jumlah pint ${point}`);

let persen = Math.floor((point / exercise.length) * 100);
// console.log(`${persen}%`);

// - 0 - 59 % - Bad
if (persen === 100) {
  console.log(`Anda mendapatkan score ${point * 10} / ${exercise.length * 10}. Persentase: ${persen}%, Kategori : Perfect`);
}
// - 100 % - Perfect
else if (persen >= 80 && persen <= 99) {
  console.log(`Anda mendapatkan score ${point * 10} / ${exercise.length * 10}. Persentase: ${persen}%, Kategori : Great`);
}
// - 80 % - 99% - Great
else if (persen >= 60 && persen <= 79) {
  console.log(`Anda mendapatkan score ${point * 10} / ${exercise.length * 10}. Persentase: ${persen}%, Kategori : Good`);
}
// - 60 % - 79 % - Good
else if (persen >= 0 && persen <= 59) {
  console.log(`Anda mendapatkan score ${point * 10} / ${exercise.length * 10}. Persentase: ${persen}%, Kategori : Bad`);
}
