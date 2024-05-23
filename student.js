const students = [
    { name: 'anya', score: 70 },
    { name: 'indi', score: 50 },
    { name: 'zulham', score: 65 },
    { name: 'witan', score: 75 },
    { name: 'arhan', score: 77 },
    { name: 'roger', score: 80 },
    { name: 'albert', score: 90 },
]

let highScore = 0;

for (let index = 0; index < students.length; index++) {
    if (students[index].score >= 70) {
        console.log(`Lulus ${students[index].name} dengan nilai ${students[index].score}`);
        if (highScore < students[index].score) {
            highScore = students[index].score;
        }
    }
}
console.log(`nilai terbesar adalah ${highScore}`);