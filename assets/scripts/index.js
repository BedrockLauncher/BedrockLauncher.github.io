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

                    bannerIndex++;
                }, 5000);
            });

        elementIndex++;
    }
}

window.onload = indexWindowsOnload;
