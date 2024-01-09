let myVariable;

myVariable = "Dienstag";

const MY_CONST = 5;

console.log(myVariable);
console.log(MY_CONST);

let myArray = ["Milch", "Zucker"];
console.log(myArray[0]);

myArray[0] = "Bier";
console.log(myArray[0]);

const MY_ARRAY2 = ["Butter", "Honig", "Brot"];
MY_ARRAY2[0] = "Senf";
MY_ARRAY2[0] = 1;
MY_ARRAY2[3] = "Majo";

let myObject = {
    name: "Manuel Obermoser",
    alter: 36,
    languages: ["Deutsch", "English", "JavaScript", "PHP", "Klingonisch"],
    greet: function () {
        window.alert("Hi!");
    },
};

console.log(myObject.name);

let myCart = [
    {
        anr: "0000123123",
        title: "Tasse",
        price: 1.5,
        amount: 25,
    },
    {
        anr: "00001231223",
        title: "Heferl",
        price: 2.5,
        amount: 13,
    },
];

console.log(myCart[0]);

const PRODUCT_DATA = {
    id: 234,
    artNo: 9383772,
    title: "Ed Hardy Mustang Feaver Nature",
    variants: {
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["black", "navy", "olive", "brown"],
    },
    price: 79.9,
    productImage: "ProductImage123.jpg",
};
