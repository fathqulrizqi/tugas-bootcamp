import Mahasiswa from "./mahasiswa";
import Nilai from "./nilai";

class NilaiMahasiswa {
    constructor (id, nim, nama, jenis_kelamin, ipk, mata_kuliah, nilai) {
        this.id = id;
        this.nim = nim;
        this.nama = nama;
        this.jenis_kelamin = jenis_kelamin;
        this.ipk = ipk;
        this.mata_kuliah = mata_kuliah;
        this.nilai = nilai;
    }
}

export default NilaiMahasiswa;