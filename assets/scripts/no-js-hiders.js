window.addEventListener("load", function () {
    var noJsHiders = document.querySelectorAll(".no-js-hide");
    var noJsHidersIndex = 0;
    while (noJsHidersIndex < noJsHiders.length) {
        noJsHiders[noJsHidersIndex].classList.remove("no-js-hide");
        noJsHidersIndex++;
    }
})