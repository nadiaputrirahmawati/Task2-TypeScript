// 1. Type data string
const nama: string = "Nadia Putri Rahmawati";

// 2. String Literal 
const Nama_lengkap: string = `Hallo Nama Aku ${nama}`;

// 3. Type data number (Heksa)
const nilai_hexa: number = 0x1a;

// 4. Type data Int 
const nilai:number = 30

// 5. Type data Boolean
const nilai_boolean: boolean = true;
const nilai2: boolean = false;

// 6. Type data Symbol
let simbol1: symbol = Symbol("unique");
let simbol2: symbol = Symbol("unique");

// 7. Type data undifined
const nilai_und = undefined;

// 8. Type data null
const kosong = null;

// 9. Type data any
const profile: any = { name: "nadia", usia: 10 };

// 10. Penggunaan Fungsi Void
const contoh_void = (pesan:string): void => {
  console.log(pesan);
}

// 11. Penggunaan ReadOnly

let IdentitasPemilikToko: { readonly id:number, nama:string} = {id:22306289, nama:'nadia'}


// 12. Penggunaan Fungsi object
let data: object = { nama: "nadia", nim: 0o20472750331, nilai: 0x1a };

// 13. Penggunaan Fungsi Unknown
let penggunaan: unknown;

penggunaan = 10;
if (typeof penggunaan === "number") {
  console.log( `Hasil Nilai ${penggunaan + 10}`);
  console.log("Tipe penggunaan:", typeof penggunaan);
} else if (typeof penggunaan === "string") {
  console.log(`Nilai anda string ${penggunaan}`);
  console.log("Tipe penggunaan:", typeof penggunaan);
}

// 14. Penggunaan Fungsi Array Number
const dataPenjualan: number[] = [300000, 600000, 500000];

// Penggunaan Fungsi Array
const dataCustomer: [string, number, boolean] = ["Toko Kencana", 30000, false];

// 15. Penggunaan Fungsi Union
const dataKaryawan: (string | number)[] = ["Kasir", 30];

// 16. Penggunaan Fungsi Enum
enum DataToko {
  Toko = "Toko Kencana",
  Customer = 10,
  JumlahBarang = " 90 Stok Barang",
}
let DataTokoPusat: (string | number)[] = [DataToko.Toko, DataToko.JumlahBarang];

// 17. Penggunaan Fungsi Nilai Tetap (literal Type)
let PenghasilanToko:
  | "Standar"
  | "Meningkat"
  | "Menurun"
  | "Belum Mendapatkan Penghasilan" = "Belum Mendapatkan Penghasilan";

// 18. Penggunaan Custom Nilai
type KasirToko = { id: number; nama: string };
let Identitas: KasirToko[] = [
  { id: 987, nama: "Mawar" },
  { id: 234, nama: "Agus" },
];

// 19. Penggunaan Object Date
const JadwalBukaToko: (string | boolean | object)[] = [
    'Hari Senin', new Date(), true
];
const Jadwal = ` Jadwal Buka Toko ${JadwalBukaToko}`

// 20. Penggunaan Map
let stokBarang = new Map<string, number>([
    ["Beng Beng ", 20],    
    ["Better", 30]  
]);

// 21. Penggunaan Set => untuk menghindari duplikat data

let dataBarangToko: Set < string | number > =  new Set(); 
dataBarangToko.add('Beng - Beng')
dataBarangToko.add(20)
dataBarangToko.add('Beng - Beng')

// 22. Penggunaan Looping 

let dataRekapBulanan: (string | number)[] = ["Minggu Ke-1 ", 200000, "Minggu Ke-2", 300000, "Minggu Ke-3", 100000]
let hasilRekap: string = "Rekap Penghasilan Bulan April: \n";
for (let i: number = 0; i < dataRekapBulanan.length; i++){
    hasilRekap += `${dataRekapBulanan[i]}`;
}

// 23. Penggunaan Interface 

interface dataBarangKosong {
    nama:string;
    jumlah:number
}

const barang: dataBarangKosong = {
    nama: "minyak",
    jumlah: 10
};

// 24. Penggunaan Tuple 

const itemToko:[number, string] = [30, 'MejaKasir']

// 25. Penggunaan Assertion

let MenghitungData: number = ('nama' as string).length


console.log(nama)
console.log(Nama_lengkap);
console.log(nilai_hexa);
console.log(nilai)
console.log(nilai_boolean)
console.log(simbol1 || simbol2);
console.log(nilai_und);
console.log(kosong);
console.log(profile);
console.log(contoh_void('Contoh Penggunaan Void'))
console.log(IdentitasPemilikToko)
console.log(data);
console.log(dataPenjualan);
console.log(dataCustomer);
console.log(DataTokoPusat);
console.log(dataKaryawan);
console.log(PenghasilanToko);
console.log(Identitas);
console.log(Jadwal);
console.log(stokBarang)
console.log(dataBarangToko)
console.log(hasilRekap)
console.log(barang)
console.log(itemToko)
console.log(`Jumlah Huruf : ${MenghitungData}`)



// ================== Operasi Aritmatika ==================

// Operasi Pertambahan
const Penjumlahan = (a:number, b:number, c:number)  => {

    const data = a + b + c
    return data
}

const Pengurangan = (a:number, b:number) => {

    const data = a - b
    return data
}

const Perkalian = (a:number, b:number, c:number) => {
    
    const data = a * b * c
    return data
}

const Pembagian = (a:number, b:number, c:number, d:number) => {

    const data = a / b / c / d
    return data
}


console.log('-------- Operasi Aritmatika ----------')

console.log( ` Hasil Penjumlahan : ${Penjumlahan(1,3,4)}`)
console.log( ` Hasil Penguranga  : ${Pengurangan(30,4)}`)
console.log( ` Hasil Perkalian   : ${Perkalian(1,3,4)}`)
console.log( ` Hasil Pembagian   : ${Pembagian(10,2,4,2)}`)