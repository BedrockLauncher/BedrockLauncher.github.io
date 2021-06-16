function indexWindowsOnload() {
    var bannerDir = "/assets/images/banners/";
    var bannerSwitchers = document.getElementsByClassName("banner-swapping");
    var elementIndex = 0;
    while (elementIndex < bannerSwitchers.length) {
        var bannerSwitcher = bannerSwitchers[elementIndex];
        fetch(`${bannerDir}manifest.json`)
            .then(response => response.json())
            .then(banners => {
                var bannerIndex = Math.floor(Math.random() * (banners.length + 1));

                setInterval(function () {
                    bannerSwitcher.style.backgroundImage = `url(${bannerDir}${banners[bannerIndex % banners.length]})`;

                    // cache for future
                    var cachedImage = new Image();
                    cachedImage.src = `${bannerDir}${banners[bannerIndex % banners.length]}`;
                    
                    bannerIndex++;
                }, 5000);
            });

        elementIndex++;
    }
    
    var noJsHiders = document.querySelectorAll(".no-js-hide");
    console.log(noJsHiders);
    var noJsHidersIndex = 0;
    while (noJsHidersIndex < noJsHiders.length) {
        noJsHiders[noJsHidersIndex].classList.remove("no-js-hide");
        noJsHidersIndex++;
    }
}
if (window.onloadArray) {
    window.onloadArray.push(indexWindowsOnload);
} else {
    window.onloadArray = [indexWindowsOnload];
}

window.onload = function () {
    for (var func in onloadArray) {
        try {
            onloadArray[func]();
        } catch (error) {
            console.warn(`failed ${func} with:\n\n${error}`)
        }
    }
}