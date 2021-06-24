function splitAndSpit(str) {
    return str.split("\n").join(" ").split(" ").filter(function (el) {
        return el != "";
    })
}

function search(searchStr, array) {
    return array.filter(function (value) {
        return value.toLowerCase().indexOf(searchStr.toLowerCase()) >= 0;
    });
}

var toFetch = [
    "accounts",
    "data",
    "misc",
    "versions"
];
var fetches = [];

var fetchIndex = 0;
while (fetchIndex < toFetch.length) {
    fetch(`/faq/${toFetch[fetchIndex]}/index.html`).then(function (response) {
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

    var searchIndex = 0;
    while (searchIndex < fetches.length) {
        fetches[searchIndex].hits = 0;
        var toSearch = splitAndSpit(searchStr);
        var innerSearchIndex = 0;
        while (innerSearchIndex < toSearch.length) {
            fetches[searchIndex].hits += search(toSearch[innerSearchIndex], fetches[searchIndex].searchable).length;

            innerSearchIndex++;
        }

        searchIndex++;
    }

    var sortedFetchesIndexes = [];
    while (fetches.length > sortedFetchesIndexes.length) {
        var maxHits = 0;
        var maxHitsIndex = 0;
        var discorveredNewIndex = false;
        for (var fetchIndex in fetches) {
            if (
                // do not check the ones already indexed
                !sortedFetchesIndexes.includes(fetchIndex) &&

                // ignore the ones with no hits
                fetches[fetchIndex].hits > maxHits
            ) {
                maxHits = fetches[fetchIndex].hits;
                maxHitsIndex = fetchIndex;

                discorveredNewIndex = true;
            }
        }

        if (!discorveredNewIndex) {
            break;
        } else {
            sortedFetchesIndexes = sortedFetchesIndexes.concat(maxHitsIndex);
        }
    }

    while (results.firstChild) {
        results.removeChild(results.lastChild);
    }

    results.classList.add("centerize");
    
    /*
    var loader = document.createElement("div");
    loader.classList.add("loader-generic");
    results.appendChild(loader);
    */
    
    var loader = document.createElement("video");
    loader.src = "/assets/images/icons/loading_launcher.mp4";
    loader.setAttribute("autoplay", "");
    loader.setAttribute("loop", "");
    loader.classList.add("loader-generic-new");
    results.appendChild(loader);

    setTimeout(function () {
        while (results.firstChild) {
            results.removeChild(results.lastChild);
        }

        results.classList.remove("centerize");
        if (sortedFetchesIndexes.length > 0) {
            for (var elementIndex in sortedFetchesIndexes) {
                results.appendChild(fetches[Number(sortedFetchesIndexes[elementIndex])].element);
                results.appendChild(document.createElement("br"));
            }
        } else {
            var p = document.createElement("p");
            p.innerText = "No results! Is your spelling correct? Try looking in the FAQ Categories."
            p.classList.add("center");
            results.appendChild(p);
        }
    }, (Math.random() * 1000) + 1000)
}

function LOCALWindowOnload() {
    var searchBox = document.getElementById("search-box");
    var searchButton = document.getElementById("search-button");

    searchBox.style.display = "block";

    function attemptSearch(event) {
        if (searchBox.value.length > 0) {
            commitSearch(searchBox.value);
        }
    }

    searchButton.addEventListener("click", attemptSearch);
    searchBox.addEventListener("keyup", function (event) {
        if (event.keyCode == 13) {
            attemptSearch();
        }
    });
}

if (window.onloadArray) {
    window.onloadArray.push(LOCALWindowOnload);
} else {
    window.onloadArray = [LOCALWindowOnload];
}