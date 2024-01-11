let myInterval = window.setInterval(function () {
    console.log("check");

    const ticketSaleStart = new Date("2024-01-11T20:36:00");
    const now = new Date();

    console.log(now >= ticketSaleStart);
    console.log(new Date().getSeconds());

    if (now >= ticketSaleStart) {
        $("#tickets").slideDown();
        clearInterval(myInterval);
    } else {
        $("#tickets").slideUp();
    }
}, 1000);
