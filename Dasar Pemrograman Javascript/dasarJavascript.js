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
lastName = "abiyyu";
console.log(lastName);
//lastName adalah sebuah variabel dan 'Abiyyu' adalah nilai dari variabel tersebut

/*Beberapa aturan dalam penamaan variabel
    -Harus dimulai dengan huruf atau underscore(_).
    -Dapat terdiri dari huruf, angka, dan underscore(_) dengan berbagai kombinasi
    -Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
    -Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)*/

//const adalah statement yang tidak bisa diubah nilainya atau konstan
const name = "halur";

console.log("------------Tipe Data-------------");
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
console.log(typeof x);
console.log(typeof y);
console.log(typeof b);
console.log(typeof greet);
console.log(typeof a);
console.log(typeof someData);
console.log(id);

console.log(" ");
console.log("------------Operator-------------");
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

    console.log(" ");
    console.log("------------If/Else-------------");
/*if/else
    Statement if akan menguji suatu kondisi. Jika kondisi bernilai true, maka blok kode di dalamnya akan dijalankan.
    Sebaliknya, jika bernilai false, maka proses yang ditentukan akan dilewatkan.*/
    let m = 50;
    if(m > 70) {
        console.log(m);
    } else {
        console.log("Nilai kurang dari 70");
    }

    console.log(" ");
    console.log("------------Switch Case-------------");
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

console.log(" ");
console.log("------------Loop-------------");
/*Loop
    Dari beberapa cara melakukan proses loop pada JavaScript, “for” merupakan salah satu cara yang banyak digunakan.*/
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }

console.log(" ");
console.log("------------Object-------------");
/*Object
    Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks
    untuk menetapkan objek pada sebuah variabel menggunakan tanda kurung kurawal*/
    const usr = {};
    /*object berisi pasangan key dan value yang juga dikenal dgn property*/
    const user = {
        firstName: "Luke",
        lastName: "Skywalker", 
        age: 19, 
        isJedi: true};
    //firstName adalah key dan Luke adalah value
    console.log(user);

    const restaurant = {
        name: "Halur",
        city: "Malang",
        "Favorite Drink": "Es Teh Manis",
        "Favorite Food": "Nasi Goreng",
        isVegan: false
    };
    console.log(restaurant);
    
    const nama = {
        name: restaurant.name            
    };
    console.log(nama);
    const favoriteDrink = {
        "favorite drink": restaurant['Favorite Drink']
    };
    console.log(favoriteDrink);

console.log("");
console.log("------------Array-------------");
/*Array
    merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel.
    array juga disusun secara berurutan dan diakses menggunakan index. untuk mengakses nilai di dalam array,
    kita gunakan tanda kurung su=iku yang didalamnya berisi angka yang merupakan posisi nilai yang ingin diakses. */
    let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
    console.log(myArray[1]);

    /*untuk menambahkan data ke dalam array, bisa menggunakan metode push()*/
    myArray.push('Javascript');
    console.log(myArray);
    
    let evenNumber = [];
    for(let i = 1; i <= 100; i++) {
        if(i % 2 ==0){
            evenNumber.push(i);
        }
    }console.log(evenNumber);
    
    /*dan untuk mengeluarkan data terakhir dari array, kita bisa gunakan metode pop()*/
    myArray.pop();
    console.log(myArray);
    
    /*untuk mengeluarkan data pertama dari array, 
    bisa menggunakan shift() dan menambahkan data di awal array bisa menggunakan unshift()*/
    myArray.shift();
    myArray.unshift("Apple");
    console.log(myArray);

    /*jika ingin menghapus data dari array, bisa menggunakan delete*/
    delete myArray[1];
    console.log(myArray);
    
    /*untuk menghapus elemen,gunakan metode splice()*/
    myArray.splice(2, 1);
    console.log(myArray);

    /*Spread Operator, fitur ini digunakan untuk menyebarkan nilai array menjadi beberapa elemen.
    spread operator dituliskan dengan tiga titik(...)*/
    const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
    console.log(...favorites);

console.log(" ");
console.log("----------Destructturing Object & Array---------");

