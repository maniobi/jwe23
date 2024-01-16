let myList = ["brot", "senf", "ketchup"];

// Wenn das Cookie für die "product-list" existiert, dann befülle das Array mit den Produkten aus dem Cookie
if (typeof Cookies.get("product_list") !== "undefined") {
    /* 
        die Liste kommt als Komma-separierter String angeliefert, 
        daher muss diese wieder in ein Array konvertiert werden 
    */
    myList = Cookies.get("product_list").split(",");
}

// Vorlage für ein Listenelement
/*

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>

*/

const addNewProduct = function () {
    myList.push($("#new-product").val());
    Cookies.set("product_list", myList, { expires: 365 });
    prependNewProduct(myList.length - 1, myList[myList.length - 1]);
    $("#new-product").val("").focus();
};

$("#add-product").on("click", addNewProduct);
$("#new-product").on("keyup", function (e) {
    console.log(e.keyCode);

    // Enter wurde gedrückt
    if (e.keyCode == 13) {
        addNewProduct();
    }
});

const prependNewProduct = function (index, product) {
    $("#product-list").prepend(`
       
            <div class="form-check" data-product-id="${index}">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="${product}"
                    id="product-${index}"
                />
                <label class="form-check-label" for="product-${index}">
                    ${product}
                </label>
            </div>
       
       `);
};

const createProductList = function () {
    $(myList).each(prependNewProduct);
};
createProductList();
