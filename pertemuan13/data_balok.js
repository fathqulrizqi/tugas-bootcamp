function hitung(){
    // select jari jari 
    const jariJari = document.getElementById('jariJari').value;

    // buat object lingkaran 
    const lingkaran1 = new Lingkaran(jariJari);

    // hitung luas dan keliling
    const luas = lingkaran1.hitungLuas();
    const keliling = lingkaran1.hitungKeliling();

    // tampilkan ke <p>
    document.getElementById('hasil').textContent = `Luas: ${luas} cm, Keliling: ${keliling} cm`
}

