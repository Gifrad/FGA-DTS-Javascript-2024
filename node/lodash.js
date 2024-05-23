import lodash from "lodash";
import readlineSync from "readline-sync";

const print = console.log;

class Sum {
    constructor(arrayNumber) {
        this.arrayNumber = arrayNumber
    }
}

const myNumber = new Sum();
print("Penambahan dua angka")
const ankga1 = readlineSync.questionInt('Masukan angka pertama : ')
const angka2 = readlineSync.questionInt('Masukan angka kedua : ')
const number = myNumber.arrayNumber = []
number.push(ankga1)
number.push(angka2)
print(`Jumlah ${lodash.sum(number)}`);

