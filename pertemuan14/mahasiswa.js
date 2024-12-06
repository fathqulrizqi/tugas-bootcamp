class Mahasiswa {
    constructor(nim, nama, jenis_kelamin, ipk){
        this.nim = nim;
        this.nama = nama;
        this.jenis_kelamin = jenis_kelamin;
        this.ipk = ipk;
    }

    
    predikat(){
        if (this.ipk > 0 && this.ipk < 2.00){
            return `Cukup`;
        }
        else if (this.ipk >= 2.00 && this.ipk < 3.00) {
            return `Baik`;
        }
        else if (this.ipk >= 3.00 && this.ipk < 3.75) {
            return `Memuaskan`;
        }
        else if (this.ipk >= 3.75 && this.ipk <=4) {
            return `CumLaude`;
        }
        else {
            return `Tidak Valid!`;
        }
    }
}

export default Mahasiswa;