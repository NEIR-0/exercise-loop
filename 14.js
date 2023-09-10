/**
 * SEBUAH MINIMARKET ALFAMILF INGIN MEMBUAT APLIKASI PEMBAYARAN YANG BERGUNA UNTUK MEMBANTU ALFAMILF MENGHITUNG TOTAL PEMBAYARAN SEMUA KONSUMENNYA
 * DIKETAHUI BAHWA ALFAMILF MEMILIKI 3 JENIS MEMBERSHIP, JIKA DALAM CARD ID TERDAPAT "P" MAKA MEMBERSHIPNYA ADALAH <"PREMIUM">, JIKA DALAM CARD ID TERDAPAT "S" MAKA MEMBERSHIPNYA ADALAH "STANDAR" DAN TERAKHIR JIKA DALAM CARD ID TERDAPAT "V" MAKA MEMBERSHIPNYA ADALAH "VIP".
 * DIKETAHUI PULA BAHWA ALFAMILF AKAN MEMBERIKAN DISKON SESUAI DENGAN MEMBERSHIP YANG DIMILIKI PEMBELI. JIKA MEMBERSHIPNYA ADALAH "PREMIUM" DISKON YANG DIBERIKAN ADALAH 30%, JIKA "STANDAR" DISKON YANG DIBERIKAN ADALAH 20% DAN TERAKHIR UNTUK VIP ADALAH 50%.
 * JIKA PEMBELI TIDAK MEMILIKI CARD ID, MAKA ALFAMILF AKAN MENYARANKAN PEMBELI UNTUK MENDAFTARKAN DIRI TERLEBIH DULU UNTUK MENIKMATI DISKON TERSEBUT.
 * BANTULAH ALFAMILF UNTUK MEMBUAT APLIKASI TERSEBUT.
 */
// let nama = "Hideyoshi";
// let cardID = "@!$!%!%^^^FDAP";
// let belanja = 130_000;
// let diskon = 0; // pembuatan variable baru untuk menampung discount
// let membership = ""; // pembuatan variable baru untuk menampung membership
//output yang dihasilkan :
// "Halo Hideyoshi, sebagai member Premium anda mendapatkan diskon sebesar 30% dengan total belanjaan kamu menjadi 91000"

// code here

// ---- TEST CASE ------
/**
 * 
case 1 :

let nama = "Koro Sensei"
let cardID = "@!$!524151"
let belanja = 100_000

outputnya : 
"Halo Koro Sensei, anda belum terdaftar sebagai member. Yuk daftarkan diri anda"


case 2 :

let nama = "Hinata"
let cardID = "^#%@%STTW"
let belanja = 50_000

outputnya : 
"Halo Hinata, sebagai member Standar anda mendapatkan diskon sebesar 20% dengan total belanjaan kamu menjadi 40_000"

case 3 :

let nama = "Rocky"
let cardID = "ALKKLKGV#%!"
let belanja = 900_000

outputnya : 
"Halo Rocky, sebagai member VIP anda mendapatkan diskon sebesar 50% dengan total belanjaan kamu menjadi 450_000"
 */

let nama = "Hideyoshi";
let cardID = "@!$!%!%^^^FDAP";
// let cardID = "@V";
let belanja = 130_000;
let diskon = 0; // pembuatan variable baru untuk menampung discount
let membership = ""; // pembuatan variable baru untuk menampung membership

if (!cardID) {
  console.log(`Halo ${nama}, anda belum terdaftar sebagai member. Yuk daftarkan diri anda`);
} else {
  //   console.log(`ada membership coy`);
  for (let i = 0; i < cardID.length; i++) {
    // console.log(`kode ${cardID[i]}`);
    if (cardID[i] === "P") {
      membership = "PREMIUM";
      diskon = belanja * (30 / 100);
      //   console.log(`member anda ${membership} dan diskon ${diskon}`);
    } else if (cardID[i] === "S") {
      membership = "STANDAR";
      diskon = belanja * (20 / 100);
      //   console.log(`member anda ${membership} dan diskon ${diskon}`);
    } else if (cardID[i] === "V") {
      membership = "VIP";
      diskon = belanja * (50 / 100);
      //   console.log(`member anda ${membership} dan diskon ${diskon}`);
    }
  }

  if (membership === "PREMIUM") {
    console.log(`Halo ${nama}, sebagai member PREMIUM anda mendapatkan diskon sebesar 30% dengan total belanjaan kamu menjadi ${belanja - diskon}`);
  } else if (membership === "STANDAR") {
    console.log(`Halo ${nama}, sebagai member STANDAR anda mendapatkan diskon sebesar 20% dengan total belanjaan kamu menjadi ${belanja - diskon}`);
  } else if (membership === "VIP") {
    console.log(`Halo ${nama}, sebagai member VIP anda mendapatkan diskon sebesar 50% dengan total belanjaan kamu menjadi ${belanja - diskon}`);
  } else {
    console.log(`Halo ${nama}, Anda Bukan member jadi total belanjaan kamu menjadi ${belanja - diskon}`);
  }
}
