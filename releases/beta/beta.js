window.addEventListener("load", async function () {
    var pageIndex = 1;
    var lastPageIndex;
    var versionContainer = document.getElementById("version-container");
    var fetchCache = [];
    
    var newer = document.getElementById("newer");
    var older = document.getElementById("older");

    async function load(page) {
        var releasesJson;
        if (fetchCache[page]) {
            releasesJson = fetchCache[page]
        } else {
            var releasesFetch = await fetch(`https://api.github.com/repos/BedrockLauncher/BedrockLauncher-Beta/releases?per_page=10&page=${page}`);
            releasesJson = await releasesFetch.json();
            fetchCache[page] = releasesJson;
        }
        
        versionContainer.innerText = "";

        for (var releaseIndex in releasesJson) {
            var release = releasesJson[releaseIndex];
            var showDown = new showdown.Converter();
            var bodyMD = release.body;
            var title = release.name;
            var bodyHTML = showDown.makeHtml(bodyMD);
            var detailsElement = document.createElement("details");
            var brElement = document.createElement("br");
            var summaryElement = document.createElement("summary");
            var bodyContainer = document.createElement("div");

            summaryElement.innerText = title;

            bodyContainer.innerHTML = bodyHTML;

            detailsElement.classList.add("hidden-ans");
            detailsElement.appendChild(summaryElement);
            detailsElement.appendChild(bodyContainer);

            versionContainer.appendChild(detailsElement);
            versionContainer.appendChild(brElement);
        }
        
        if (page == 1 || lastPageIndex == 1) {
            newer.classList.add("disabled");
        } else {
            newer.classList.remove("disabled");
        }
        
        var nextFetch = await fetch(`https://api.github.com/repos/BedrockLauncher/BedrockLauncher-Beta/releases?per_page=10&page=${page + 1}`);
        var nextFetchJson = await nextFetch.json();
        if (nextFetchJson.length == 0) {
            lastPageIndex = pageIndex;
        } else {
            fetchCache[page + 1] = nextFetchJson;
        }
        
        if (page == lastPageIndex || lastPageIndex == 1) {
            older.classList.add("disabled");
        } else {
            older.classList.remove("disabled");
        }
    }

    load(pageIndex);
    
    newer.addEventListener("click", function () {
        if (!newer.classList.contains("disabled")) {
            pageIndex--;
            load(pageIndex);
        }
    });
    older.addEventListener("click", function () {
        if (!older.classList.contains("disabled")) {
            pageIndex++;
            load(pageIndex);
        }
    });
})
