var embed, background, transitionDuration, expandedHamburgur, logoImg, hamburgur, hamburgurIcon, search;

var isExpanded = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function expand() {
    background.classList.add("visible");
    expandedHamburgur.classList.add("expanded");
    logoImg.classList.remove("shrink");
    hamburgurIcon.classList.add("expanded");
    embed.classList.add("expanded");

    await sleep(transitionDuration * 1000 / 2);
    hamburgurIcon.src = "/assets/images/icons/cancel.svg";

    isExpanded = true;
}

async function shrink() {
    background.classList.remove("visible");
    expandedHamburgur.classList.remove("expanded");
    logoImg.classList.add("shrink");
    hamburgurIcon.classList.remove("expanded");

    await sleep(transitionDuration * 1000 / 2);
    hamburgurIcon.src = "/assets/images/icons/hamburger.svg";
    embed.classList.remove("expanded");

    isExpanded = false;
}

async function fetchQueryResults (query) {
    var key = "AIzaSyDao5Lwp0lQM9VF8OVf3zzSR92M5U_XLPA";
    var cx = "5f283ba92be0b61e1";
    
    var fetchResult = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}`);
    var fetchJson = await fetchResult.json();
    
    return fetchJson.items;
}

window.addEventListener("load", async function () {
    var computedStyle = getComputedStyle(document.documentElement)
    var transitionDurationString = computedStyle.getPropertyValue("--transition-duration-general");
    transitionDuration = Number(transitionDurationString.slice(0, transitionDurationString.length - 1));

    hamburgur = document.getElementById("hamburger");
    hamburgurIcon = document.getElementById("hamburger-icon");
    background = document.getElementById("background");
    embed = parent.window.document.getElementById("nav-bar");
    expandedHamburgur = document.getElementById("expanded-hamburgur");
    logoImg = document.getElementById("logo-img");
    search = document.getElementById("search");

    hamburgur.addEventListener("click", function () {
        if (isExpanded) {
            shrink();
        } else {
            expand();
        }
    })
    background.addEventListener("click", shrink);
})
