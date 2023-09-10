let word = "lov2e";
// write your code

let hasil = "";
for (let i = 0; i < word.length; i++) {
  //   console.log(`${i} ke ${word[i]}`);
  let test = word[i];
  if (isNaN(test)) {
    hasil += test;
  } else {
    for (let j = 0; j < test; j++) {
      hasil += word[i - 1];
    }
  }
}

console.log(hasil);
