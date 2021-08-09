window.addEventListener("load", function () {
    var copyright = document.getElementById("copyright");
    
    copyright.innerText = `CarJem ©${(new Date()).getFullYear()}`
})