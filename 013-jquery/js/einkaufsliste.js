let myList = [];

// Wenn das Cookie für die "product-list" existiert, dann befülle das Array mit den Produkten aus dem Cookie
// if (typeof Cookies.get("product_list") !== "undefined") {
//     /*
//         die Liste kommt als Komma-separierter String angeliefert,
//         daher muss diese wieder in ein Array konvertiert werden
//     */
//     myList = Cookies.get("product_list").split(",");
// }
if (localStorage.getItem("product_list") != null) {
    myList = JSON.parse(localStorage.getItem("product_list"));
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
    let value = $("#new-product").val();

    let filteredList = myList.filter(function (article) {
        return article.toLowerCase().includes(value.toLowerCase());
    });

    if (!filteredList.length) {
        myList.push(value);
        Cookies.set("product_list", myList, { expires: 365 });
        // Alternative Speichermöglichkeit für Daten in der Local Storage des Browsers
        localStorage.setItem("product_list", JSON.stringify(myList));

        prependNewProduct(myList.length - 1, myList[myList.length - 1]);
    } else {
        $("#new-product").val("");
    }
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

const setCheckedListItems = function () {
    const cookie = Cookies.get("checked_items");
    if (typeof cookie != "undefined" && cookie != "") {
        let checkedItems = cookie.split(",");
        $(checkedItems).each(function (index, value) {
            $("#product-" + value).prop("checked", true);
        });
    }
};
setCheckedListItems();

const showFilteredList = function (list) {
    $("#product-list").empty();

    $(list).each(prependNewProduct);
};

const filterList = function () {
    let value = $(this).val().toLowerCase();

    let filteredList = myList.filter(function (article) {
        return article.toLowerCase().includes(value);
    });

    showFilteredList(filteredList);
};

$("#new-product").on("keyup", filterList);
$("#add-product").on("click", filterList);

// lesen der aktuell gechecked inputs
// bauen des Arrays mit der Liste aller product-ids der Elemente die gecheckt sind
// Speichern in Cookie
$("#product-list input").change(function () {
    let listOfCheckedInputs = [];

    let checkedInputs = $("input:checked");
    checkedInputs.each(function () {
        let productId = $(this).closest("[data-product-id]").data("product-id");
        // console.log(productId);
        listOfCheckedInputs.push(productId);
        console.log(listOfCheckedInputs);
    });

    Cookies.set("checked_items", listOfCheckedInputs.join(","), {
        expires: 365,
    });
});

// Cookie auslesen
// Array mit Schleife durchgehen
// Listenelemente .prop() aktualisieren
