var embed, background, transitionDuration, expandedHamburgur, logoImg, hamburgur, hamburgurIcon, search, expandedSearch, searchIcon, results, searchBox, actualSearchButton;

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

async function fetchQueryResults() {
    var query = searchBox.value.trim();

    if (query.length == 0) return;

    var key = "AIzaSyDao5Lwp0lQM9VF8OVf3zzSR92M5U_XLPA";
    var cx = "5f283ba92be0b61e1";

    var fetchResult = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}`);
    var fetchJson = await fetchResult.json();

    if (fetchJson.error) {
        if (confirm("Daily search limit has been exceeded, redirect to default search page?")) {
            open(`/search/?q=${query}`, "_blank");
        }

        return;
    };

    var resultsJson = fetchJson.items;

    results.innerHTML = "";

    if (resultsJson) {
        for (resultIndex in resultsJson) {
            var result = resultsJson[resultIndex];

            var resultElement = document.createElement("div");
            var hr = document.createElement("hr");
            var resultTitle = document.createElement("p");
            var resultTitleLink = document.createElement("a");
            var resultText = document.createElement("p");

            resultElement.classList.add("result");
            resultTitle.classList.add("result-title");
            resultText.classList.add("result-text");

            resultTitleLink.href = result.link;
            resultTitleLink.innerText = result.title;
            resultTitleLink.target = "_parent";
            resultText.innerText = result.snippet;

            resultTitle.appendChild(resultTitleLink);
            resultElement.appendChild(resultTitle);
            resultElement.appendChild(resultText);

            results.appendChild(resultElement);
            results.appendChild(hr);
        }
    } else {
        var p = document.createElement("p");
        var p2 = document.createElement("p");

        p.classList.add("center");
        p.innerHTML = `No results found for <b>${query}</b>.`
        p2.classList.add("center");
        p2.innerHTML = "<i>Try rewording your search, or correcting your spelling.</i>"

        results.appendChild(p);
        results.appendChild(p2);
    }
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
    results = document.getElementById("results");
    searchBox = document.getElementById("search-box");
    actualSearchButton = document.getElementById("actual-search-button");

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

    searchBox.addEventListener("keyup", function (event) {
        if (event.keyCode == 13) fetchQueryResults();
    })
    actualSearchButton.addEventListener("click", fetchQueryResults)
})
