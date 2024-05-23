class Students {

    constructor(name, score) {
        this.name = name;
        this.score = score
        this.grade = this.gradeStudents(score);
    }


    gradeStudents(score) {
        if (score > 90) {
            return "A";
        } else if (score > 70 && score < 90) {
            return "B";
        } else if (score < 70 && score >= 50) {
            return "C"
        }
        else {
            return 'Tidak Lulus'
        }
    }
};

const students = [
    new Students("anya", 70),
    new Students("indi", 50),
    new Students("zulham", 65),
    new Students("witan", 75),
    new Students("arhan", 77),
    new Students("roger", 85),
    new Students("albert", 98),
];

console.log('Siswa Lulus')
students.forEach(student => {
    if (student.grade === "A" || student.grade === "B") {
        console.log(`${student.name} dinyatakan lulus dengan grade ${student.grade}`)
    }
});