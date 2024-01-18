let myNumber = 123;
let myString = "2025-05-23";
let myArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
let myObject = {
    type: "car",
    brand: "audi",
    kw: "334",
    color: "red",
    price: "120.000,50",
};

let myObject2 = {
    type: "car",
    brand: "opel",
    kw: "90.00",
    color: "braun",
    price: "20.000,50", // 20000.50
};

console.log("Die Abbuchung erfolgt von dem Konto mit der nummer: " + myNumber);

console.log("The bill has been paid on " + myArray[3]);

console.log(
    "My car has " + myObject.kw + " and is from the brand " + myObject.brand
);

console.log(myObject.kw - myObject2.kw);

myObject.price = Number(myObject.price.replace(".", "").replace(",", "."));
myObject2.price = Number(myObject2.price.replace(".", "").replace(",", "."));

console.log(myObject.price, myObject2.price);

console.log(myObject.price - myObject2.price);

console.log(new Date(myString));

let price = "€ 1.433,08";

console.log(price.substring(2, price.length));

// remove string from price
let price2 = "7.247,00 Euro";
console.log(price2.replace("Euro", ""));

// convert csv-structured string into array
let stringOfinfo =
    "Max;Mustermann;Salzburgerstraße 55;5620;30.09.1987;+43660628373;AT";
console.log(stringOfinfo.split(";"));

// convert/parse string into array
let serverResponse = '["Monday","Tuesday","Wednesday","Thursday"]';
console.log(JSON.parse(serverResponse));

// convert/parse string into object
let serverResponse2 = '{"test": 1, "email":"mo@obinet.at", "zip": 5600}';
console.log(JSON.parse(serverResponse2));
