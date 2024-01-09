const PRODUCT_DATA = {
    id: 234,
    artNo: 9383772,
    title: "Ed Hardy Mustang Feaver Nature",
    variants: {
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["black", "navy", "olive", "brown"],
    },
    price: 79.9,
    productImage: "img/pexels-hallux-makenzo-743715.jpg",
    description:
        "Hier wird der Artikel in kurzen Worten beschrieben und die Einzigartikeit aufgezeigt.",
};

let alter = 50;

document.querySelector("#art-no").innerHTML = PRODUCT_DATA.artNo;
document.querySelector("#prod-title").innerHTML = PRODUCT_DATA.title;
document.querySelector("#prod-price").innerHTML = PRODUCT_DATA.price
    .toFixed(2)
    .toString()
    .replace(".", ",");

// PRODUCT_DATA.price.toFixed(2); // 79.9 => 79.90
// PRODUCT_DATA.price.toString(); // 79.90 => "79.90"
// PRODUCT_DATA.price.replace(".", ","); // "79.90" => "79,90"

console.log(PRODUCT_DATA.price);

let htmlOutput = "";
PRODUCT_DATA.variants.sizes.forEach((size) => {
    htmlOutput += `<option value="${size}">${size}</option>`;
});
document.querySelector("#prod-size").innerHTML = htmlOutput;

htmlOutput = "";
PRODUCT_DATA.variants.colors.forEach((color) => {
    htmlOutput += `<option value="${color}">${color}</option>`;
});
document.querySelector("#prod-color").innerHTML = htmlOutput;
