class Lingkaran {
    constructor(panjang, lebar, tinggi) {
        this.panjang = panjang;
        this.lebar = lebar;
        this.tinggi = tinggi;
    }

    // method / rumus 
    hitungLuas() {
        return Lingkaran.phi * this.jarijari * this.jarijari;
    }
    hitungKeliling() {
        return 2 * Lingkaran.phi * this.jarijari;
    }
    hitungVolume() {
        return 2 * Lingkaran.phi * this.jarijari;
    }
}

// Luas permukaan: Luas permukaan balok adalah 2 x ((panjang x lebar) + (panjang x tinggi) + (lebar x tinggi))
// Keliling: Keliling balok adalah 4 x (panjang + lebar + tinggi)
// Volume: Volume balok adalah panjang x lebar x tinggi 