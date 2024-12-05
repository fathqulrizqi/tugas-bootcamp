function hitung(){
    // select input
    const width = document.getElementById('width').value;
    const length = document.getElementById('length').value;
    const height = document.getElementById('height').value;

    // buat object lingkaran 
    const balok = new Balok(width, length, height);

    // hitung luas dan keliling
    const keliling = balok.hitungKeliling();
    const luas = balok.hitungLuas();
    const volume = balok.hitungVolume();

    // tampilkan ke <p>
    document.getElementById('hasil').textContent = `Keliling: ${keliling} cm, Luas: ${luas} cm², Volume ${volume} cm³`
}

