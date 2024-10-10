function kalkulator(angka1, angka2, operator) {
    let hasil;

    switch (operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        default:
            return "Operator tidak benar atau tidak ditemukan! Silahkan dicoba lagi";

    }

    return `Hasil dari ${angka1} ${operator} ${angka2} adalah: ${hasil}`;
}

let angka1 = 20;
let angka2 = 5;
let operator = '/';

console.log(kalkulator(angka1, angka2, operator));