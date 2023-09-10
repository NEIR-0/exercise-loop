/*
    Buatlah sebuah proses yang menerima 2 buat input kata (string) dan juga huruf (string). Aplikasi ini akan menghasilkan output berupa number yang mendeskripsikan index dari huruf yang dicari;

    contoh
    input: 
    - kata: 'i love javascript'
    - huruf: 'a'
    output: 'huruf a yang pertama terdapat di index 8'

    contoh 2
    input: 
    - kata: 'javascript is so cool'
    - huruf: 'o'
    output: 'huruf o yang pertama terdapat di index 15'

    contoh 3
    input:
    - kata: 'my car'
    - huruf: 'o'
    output: 'huruf o tidak ditemukan'
*/
let kata = "javascript is so cool";
let huruf = "o";

// flag, else gak perlu. diluar looping karena cuman mau nagmbil sekali
let sama = false;
// keluarin index "i"
let index = 0;

for (let i = 0; i < kata.length; i++) {
  let test = kata[i];
  if (test == huruf) {
    sama = true;
    index += i;
    break;
  }
}

if (sama === true) {
  console.log(`huruf ${huruf} yang pertama terdapat di index ${index}`);
} else {
  console.log(`huruf ${huruf} tidak ditemukan`);
}
