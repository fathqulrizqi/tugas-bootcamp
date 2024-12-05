class Balok {
    constructor(panjang, lebar, tinggi) {
        this.panjang = panjang;
        this.lebar = lebar;
        this.tinggi = tinggi;
    }

    // method / rumus 
    hitungLuas() {
        return 2 * (this.panjang * this.lebar) + (this.panjang * this.tinggi) + (this.lebar * this.tinggi);
    }
    hitungKeliling() {
        return 4 * (this.panjang + this.lebar + this.tinggi);
    }
    hitungVolume() {
        return this.panjang * this.lebar * this.tinggi;
    }
}

// Luas permukaan: Luas permukaan balok adalah 2 x ((panjang x lebar) + (panjang x tinggi) + (lebar x tinggi))
// Keliling: Keliling balok adalah 4 x (panjang + lebar + tinggi)
// Volume: Volume balok adalah panjang x lebar x tinggi 