import readlineSync from "readline-sync";

class Kasir {
    constructor(namaToko, discount, discountDay) {
        this.namaToko = namaToko;
        this.discount = discount;
        this.discountDay - discountDay;
    }

    introduction = (namaToko, products) => {
        console.log(`=== Selamat Datang di Toko ${namaToko}`);
        products();
    }

    applyDiscount = (discountDay, products) => {
        if (discountDay == "12") {
            this.discount = 20;

            products.map((element) => {
                console.log(`Product : ${element.nama} || Harga Product : ${element.harga - (element.harga * (this.discount / 100))}`);
            })
        } else {
            return;
        }
    }

    transaction = (nameCustomer, discountDay = "0", products, nameItem, qty) => {
        if (discountDay == "12") {
            console.log("==========================================================")
            console.log("==========================================================")
            console.log("Kamu Memebeli pada tanggal 12 maka mendapatkan diskon 12%")
            if (nameItem == products[0].nama) {
                console.log(`${nameCustomer} Membeli produk ${nameItem} sebanyak ${qty} dengan harga ${(products[0].harga - (products[0].harga * (this.discount / 100))) * qty}`)
            } else if (nameItem == products[1].nama) {
                console.log(`${nameCustomer} Membeli produk ${nameItem} sebanyak ${qty} dengan harga ${(products[1].harga - (products[1].harga * (this.discount / 100))) * qty}`)
            } else if (nameItem == products[2].nama) {
                console.log(`${nameCustomer} Membeli produk ${nameItem} sebanyak ${qty} dengan harga ${(products[2].harga - (products[2].harga * (this.discount / 100))) * qty}`)
            } else {
                console.log('Produk Tidak Ada');
            }
        } else {
            console.log("==========================================================")
            console.log("==========================================================")
            console.log("Tidak Ada Diskon");
            if (nameItem == products[0].nama) {
                console.log(`${nameCustomer} Membeli produk ${nameItem} sebanyak ${qty} dengan harga ${products[0].harga * qty}`)
            } else if (nameItem == products[1].nama) {
                console.log(`${nameCustomer} Membeli produk ${nameItem} sebanyak ${qty} dengan harga ${products[0].harga * qty}`)
            } else if (nameItem == products[2].nama) {
                console.log(`${nameCustomer} Membeli produk ${nameItem} sebanyak ${qty} dengan harga ${products[0].harga * qty}`)
            } else {
                console.log('Produk Tidak Ada');
            }
        }
    }

}


const containsProduct = (isDiscount = false) => {
    const produk = [
        { nama: "Laptop", harga: 2000000 },
        { nama: "PC", harga: 500000 },
        { nama: "Harddisk", harga: 1000000 },
    ];

    if (isDiscount) {
        console.log("==============================================================")
        console.log("Jika Kamu Membeli pada Tanggal 12 maka mendapatkan Diskon 12%");
        return produk;
    } else {
        return produk.map((element) => {
            console.log(`Product : ${element.nama} || Harga Product : ${element.harga}`);
        })
    }
}

let kasir = new Kasir();
kasir.introduction("Sumber Elektronik", containsProduct);
let productsData = containsProduct(true)
kasir.applyDiscount("12", productsData);
const name = readlineSync.question("masukan nama kamu: ");
const date = readlineSync.question("Tanggal Sekarang?: ");
const produk = readlineSync.question("Kamu Membeli Produk?(Laptop, PC, Harddisk): ");
const quantity = readlineSync.questionInt("Berapa Banyak Memesan: ");
kasir.transaction(name, date, productsData, produk, quantity); 