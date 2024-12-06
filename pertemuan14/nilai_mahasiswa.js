import Mahasiswa from './mahasiswa.js';
import Nilai from './nilai.js';

class nilaiMahasiswa {
    constructor (id, ...rest) {
        this.id = id;
        this.mahasiswa = new Mahasiswa (...rest);
        this.nilai = new Nilai (rest[6], rest[7]);
    }
}

export default nilaiMahasiswa;