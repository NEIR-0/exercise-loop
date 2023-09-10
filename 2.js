// lempar dadu 1 - 6
// output anda mendapatkan 6 pada putaran 4

let dadu = Math.floor(Math.random() * 6 + 1);
// console.log(dadu);

// bukan cuman biosa <, >, <=, >=. tapi juga bisa kekgini "dadu !== 6"
count = 0;
for (let i = 1; dadu !== 6; i++) {
  dadu = Math.floor(Math.random() * 6 + 1);
  count = i;
  console.log(`anda mendapatkan ${dadu} pada putaran ${count}`);
}

// console.log(`anda mendapatkan ${dadu} pada putaran ${count}`);
