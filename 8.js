// let kata = "katak";
let kata = "udin";
// code here

let result = "";
for (let i = kata.length - 1; i >= 0; i--) {
  let test = kata[i];
  result += test;
}

if (kata === result) {
  console.log(true);
} else {
  console.log(false);
}
