import Mahasiswa from "./mahasiswa";
import Nilai from "./nilai";

class NilaiMahasiswa {
    // constructor (id, nim, nama, jenis_kelamin, ipk, mata_kuliah, nilai) 
    constructor (...rest) {
        this.mahasiswa = new Mahasiswa (...rest);
        this.nilai = new Nilai (rest[5], rest[6]);
    }
}

export default NilaiMahasiswa;