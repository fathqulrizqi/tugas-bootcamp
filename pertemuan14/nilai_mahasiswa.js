class NilaiMahasiswa {
    // constructor (nim, nama, jenis_kelamin, ipk, mata_kuliah, nilai) 
    constructor (...rest) {
        this.mahasiswa = new Mahasiswa (...rest);
        this.nilai = new Nilai (rest[4], rest[5]);
    }
}

export default NilaiMahasiswa