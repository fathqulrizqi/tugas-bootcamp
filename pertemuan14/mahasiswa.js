class Mahasiswa {
    constructor(id, nim, nama, jenis_kelamin, ipk){
        this.id = id;
        this.nim = nim;
        this.nama = nama;
        this.jenis_kelamin = jenis_kelamin;
        this.ipk = ipk;
    }

    
    predikat(){
        const ipeka = this.ipk

        if (ipeka > 0 && ipeka < 2.00){
            return `Cukup`;
        }
        else if (ipeka >= 2.00 && ipeka < 3.00) {
            return `Baik`;
        }
        else if (ipeka >= 3.00 && ipeka < 3.75) {
            return `Memuaskan`;
        }
        else if (ipeka >= 3.75 && ipeka <=4) {
            return `CumLaude`;
        }
        else {
            return `Tidak Valid!`;
        }
    }
}

export default Mahasiswa;