var fetchablePaths = [
    "https://api.github.com/repos/BedrockLauncher/BedrockLauncher/releases",
    "https://api.github.com/repos/BedrockLauncher/BedrockLauncher-Beta/releases"
];
var fetches = [];

function commitSearch(searchStr) {
    var results = document.getElementById("results");

    // clear stuff from before
    while (results.firstChild) {
        results.removeChild(results.lastChild);
    }

    results.classList.add("centerize");

    var loader = document.createElement("video");
    loader.src = "/assets/images/icons/loading_launcher.mp4";
    loader.setAttribute("autoplay", "");
    loader.setAttribute("loop", "");
    loader.classList.add("loader-generic-new");
    results.appendChild(loader);

    // perform search after the loading screen has started
    var fuzzySearch = new Fuse(fetches, {
        keys: ["searchable"],
        ignoreLocation: true
    });
    var fuzzySearchResult = fuzzySearch.search(searchStr);
    console.log(fuzzySearchResult);

    setTimeout(function () {
        results.classList.remove("centerize");
        while (results.firstChild) {
            results.removeChild(results.lastChild);
        }

        if (fuzzySearchResult.length > 0) {
            var searchIndex = 0;
            while (searchIndex < fuzzySearchResult.length) {
                var searchedStrIndex = fuzzySearchResult[searchIndex].refIndex;
                var searchedElement = fetches[searchedStrIndex].element;

                results.appendChild(searchedElement);
                results.appendChild(document.createElement("br"));

                searchIndex++;
            }
        } else {
            var p = document.createElement("p");
            p.innerText = "No results! Change the wording of your search or try looking in the FAQ categories manually."
            p.classList.add("center");
            results.appendChild(p);
        }
    }, (Math.random() * 1000) + 1000)
}

window.addEventListener("load", async function () {
    var fetchIndex = 0;
    while (fetchIndex < fetchablePaths.length) {
        // emulate fetch to make this old code work

        var toFetchUrl = fetchablePaths[fetchIndex];
        var releasesFetch = await fetch(toFetchUrl);
        var releasesJson = await releasesFetch.json();

        for (var releaseIndex in releasesJson) {
            var object = {};

            var release = releasesJson[releaseIndex];
            var showDown = new showdown.Converter();

            var bodyMD = release.body;
            var title = release.name;

            var bodyHTML = showDown.makeHtml(bodyMD);

            var detailsElement = document.createElement("details");
            var summaryElement = document.createElement("summary");
            var bodyContainer = document.createElement("div");

            summaryElement.innerText = title;

            bodyContainer.innerHTML = bodyHTML;

            detailsElement.classList.add("hidden-ans");
            detailsElement.appendChild(summaryElement);
            detailsElement.appendChild(bodyContainer);

            object.element = detailsElement;
            object.searchable = `${title} ${bodyMD}`;

            fetches.push(object);
        }

        fetchIndex++;
    }

    var searchBox = document.getElementById("search-box");
    var searchButton = document.getElementById("search-button");

    searchBox.style.display = "block";

    function attemptSearch(event) {
        if (searchBox.value.trim().length > 0) {
            commitSearch(searchBox.value);
        }
    }

    searchButton.addEventListener("click", attemptSearch);
    searchBox.addEventListener("keyup", function (event) {
        if (event.keyCode == 13) {
            attemptSearch();
        }
    });
})
