// Jangan merubah  variabel di bawah
let exercise = "<>^v^^<>";
let userInput = "<>^<^^<>";
let output = ``;

if (exercise.length !== userInput.length) {
  output = `Input yang anda masukkan tidak lengkap!`;
} else {
  let kategori = "";
  let score = 0;
  let max = exercise.length * 10;

  //process cari score
  for (let i = 0; i < exercise.length; i++) {
    let perCharExercise = exercise[i];
    let perCharUserInput = userInput[i];
    if (perCharExercise === perCharUserInput) {
      score += 10;
    }
  }
  //   console.log(score, max);
  let percentage = Math.floor((score / max) * 100);
  //   console.log(percentage);
  if (percentage === 100) {
    kategori = "Perfect";
  } else if (percentage >= 80 && percentage <= 99) {
    kategori = "Great";
  } else if (percentage >= 60 && percentage <= 79) {
    kategori = "Good";
  } else {
    kategori = `Bad`;
  }

  output = `Anda mendapatkan score ${score} / ${max} Persentase: ${percentage}%, Kategori : ${kategori}`;
}
console.log(output);