/*Destructturing Object & Array
    Merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yg lebih kecil.
    Penulisannya menggunakan kurung kurawal{}*/
    console.log(" ");
    console.log("-------Destructuring Object--------");
    const profile = { 
        firstName: "John",
        _lastName: "Doe",
        age: 18
    }

    const{firstName, _lastName, age} = profile;
    console.log(firstName, _lastName, age);

    console.log(" ");
    console.log("------Destruturing Array--------");
    /*sedangkan destruturing array menggunakan tanda kurung siku[]. perbedaan lainnya adalah berdasarkan posisi penamaan propertinya.*/
    const fav = ["Seafood", "Salad", "Nugget", "Soup"];
    const [firstFood, secondFood, thirdFood, fourthFood]=fav;
    console.log(firstFood);
    console.log(secondFood);
    console.log(thirdFood);
    console.log(fourthFood);
    
    console.log(" ");
    console.log("-------Destructuring array assignment--------");
    /*Destructuring array assignment*/
    let myFood = "Ice Cream";
    let herFood = "Noodles";
    
    [myFood, herFood] = fav;
    console.log(myFood);
    console.log(herFood);
    
    console.log(" ");
    console.log("------Swap Nilai-------");
    /*Swap nilai antara dua variabel menggunakan array destruturing assignment*/
    let s = 1;
    let z = 2;
    console.log("Sebelum Swap");
    console.log("Nilai s: " + s);
    console.log("Nilai z: " + z);

    [s, z] = [z, s]

    console.log("Setelah Swap");
    console.log("Nilai s: " + s);
    console.log("Nilai z: " + z);
    
console.log(" ");
console.log("-------Map-------");
/*Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. 
    Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, 
    dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.*/
    const myMap = new Map([
        ['1', 'a string key'],
        [1, 'a number key'],
        [true, true]
    ]);
    console.log(myMap);

    const currency  = new Map([
        [14000, 'USD'],
        [131, 'JPY'],
        [11000, 'SGD'],
        [3500, 'MYR']
    ]);
    console.log(currency);
    const priceInJpy = 5000;
    let priceInIdr = priceInJpy * currency.get("JPY");
    console.log(priceInIdr);

    /*Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). 
    Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().*/
    console.log(" ");
    console.log("-----Mendapatkan Nilai Map--------");
    const capital = new Map([
        ["Jakarta", "Indonesia"],
        ["London", "England"],
        ["Tokyo", "Japan"]
    ]);
    
    console.log(capital.size);
    console.log(capital.get("London"));
    capital.set("New Delhi", "India");
    console.log(capital.size);
    console.log(capital.get("New Delhi"));

    console.log(" ");
    console.log("-----Set-------");
    /*Set merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah 
    data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi.*/
    const numberSet = new Set([1, 4, 6, 4, 1]);
    console.log(numberSet);

    //Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi add().
    numberSet.add(5);
    numberSet.add(10);
    numberSet.add(6);
    console.log(numberSet);
    
    console.log(" ");
    console.log("------WeakMap & WeakSet-------");
    /*WeakMap merupakan varian dari Map yang mendukung garbage collection. 
    Garbage collection adalah proses di mana interpreter JavaScript mengambil kembali memori yang tidak lagi “dapat dijangkau” 
    dan tidak dapat digunakan oleh program [3]. Garbage collection di JavaScript dilakukan secara otomatis dan bukan menjadi urusan dari developer*/
    
    /*Perbedaan Map dan WeakMap
        -Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.
        -WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().
        -WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.*/
    
    console.log(" ");
    console.log("Map")
    let visitsCountMap = new Map(); // Menyimpan daftar user

    function countUser(user) {
        let count = visitsCountMap.get(user) || 0;
        visitsCountMap.set(user, count + 1);
    }

    let jonas = { name: "Jonas" };
    countUser(jonas);                // Menambahkan user "Jonas"

    jonas = null;                    // Data object "Jonas" dihapus

    // delay dibutuhkan untuk menunggu garbage collector bekerja
    /*setTimeout(function() {
        console.log(visitsCountMap);
    }, 10000)
    /*setTimeout merupakan fungsi yang digunakan untuk menunda eksekusi kode yang ada di dalamnya hingga jangka waktu yang ditetapkan.*/
    console.log(" ");
    console.log("WeakMap");
    const { inspect } = require('util');

    let visitsCountWeakMap = new WeakMap(); // Menyimpan daftar user

    function countUsr(usr) {
        let count = visitsCountWeakMap.get(usr) || 0;
        visitsCountWeakMap.set(usr, count + 1);
    }

    let halur = { name: "Halur" };
    countUsr(halur);                // Menambahkan user "Jonas"

    halur = null;                    // Data object "Jonas" dihapus

    // delay dibutuhkan untuk menunggu garbage collector bekerja
    /*setTimeout(function() {
    console.log(inspect(visitsCountWeakMap, { showHidden: true }));
    }, 10000);*/

