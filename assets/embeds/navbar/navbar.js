function windowOnload() {
    if (window.parent) {
        var selectedMainUrlClass = "main-link-selected";
        var paths = window.parent.location.pathname.split("/");
        var mainLinks = document.getElementsByClassName("clickable-main-link");
        var i = 0;
        while (i != mainLinks.length) {
            var targetUrl = mainLinks[i].attributes.getNamedItem("href").value.split("/");
            if (targetUrl[1] == paths[1]) {
                mainLinks[i].classList.add(selectedMainUrlClass);
                break;
            }

            i++;
        }
    }
}

window.onload = windowOnload;