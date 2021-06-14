function indexWindowsOnload() {
    var bannerSwitcher = document.getElementById("banner-switcher");
    var bannerDir = "/assets/images/banners/"
    fetch(`${bannerDir}manifest.json`)
        .then(response => response.json())
        .then(banners => {
            var bannerIndex = 0;

            setInterval(function () {
                bannerSwitcher.style.backgroundImage = `url(${bannerDir}${banners[bannerIndex % banners.length]})`;

                bannerIndex++;
            }, 5000);
        });
}

window.onload = indexWindowsOnload;
