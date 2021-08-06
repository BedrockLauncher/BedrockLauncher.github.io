var embed, background, transitionDuration, expandedHamburgur, logoImg, hamburgur, hamburgurIcon, search, expandedSearch, searchIcon;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function darkenAndExpand() {
    background.classList.add("visible");
    embed.classList.add("expanded");
    logoImg.classList.remove("shrink");
}

async function unDarkenAndShrink() {
    background.classList.remove("visible");
    logoImg.classList.add("shrink");

    await sleep(transitionDuration * 1000 / 2);
    embed.classList.remove("expanded");
}

async function expandHamburgur() {
    shrinkSearch();
    
    expandedHamburgur.classList.add("expanded");
    hamburgurIcon.classList.add("expanded");

    await sleep(transitionDuration * 1000 / 2);
    hamburgurIcon.src = "/assets/images/icons/cancel.svg";
}

async function shrinkHamburgur() {
    expandedHamburgur.classList.remove("expanded");
    hamburgurIcon.classList.remove("expanded");

    await sleep(transitionDuration * 1000 / 2);
    hamburgurIcon.src = "/assets/images/icons/hamburger.svg";
}

async function expandSearch() {
    shrinkHamburgur();
    
    expandedSearch.classList.add("expanded");
    searchIcon.classList.add("expanded");

    await sleep(transitionDuration * 1000 / 2);
    searchIcon.src = "/assets/images/icons/cancel.svg";
}

async function shrinkSearch() {
    expandedSearch.classList.remove("expanded");
    searchIcon.classList.remove("expanded");

    await sleep(transitionDuration * 1000 / 2);
    searchIcon.src = "/assets/images/icons/search.svg";
}

async function fetchQueryResults(query) {
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
    expandedSearch = document.getElementById("expanded-search");
    logoImg = document.getElementById("logo-img");
    search = document.getElementById("search");
    searchIcon = document.getElementById("search-icon");

    hamburgur.addEventListener("click", function () {
        if (expandedHamburgur.classList.contains("expanded")) {
            unDarkenAndShrink();
            shrinkHamburgur();
        } else {
            darkenAndExpand();
            expandHamburgur();
        }
    })
    search.addEventListener("click", function () {
        if (expandedSearch.classList.contains("expanded")) {
            unDarkenAndShrink();
            shrinkSearch();
        } else {
            darkenAndExpand();
            expandSearch();
        }
    })
    background.addEventListener("click", function () {
        unDarkenAndShrink();
        shrinkHamburgur();
        shrinkSearch();
    });
})
