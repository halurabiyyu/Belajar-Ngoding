console.log("Hello Word");
console.log("Halur Muhammad Abiyyu");

//Javascript membagi instruksi secara umum menjadi dua jenis, yaitu expression dan statement

/* Expression adalah unit kode yang dapat dievaluasi menjadi suatu nilai. */
5; //ini adalah expression
2+3; //ini juga adalah expression

/*Sementara itu, statement adalah instruksi untuk melakukan sebuah aksi tertentu.
    aksi ini bisa termasuk membuat variabel, melakukan perulangan, pengecekan kondisi, dll.*/
var yourName;
let yourAge;
const numberOfDays = 7; //ini adalah statement

/*Variabel, adalah umumnya digunakan untuk menyimpan informasi atau nilai yang akan dikelola dalam sebuah program*/
let lastName;
lastName = Abiyyu;
console.log("lastName");
//lastName adalah sebuah variabel dan 'Abiyyu' adalah nilai dari variabel tersebut

/*Beberapa aturan dalam penamaan variabel
    -Harus dimulai dengan huruf atau underscore(_).
    -Dapat terdiri dari huruf, angka, dan underscore(_) dengan berbagai kombinasi
    -Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
    -Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)*/

//const adalah statement yang tidak bisa diubah nilainya atau konstan
const name = halur;

/*Tipe Data, merupakan pengklasifikasian data berdasarkan jenisnya

    -Undefined, tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai
    -Numbers, tipe data yang merupakan angka
    -BigInt, tipe data seperti numbers tapi mencakup nilai lebih besar
    -Strings, tipe data yang merupakan sebuah teks
    -Boolean, tipe data yang hanya memiliki 2 nilai yaitu true n false
    -Null, tipe data seperti undefined
    -Symbol, tipe data yang digunakan untuk menunjukan identifier yang unik*/

let x; //undefined
let y = 10; //Numbers
let b = 11n; //BigInt
let greet = 'Hello'; //Strings
let a = true; //Boolean
let someData = null; //Null
const id = Symbol("id"); //Symbol

/*Operator
    (+)penambahan
    (-)pengurangan
    (/)pembagian
    (*)perkalian
    (%)sisa hasil bagi
    (**)perpangkatan
    (++)increment
    (--)decrement*/

/*   Operator	Fungsi
    (==)	Membandingkan kedua nilai apakah sama (tidak identik).
    (!=)	Membandingkan kedua nilai apakah tidak sama (tidak identik).
    (===)	Membandingkan kedua nilai apakah identik.
    (!==)	Membandingkan kedua nilai apakah tidak identik.
    (>)	    Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
    (>=)	Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
    (<)	    Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
    (<=)	Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.*/

/*Operator logika
    (&&)	Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
    (||)	Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).
    (!)     Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.*/

/*if/else
    Statement if akan menguji suatu kondisi. Jika kondisi bernilai true, maka blok kode di dalamnya akan dijalankan.
    Sebaliknya, jika bernilai false, maka proses yang ditentukan akan dilewatkan.*/
    let m = 50;
    if(m > 70) {
        console.log(m);
    } else {
        console.log("Nilai kurang dari 70");
    }

/*Swicth case
    Selain if, JavaScript juga mendukung switch statement untuk melakukan pengecekan banyak kondisi dengan lebih mudah dan ringkas.*/
    let language = "French";
    let greeting = null;

    switch (language) {
        case "English":
            greeting = "Good Morning!";
            break;
        case "French":
            greeting = "Bonjour!";
            break;
        case "Japanese":
            greeting = "Ohayou Gozaimasu!";
            break;
        default:
            greeting = "Selamat Pagi!";
    }
    console.log(greeting);

/*Loop
    Dari beberapa cara melakukan proses loop pada JavaScript, “for” merupakan salah satu cara yang banyak digunakan.*/
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }