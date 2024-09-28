type IdentitasPrajurit = {namaPahlawana:string, umur:number, status:boolean, point:number}
type SumberDaya = { nama:string, jumlah:number}

const identitas:IdentitasPrajurit[] = [
    {namaPahlawana:'Arion', umur:30, status:true, point:75 }
]

const Perlengkapan:SumberDaya[] = [
    {nama: "Emas", jumlah:5000 },
    {nama: "Makanan", jumlah:120},
    {nama: "Prajurit", jumlah: 200},
]

function PetualanganPrajurit(nama: string, jumlahBarang: number) {
    const dataSumberDaya = Perlengkapan.find(nilai => nilai.nama === nama);
    if (dataSumberDaya) {
        dataSumberDaya.jumlah += jumlahBarang;
        console.log(`${dataSumberDaya.nama} ditambahkan sebanyak ${jumlahBarang}.`);
        console.log(`Jumlah ${dataSumberDaya.nama} : ${dataSumberDaya.jumlah}`)
        return dataSumberDaya.jumlah
    } else {
        console.log(`Ups !!! Data ${nama} Tidak Di Temukan `);
    }
}


let pointKesehatan:number = 100
function MisiPenyembuhan(jumlahPrajurit: number, point: number) {

    const penguranganPoint = jumlahPrajurit * point;

    let DataPrajuritTerluka = pointKesehatan - penguranganPoint; 

    if (DataPrajuritTerluka > 0) {
        console.log('Bisa Bertarung')
    } else {
        console.log(`Tidak Bisa Bertarung`);
    }
}

function RangkumanMisi(dataEmas:number) {

    const namaPahlawan = identitas[0].namaPahlawana;
    const Point = identitas[0].point

    console.log('--------- Rangkuman Data --------')
    console.log(`Nama Pahlawan : ${namaPahlawan}`)
    console.log(`Point : ${Point} xp`)
    console.log(`Emas  : ${dataEmas}`)
}

const dataSumberDaya = PetualanganPrajurit("Emas", 1500);
MisiPenyembuhan(1,5)
if(dataSumberDaya !== undefined) {
    RangkumanMisi(dataSumberDaya)
}
