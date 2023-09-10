/*
Buatlah sebuah proses yang menerima 2 input kata1 (string) dan kata2(string), dan akan mengeluarkan output jumlah setiap huruf di kata2 yang terdapat di kata1

contoh
input:
- kata1: 'javascript is so cool'
- kata2: 'aint'
output: 5
penjelasan =>
- jumlah huruf a di dalam kata1 : 2
- jumlah huruf i di dalam kata1 : 2
- jumlah huruf n di dalam kata1 : 0
- jumlah huruf t di dalam kata1 : 1
total : 2 + 2 + 1 = 5
*/

// let kata = "javascript is so cool";
let kata = "bauuu";
let dic = "aiueo";

let count = 0;
for (let i = 0; i < kata.length; i++) {
  let test = kata[i];
  // console.log(test);

  for (let j = 0; j < dic.length; j++) {
    let test1 = dic[j];
    // console.log(test, test1, test === test1);
    if (test === test1) {
      count += 1;
      break;
    }
  }
}

console.log(`total = ${count}`);
