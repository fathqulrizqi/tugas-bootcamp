class Nilai {
    constructor(mata_kuliah, nilai){
        this.mata_kuliah = mata_kuliah;
        this.nilai = nilai;
    }

    grade(){
        const grade = this.nilai

        if (grade >= 0 && grade <= 35){
            return 'E';
        }
        else if (grade >= 36 && grade <= 55){
            return 'D';
        }
        else if (grade >=56 && grade <= 69){
            return 'C';
        }
        else if (grade >= 70 && grade <= 84){
            return 'B';
        }
        else if (grade >= 85 && grade <= 100){
            return 'A'
        }
        else {
            return 'Tidak Valid!'
        }
    }

    getHasil(){
        if (grade <= 60){
            return 'Tidak Lulus!';
        }
        else if (grade > 60){
            return 'Lulus!';
        }
        else {
            return 'Tidak Valid!';
        }
    }
}

export default Nilai;