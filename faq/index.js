var fetchablePaths = [
    "accounts",
    "data",
    "misc",
    "versions"
];
var fetches = [];

var fetchIndex = 0;
while (fetchIndex < fetchablePaths.length) {
    fetch(`/faq/${fetchablePaths[fetchIndex]}/index.html`).then(function (response) {
        return response.text();
    }).then(function (text) {
        var dummyElement = document.createElement("div");
        dummyElement.innerHTML = text;
        queryResult = dummyElement.querySelectorAll(".hidden-ans");
        var queryIndex = 0;
        while (queryIndex < queryResult.length) {
            var object = {};
            object.element = queryResult[queryIndex];
            object.searchable = queryResult[queryIndex].innerText;

            fetches = fetches.concat(object);

            queryIndex++;
        }
    });

    fetchIndex++;
}

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

window.addEventListener("load", function () {
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
