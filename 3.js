let data = "Hacktiv8 mantap"; // 3
let find = "t";

let count = 0;
for (let i = 0; i < data.length; i++) {
  let test = data[i];
  if (test === find) {
    count += 1;
  }
}
console.log(`jumlah ${find} ada ${count}`);
