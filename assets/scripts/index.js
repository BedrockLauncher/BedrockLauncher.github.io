window.addEventListener("load", function () {
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
                    
                    var cachedImage = new Image();
                    cachedImage.src = `${bannerDir}${banners[bannerIndex % banners.length]}`;
                }, 5000);
            });

        elementIndex++;
    }

    var noJsHiders = document.querySelectorAll(".no-js-hide");
    var noJsHidersIndex = 0;
    while (noJsHidersIndex < noJsHiders.length) {
        noJsHiders[noJsHidersIndex].classList.remove("no-js-hide");
        noJsHidersIndex++;
    }

    var sideScrollers = document.getElementsByClassName("side-scroll");
    var sideScrollersIndex = 0;
    while (sideScrollersIndex < sideScrollers.length) {
        var sideScroller = sideScrollers[sideScrollersIndex];
        var sideScrollingElements = sideScroller.getElementsByClassName("side-scroll-element");
        var scrollerIndex = Number(sideScroller.getAttribute("scroll-index")) || 0;
        
        // sideScroller.style.width = `${sideScrollingElements.length * 100}%`;
        
        var rightButton = document.createElement("button");
        var leftButton = document.createElement("button");
        rightButton.classList.add("generic");
        leftButton.classList.add("generic");
        rightButton.classList.add("right-button");
        leftButton.classList.add("left-button");
        
        function moveUnits (units, maintainWholeness) {
            const maxUnits = sideScrollingElements.length - 1;
            const minUnits = 0;
            
            // not using default parameters because why not
            
            scrollerIndex += units;
            
            if (maintainWholeness == true || maintainWholeness == undefined) {
                scrollerIndex = Math.round(scrollerIndex);
            }
            
            scrollerIndex = Math.max(scrollerIndex, minUnits);
            scrollerIndex = Math.min(scrollerIndex, maxUnits);
            
            var toMoveElementIndex = 0;
            while (toMoveElementIndex < sideScrollingElements.length) {
                var currentElementToMove = sideScrollingElements[toMoveElementIndex];
                currentElementToMove.style.transform =  `translateX(${scrollerIndex * -100}%)`;
                
                toMoveElementIndex++;
            }
            
            if (scrollerIndex <= minUnits) {
                leftButton.classList.add("disabled");
            } else {
                leftButton.classList.remove("disabled");
            }
            
            if (scrollerIndex >= maxUnits) {
                rightButton.classList.add("disabled");
            } else {
                rightButton.classList.remove("disabled");
            }
        }
       
        var rightImage = document.createElement("img");
        rightImage.src = "/assets/images/icons/right_arrow.svg";
        var leftImage = document.createElement("img");
        leftImage.src = "/assets/images/icons/left_arrow.svg";
        
        rightButton.appendChild(rightImage);
        leftButton.appendChild(leftImage);
        
        rightButton.addEventListener("click", function () {
            moveUnits(1, false);
        });
        leftButton.addEventListener("click", function () {
            moveUnits(-1, false);
        });
       
        
        moveUnits(0);
        
        sideScroller.parentElement.insertBefore(leftButton, sideScroller.parentElement.childNodes[0]);
        sideScroller.parentElement.appendChild(rightButton);
        
        sideScrollersIndex++;
    }
});
/*
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
*/