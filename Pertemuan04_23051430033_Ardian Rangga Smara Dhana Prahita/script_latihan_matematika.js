let gajiPokok = 10000000
let jamLembur = 6

let upahLemburPerJam = 1.5*gajiPokok/173

let totalGaji = upahLemburPerJam*jamLembur+gajiPokok

console.log("Gaji Pokok: Rp"+gajiPokok);
console.log("Jam Lembur: "+jamLembur+" jam");
console.log("Upah Lembur Per Jam: Rp"+upahLemburPerJam.toFixed(2)+"/jam");
console.log("Total Gaji: Rp"+totalGaji.toFixed(2))