function hitungBiaya(){

let biayaBahanBaku = parseFloat(document.getElementById("bahan").value);
let biayaTenagaKerja = parseFloat(document.getElementById("tenaga").value);
let biayaOverhead = parseFloat(document.getElementById("overhead").value);
let jumlahProduksi = parseFloat(document.getElementById("produksi").value);

console.log("Biaya Bahan Baku : " + biayaBahanBaku);
console.log("Biaya Tenaga Kerja : " + biayaTenagaKerja);
console.log("Biaya Overhead : " + biayaOverhead);
console.log("Jumlah Produksi saat ini : " + jumlahProduksi);

let totalPerUnit = (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;
totalPerUnit = totalPerUnit.toFixed(2);

let hasilBox = document.getElementById("hasil");
let keterangan = "";

if (jumlahProduksi < 100) {
    keterangan = "Biaya Tinggi (Ekonomi Skala Kecil)";
    hasilBox.style.backgroundColor = "#ffb3b3";
    console.log(keterangan);
} else {
    keterangan = "Biaya Efisien";
    hasilBox.style.backgroundColor = "#b8f5c5";
    console.log(keterangan);
}

document.getElementById("hasil").innerHTML =
"Biaya Produksi per Unit: Rp " + totalPerUnit + "<br>" +
"Keterangan: " + keterangan;

}