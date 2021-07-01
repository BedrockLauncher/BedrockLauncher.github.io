function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncBannerSwitch(bannerSwitcher, bannerDir, banners, bannerIndex) {
    bannerSwitcher.classList.add("fade-out-black");
    await sleep(200);
    bannerSwitcher.style.backgroundImage = `url(${bannerDir}${banners[bannerIndex % banners.length]})`;
    await sleep(200);
    bannerSwitcher.classList.remove("fade-out-black");
}

window.addEventListener("load", async function () {
    var bannerDir = "/assets/images/banners/";
    var bannerSwitchers = document.getElementsByClassName("banner-swapping");
    var elementIndex = 0;
    while (elementIndex < bannerSwitchers.length) {
        var bannerSwitcher = bannerSwitchers[elementIndex];
        fetch(`${bannerDir}manifest.json`)
            .then(response => response.json())
            .then(banners => {
                var bannerIndex = Math.floor(Math.random() * (banners.length + 1));

                var cachedImage = new Image();
                cachedImage.src = `${bannerDir}${banners[bannerIndex % banners.length]}`;

                setInterval(function () {
                    asyncBannerSwitch(bannerSwitcher, bannerDir, banners, bannerIndex);

                    bannerIndex++;

                    cachedImage = new Image();
                    cachedImage.src = `${bannerDir}${banners[bannerIndex % banners.length]}`;
                }, 5000);
            });

        elementIndex++;
    }
})
