let kata = "xoxoxo";
// insert your coding here
let x = 0;
let o = 0;

for (let i = 0; i < kata.length; i++) {
  // console.log(kata[i]);
  if (kata[i] === "x") {
    x += 1;
  } else {
    o += 1;
  }
}

console.log(`jumlah x ada ${x}`);
console.log(`jumlah o ada ${o}`);

if (x === o) {
  console.log(true);
} else {
  console.log(false);
}