/*Declaring Function
    Fungsi merupakan bagian penting dalam bahasa pemrograman. Fungsi dalam pemrograman juga digunakan untuk menghasilkan output berdasarkan input tertentu.
    Namun, Fungsi juga bisa digunakan sebagai blok kode atau prosedur yang dapat digunakan secara berulang.
    Fungsi dideklarasikan dengan keyword function dan nama fungsinya.*/
    function multiply(t, p) {
        return t*p;
    };

    /*Kita dapat membuat fungsi tersebut untuk menerima dan memanfaatkan parameter untuk mengubah perilaku dari fungsinya.
    Untuk menambahkan parameter pada fungsi, tambahkan variabel di dalam tanda kurung fungsi. 
    Namun, variabel tersebut tidak memerlukan keyword var, let, ataupun const. 
    Kita juga bisa menambahkan lebih dari satu parameter dengan memberikan tanda koma antar variabel parameternya.*/
    function greeting(name, language) {
        if(language === "English") {
            console.log(`Good Morning ${name}!`);
        } else if (language === "French") {
            console.log(`Bonjour ${name}!`);
        } else {
            console.log(`Selamat Pagi ${name}!`);
        }
    }
    greeting("Harry", "French");

    /*Satu hal lagi, function dapat menghasilkan output atau mengembalikan sebuah nilai. 
    Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan perhitungan matematika 
    dan hasilnya dapat kita masukkan ke dalam sebuah variabel.*/
    function multiply(a, b) {
        return a * b;
    }
    
    let result = multiply(10, 2)
    console.log(result)

    /*Rest Parameter
        Rest parameter juga dituliskan menggunakan three consecutive dots (...). 
        Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array.*/
        function sum(...numbers) {
            let result = 0;
            for (let number of numbers) {
                result += number;
            }
            return result;
        }
        
        console.log(sum(1, 2, 3, 4, 5));
    
    /*Arrow Function
        Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. 
        Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ).*/
        const sayHello = (greet) => {
            console.log(`${greet}!`)
        }
        sayHello(halo);

        /*Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal. 
        Tentunya ini akan menghemat baris kode yang kita tulis.*/
        const sayName = name => console.log(`Nama saya ${name}`);
        sayName("Leia");

    /*Variabel Scope
        Variabel yang dapat diakses dari seluruh script disebut dengan “globally scoped”, 
        sementara variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan “locally scoped”.*/
        // global variable, dapat diakses pada parent() dan child()
        const c = 'a'; 
 
        function parent() {
            // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
            const b = 'b'; 
    
            function child() {
                // local variable, dapat diakses hanya pada fungsi child().
                const o = 'c';
            }
        }

    /*Closure
        Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya
        Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.*/
        function init() {
            var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
            
            function greet() {      // Inner function, merupakan contoh closure
                console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
            }
        
            greet();
        }
        
        init();;
        /*Fungsi init() memiliki variabel lokal name dan fungsi greet(). 
        Fungsi greet() adalah inner function yang didefinisikan di dalam init() dan hanya bisa diakses dari dalam fungsi init(). 
        Perhatikan bahwa fungsi greet() tidak memiliki variabel lokal. Namun, karena inner function memiliki akses ke variabel di parent function-nya, 
        sehingga greet() dapat mengakses variabel name. Itulah yang dimaksud dengan lexical scope.*/
        function minimal(a, b){
            if(a<b){
                return a;
            }else if(a>b){
                return b;
            }else{
                return a;
            }
        };
        minimal(1, 4);
        minimal(3, 2);
        minimal(3, 3);
        
        function power(a, b){
            let total;
            total = a**b;
            return total;
        }
        power(7, 3);
        power(3, 3);
        power(4, 0.5);
