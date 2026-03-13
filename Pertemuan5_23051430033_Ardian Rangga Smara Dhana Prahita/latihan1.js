function hitungLingkaran(jariJari){
    const phi = Math.PI;

    //Rumus keliling = 2 * r * phi
    const keliling = 2*phi*jariJari;

    //Rumus luas = phi * (r**2)
    const luas = phi*(jariJari**2)

    return {
        kelilingLingkaran : keliling.toFixed(2),
        luasLingkaran : luas.toFixed(2)
    };
}

    //output
    const r = 14;
    const hasil = hitungLingkaran(r);

    console.log("Jari - jari = " + r);
    console.log("Keliling = " + hasil.kelilingLingkaran);
    console.log("Luas = " + hasil.luasLingkaran);

