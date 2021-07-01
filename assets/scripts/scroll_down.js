window.addEventListener("load", function () {
    var scrollDowns = document.getElementsByClassName("scroll-down");
    var scrollDownIndex = 0;
    while (scrollDownIndex < scrollDowns.length) {
        var scrollDown = scrollDowns[scrollDownIndex];
        
        scrollDown.addEventListener("click", function () {
            window.scroll(0, window.innerHeight - Number(getComputedStyle(document.documentElement).getPropertyValue("--nav-bar-height").slice(0, -2)));
        })
        
        scrollDownIndex++;
    }
})